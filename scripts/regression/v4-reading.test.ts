/**
 * v4 解读查询层：键格式、切句翻译、按主题还原正文（用内存外的临时库，不依赖 56.6 GB 数据集）。
 */
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { getReading, openReadingDb, readingKey, READING_TOPICS, translateParagraph, unpackIds } from '../../lib/v4/reading-db';
import { checkTemplateTranslation, renderTemplate, toTemplate } from '../../lib/v4/template';

assert.equal(readingKey(1990, 1, 1, 0, 'male'), '1990-01-01-0-male');
assert.equal(readingKey(2026, 12, 31, 11, 'female'), '2026-12-31-11-female');
assert.deepEqual(unpackIds(Uint8Array.of(1, 0, 0, 0, 0, 1, 0, 0)), [1, 256]);

const dict: Record<string, string> = { '甲。': 'Giáp.', '乙！': 'Ất!', '**【标题】**': '**【Tiêu đề】**' };
const look = (s: string) => dict[s];
assert.equal(translateParagraph('甲。乙！', look), 'Giáp. Ất!');
assert.equal(translateParagraph('**【标题】**', look), '**【Tiêu đề】**');
assert.equal(translateParagraph('甲。\n乙！', look), 'Giáp.\nẤt!');
assert.equal(translateParagraph('甲。丙。', look), null, '缺一句就整段不译，避免中越夹杂');
assert.equal(translateParagraph('他说「甲。」乙！', s => ({ '他说「甲。」': 'Ông nói “Giáp.”', '乙！': 'Ất!' })[s]), 'Ông nói “Giáp.” Ất!', '闭引号跟上一句，不单独成句');

const dir = mkdtempSync(path.join(tmpdir(), 'v4-reading-'));
const file = path.join(dir, 't.db');
const { DatabaseSync } = process.getBuiltinModule('node:sqlite') as unknown as {
  DatabaseSync: new (p: string) => { exec(s: string): void; prepare(s: string): { run(...a: unknown[]): void }; close(): void };
};
const w = new DatabaseSync(file);
w.exec(`CREATE TABLE para(id INTEGER PRIMARY KEY, zh TEXT NOT NULL);
  CREATE TABLE reading(id INTEGER PRIMARY KEY, para_ids BLOB NOT NULL);
  CREATE TABLE chart(k TEXT PRIMARY KEY, ms TEXT, readings BLOB NOT NULL) WITHOUT ROWID;
  CREATE TABLE tr(zh TEXT PRIMARY KEY, vi TEXT NOT NULL) WITHOUT ROWID;
  CREATE TABLE tmpl(zh TEXT PRIMARY KEY, n INTEGER NOT NULL, vi TEXT) WITHOUT ROWID;`);
const u32 = (...xs: number[]) => new Uint8Array(new Uint32Array(xs).buffer);
w.prepare('INSERT INTO para VALUES(?,?)').run(1, '**【标题】**');
w.prepare('INSERT INTO para VALUES(?,?)').run(2, '甲。丙。');
w.prepare('INSERT INTO reading VALUES(?,?)').run(1, u32(1, 2));
w.prepare('INSERT INTO reading VALUES(?,?)').run(2, u32(2));
const readings = READING_TOPICS.map((_, i) => (i === 2 ? 2 : 1));
w.prepare('INSERT INTO chart VALUES(?,?,?)').run('1990-01-01-0-male', '天府', u32(...readings));
w.prepare('INSERT INTO tr VALUES(?,?)').run('**【标题】**', '**【Tiêu đề】**');
w.prepare('INSERT INTO para VALUES(?,?)').run(3, '紫微化忌在命宫，共 6 颗。');
w.prepare('INSERT INTO reading VALUES(?,?)').run(3, u32(3));
w.prepare('INSERT INTO chart VALUES(?,?,?)').run('1991-01-01-0-male', null, u32(...READING_TOPICS.map(() => 3)));
w.prepare('INSERT INTO tmpl VALUES(?,?,?)').run('{S1}{H1}在{P1}，共 {N1} 颗。', 1, '{S1} {H1} ở {P1}, tổng {N1} sao.');
w.close();

const db = openReadingDb(file);
assert.deepEqual(getReading(db, '1990-01-01-0-male', 'overview'), { text: '**【Tiêu đề】**\n\n甲。丙。', paragraphs: 2, translated: 1 });
assert.deepEqual(getReading(db, '1990-01-01-0-male', 'love'), { text: '甲。丙。', paragraphs: 1, translated: 0 }, '第 3 个主题取自 readings[2]');
assert.equal(getReading(db, '1990-01-01-1-male', 'overview'), null);
assert.deepEqual(getReading(db, '1991-01-01-0-male', 'love'), { text: 'Tử Vi Hóa Kỵ ở cung Mệnh, tổng 6 sao.', paragraphs: 1, translated: 1 });

// 句型：普通词不占位，专名按序编号，校验能拦下漏占位符和残留汉字
const t = toTemplate('天机化禄（落陷）在寅宫，子宫与天才皆留原样，火六局 12 处。');
assert.equal(t.template, '{S1}{H1}（{B1}）在{G1}，子宫与天才皆留原样，{J1} {N1} 处。');
assert.equal(renderTemplate('{S1} {H1} ({B1}) ở {G1}, {J1} {N1} chỗ.', t.values), 'Thiên Cơ Hóa Lộc (Hãm Địa) ở cung Dần, Hỏa Lục Cục 12 chỗ.');
assert.equal(checkTemplateTranslation('{S1}在{P1}', '{S1} ở {P1}'), null);
assert.match(checkTemplateTranslation('{S1}在{P1}', '{S1} ở đây') ?? '', /placeholders/);
assert.match(checkTemplateTranslation('{S1}', '{S1} 紫') ?? '', /Chinese/);
assert.match(checkTemplateTranslation('**{S1}**', '{S1}') ?? '', /bold/);
(db as unknown as { close(): void }).close();
rmSync(dir, { recursive: true, force: true });

console.log('v4 reading regression passed');
