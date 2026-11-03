/**
 * 由 sent 表生成句型表 tmpl，并按字数切成 translations/v4/part-NNN.jsonl 供翻译。
 * 用法: npx tsx scripts/v4/export-templates.ts [每份字数，默认 20000]
 * 已有译文（tmpl.vi）保留；每行 {"id": 序号, "zh": 句型}，高频句型在前。
 */
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { toTemplate } from '../../lib/v4/template';

const perPart = Number(process.argv[2]) || 20000;
const { DatabaseSync } = process.getBuiltinModule('node:sqlite') as unknown as {
  DatabaseSync: new (path: string) => {
    exec(sql: string): void;
    prepare(sql: string): { run(...args: unknown[]): void; iterate(): Iterable<unknown> };
  };
};
const db = new DatabaseSync('data/v4.db');
db.exec('CREATE TABLE IF NOT EXISTS tmpl(zh TEXT PRIMARY KEY, n INTEGER NOT NULL, vi TEXT) WITHOUT ROWID');

const weight = new Map<string, number>();
const rows = db.prepare('SELECT zh, n FROM sent').iterate() as Iterable<{ zh: string; n: number }>;
for (const { zh, n } of rows) {
  const { template } = toTemplate(zh);
  weight.set(template, (weight.get(template) ?? 0) + n * zh.length);
}
const upsert = db.prepare('INSERT INTO tmpl(zh, n) VALUES(?, ?) ON CONFLICT(zh) DO UPDATE SET n = excluded.n');
db.exec('BEGIN');
for (const [zh, n] of weight) upsert.run(zh, n);
db.exec('COMMIT');

const sorted = [...weight.entries()].sort((a, b) => b[1] - a[1]);
rmSync('translations/v4', { recursive: true, force: true });
mkdirSync('translations/v4', { recursive: true });
let part = 0, chars = 0, lines: string[] = [];
const flush = () => {
  if (!lines.length) return;
  writeFileSync(`translations/v4/part-${String(part++).padStart(3, '0')}.jsonl`, lines.join('\n') + '\n');
  lines = []; chars = 0;
};
const total = sorted.reduce((sum, [z]) => sum + z.length, 0);
sorted.forEach(([zh], id) => {
  lines.push(JSON.stringify({ id, zh }));
  chars += zh.length;
  if (chars >= perPart) flush();
});
flush();
console.log(`templates=${sorted.length} chars=${total} parts=${part}`);
