/**
 * v4.0 解读数据集的只读查询层（数据由 scripts/v4/build-db.py 生成，默认 data/v4.db）。
 * 用 process.getBuiltinModule 取 node:sqlite，避免打包器去解析这个内置模块。
 */
import { renderTemplate, toTemplate } from './template';

export const READING_TOPICS = [
  'overview', 'personality', 'love', 'career', 'wealth', 'health', 'family',
  'children', 'move', 'friends', 'home', 'spirit', 'parents',
] as const;
export type ReadingTopic = (typeof READING_TOPICS)[number];

export const MIN_READING_YEAR = 1950;
export const MAX_READING_YEAR = 2026;

export interface ReadingResult {
  text: string;
  /** 段落总数（不含空段）与已有越南语译文的段落数 */
  paragraphs: number;
  translated: number;
}

// 与 scripts/v4/build-db.py 的 SENT_END 同一切句规则：句末标点后紧跟的闭引号归入本句
const SENT_END = /(?<=[。！？；\n])(?![」』”’）])|(?<=[。！？；][」』”’）])/;

/** 数据集的 k 字段：1990-01-01-0-male */
export function readingKey(year: number, month: number, day: number, hour: number, gender: string): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}-${hour}-${gender}`;
}

/** 整段每一句都有译文才返回译文，否则返回 null（不输出中越夹杂的段落） */
export function translateParagraph(zh: string, lookup: (sentence: string) => string | undefined): string | null {
  let out = '';
  for (const piece of zh.split(SENT_END)) {
    const sentence = piece.trim();
    if (!sentence) { out += piece; continue; }
    const vi = lookup(sentence);
    if (vi === undefined) return null;
    if (out && !out.endsWith('\n')) out += ' ';
    out += vi + (piece.endsWith('\n') ? '\n' : '');
  }
  return out;
}

export function unpackIds(blob: Uint8Array): number[] {
  const view = new DataView(blob.buffer, blob.byteOffset, blob.byteLength);
  const ids: number[] = [];
  for (let i = 0; i < blob.byteLength; i += 4) ids.push(view.getUint32(i, true));
  return ids;
}

interface Statement { get(...args: unknown[]): Record<string, unknown> | undefined }
interface Database { prepare(sql: string): Statement }

export function openReadingDb(path: string): Database {
  const { DatabaseSync } = process.getBuiltinModule('node:sqlite') as unknown as {
    DatabaseSync: new (path: string, options: { readOnly: boolean }) => Database;
  };
  return new DatabaseSync(path, { readOnly: true });
}

/** 查一篇解读；数据集里没有这张盘时返回 null */
export function getReading(db: Database, key: string, topic: ReadingTopic): ReadingResult | null {
  const chart = db.prepare('SELECT readings FROM chart WHERE k = ?').get(key);
  if (!chart) return null;
  const readingId = unpackIds(chart.readings as Uint8Array)[READING_TOPICS.indexOf(topic)];
  const reading = db.prepare('SELECT para_ids FROM reading WHERE id = ?').get(readingId);
  if (!reading) return null;

  const paraStmt = db.prepare('SELECT zh FROM para WHERE id = ?');
  const trStmt = db.prepare('SELECT vi FROM tr WHERE zh = ?');
  const tmplStmt = db.prepare('SELECT vi FROM tmpl WHERE zh = ?');
  // 整句译文优先（用于个别修订），否则查句型再填回专名
  const lookup = (s: string) => {
    const exact = trStmt.get(s)?.vi as string | undefined;
    if (exact !== undefined) return exact;
    const { template, values } = toTemplate(s);
    const vi = tmplStmt.get(template)?.vi as string | null | undefined;
    return vi ? renderTemplate(vi, values) : undefined;
  };
  let paragraphs = 0;
  let translated = 0;
  const parts = unpackIds(reading.para_ids as Uint8Array).map(id => {
    const zh = paraStmt.get(id)?.zh as string;
    if (!zh.trim()) return zh;
    paragraphs += 1;
    const vi = translateParagraph(zh, lookup);
    if (vi === null) return zh;
    translated += 1;
    return vi;
  });
  return { text: parts.join('\n\n'), paragraphs, translated };
}
