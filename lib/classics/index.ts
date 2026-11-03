/**
 * 古籍原典查询库 — 入口
 *
 * 加载所有古籍数据 + 提供查询/搜索 API
 * 数据为 JSON 静态打包，零 DB 依赖、零网络请求
 */

import type { Book, Paragraph, SearchHit } from './types';
import { guSuiFu } from './data/gusuifu';
import { ziWeiQuanJi } from './data/quanji';
import { ziWeiQuanShu } from './data/quanshu';

/** 所有已收录古籍 */
export const ALL_BOOKS: Book[] = [
  guSuiFu,
  ziWeiQuanJi,
  ziWeiQuanShu,
];

/** 总段落数（用于首页统计） */
export const TOTAL_PARAGRAPHS = ALL_BOOKS.reduce(
  (sum, b) => sum + b.chapters.reduce((s, c) => s + c.paragraphs.length, 0),
  0,
);

/** 按 slug 取书 */
export function getBookBySlug(slug: string): Book | null {
  return ALL_BOOKS.find(b => b.slug === slug) ?? null;
}

/** 按章节序号取章节 */
export function getChapter(bookSlug: string, chapterIdx: number) {
  const book = getBookBySlug(bookSlug);
  if (!book) return null;
  const chapter = book.chapters[chapterIdx];
  if (!chapter) return null;
  return { book, chapter, chapterIdx };
}

/** 按段落 id 取段落（含书与章节信息）*/
export function getParagraphById(id: string) {
  for (const book of ALL_BOOKS) {
    for (let i = 0; i < book.chapters.length; i++) {
      const ch = book.chapters[i];
      const p = ch.paragraphs.find(p => p.id === id);
      if (p) {
        return { book, chapter: ch, chapterIdx: i, paragraph: p };
      }
    }
  }
  return null;
}

/**
 * 全文搜索
 *
 * 简单子字符串匹配（不分词，对中文 OK），同时查原文 text 与越南语译文 translation。
 * 大小写不敏感；越南语带声调的完全匹配排在前面，其后才是去声调后的匹配
 * （用户常不打声调，所以 "hoa loc" 也要能找到 "Hóa Lộc"）。繁简转换暂不支持。
 */
export function searchClassics(query: string, limit = 30): SearchHit[] {
  const q = query.trim();
  if (q.length < 1) return [];

  const exactQuery = foldWithMap(q.normalize('NFC'), false).folded;
  const looseQuery = foldWithMap(q, true).folded;

  const exactHits: SearchHit[] = [];
  const looseHits: SearchHit[] = [];
  for (const book of ALL_BOOKS) {
    for (const chapter of book.chapters) {
      for (const p of chapter.paragraphs) {
        const fields = p.translation ? [p.text, p.translation] : [p.text];

        let found = firstMatch(fields, exactQuery, false);
        const bucket = found ? exactHits : looseHits;
        // 查询只含组合附加符时 looseQuery 为空，空串会匹配一切，必须跳过
        found ??= looseQuery ? firstMatch(fields, looseQuery, true) : null;
        if (!found) continue;

        bucket.push({
          bookSlug: book.slug,
          bookTitle: book.title,
          chapterTitle: chapter.title,
          paragraphId: p.id,
          snippet: buildSnippet(found.field, found.start, found.end),
          text: p.text,
        });

        if (exactHits.length >= limit) return exactHits;
      }
    }
  }
  return [...exactHits, ...looseHits].slice(0, limit);
}

/**
 * 折叠字符串用于比较，并记录每个折叠后字符对应的原串下标。
 * map[i] 是 folded[i] 来自的原串起点，map[folded.length] 是原串长度。
 * 逐码点处理，长度变化（去声调、大小写变换）都不会让偏移错位。
 */
function foldWithMap(s: string, stripMarks: boolean): { folded: string; map: number[] } {
  let folded = '';
  const map: number[] = [];
  let i = 0;
  for (const ch of s) {
    const piece = stripMarks
      ? ch.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/đ/g, 'd')
      : ch.toLowerCase();
    folded += piece;
    for (let k = 0; k < piece.length; k++) map.push(i);
    i += ch.length;
  }
  map.push(s.length);
  return { folded, map };
}

/** 依次在各字段里找 foldedQuery，返回首个命中的字段及其在原串上的 [start, end) */
function firstMatch(fields: string[], foldedQuery: string, stripMarks: boolean) {
  for (const field of fields) {
    const { folded, map } = foldWithMap(field, stripMarks);
    const at = folded.indexOf(foldedQuery);
    if (at < 0) continue;
    // 命中若停在一个原字符展开结果的中间，把终点推到该字符之后
    let stop = at + foldedQuery.length;
    while (stop < folded.length && map[stop] === map[stop - 1]) stop++;
    return { field, start: map[at], end: map[stop] };
  }
  return null;
}

/** 提取上下文（前后各 40 字）并高亮；所有片段都取自原串并逐段转义 */
function buildSnippet(s: string, idx: number, matchEnd: number): string {
  const start = Math.max(0, idx - 40);
  const end = Math.min(s.length, matchEnd + 40);
  return (start > 0 ? '…' : '')
    + escapeHtml(s.slice(start, idx))
    + `<mark>${escapeHtml(s.slice(idx, matchEnd))}</mark>`
    + escapeHtml(s.slice(matchEnd, end))
    + (end < s.length ? '…' : '');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export type { Book, Chapter, Paragraph, SearchHit } from './types';
