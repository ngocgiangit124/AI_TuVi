/**
 * 校验译文 translations/v4/part-NNN.vi.jsonl，并写入 data/v4.db 的 tmpl 表。
 * npx tsx scripts/v4/import-templates.ts --check   只校验（不需要数据库，云端会话用这个）
 * npx tsx scripts/v4/import-templates.ts           校验后导入合格的译文
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { checkTemplateTranslation } from '../../lib/v4/template';

const DIR = 'translations/v4';
const checkOnly = process.argv.includes('--check');
const sources = readdirSync(DIR).filter(f => /^part-\d+\.jsonl$/.test(f)).sort();
const good: [string, string][] = [];
let total = 0;
let missing = 0;
const problems: string[] = [];

for (const file of sources) {
  const src = readFileSync(`${DIR}/${file}`, 'utf8').trim().split('\n').map(l => JSON.parse(l) as { id: number; zh: string });
  total += src.length;
  const viFile = `${DIR}/${file.replace('.jsonl', '.vi.jsonl')}`;
  const vi = new Map<number, string>();
  if (existsSync(viFile)) {
    readFileSync(viFile, 'utf8').trim().split('\n').forEach((line, i) => {
      try {
        const row = JSON.parse(line) as { id: number; vi: string };
        vi.set(row.id, row.vi);
      } catch {
        problems.push(`${viFile}:${i + 1} invalid JSON`);
      }
    });
  }
  for (const { id, zh } of src) {
    const text = vi.get(id);
    if (text === undefined) { missing += 1; continue; }
    const issue = checkTemplateTranslation(zh, text);
    if (issue) problems.push(`${file} id=${id}: ${issue}`);
    else good.push([zh, text]);
  }
}

if (!checkOnly && good.length) {
  const { DatabaseSync } = process.getBuiltinModule('node:sqlite') as unknown as {
    DatabaseSync: new (path: string) => { exec(sql: string): void; prepare(sql: string): { run(...args: unknown[]): void } };
  };
  const db = new DatabaseSync('data/v4.db');
  const update = db.prepare('UPDATE tmpl SET vi = ? WHERE zh = ?');
  db.exec('BEGIN');
  for (const [zh, text] of good) update.run(text, zh);
  db.exec('COMMIT');
}

for (const p of problems.slice(0, 40)) console.log(p);
console.log(`templates=${total} valid=${good.length} missing=${missing} problems=${problems.length}`);
if (problems.length) process.exit(1);
