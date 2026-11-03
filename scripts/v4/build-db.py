#!/usr/bin/env python3
"""把 v4.0 解读数据集（77 个 year-YYYY.jsonl.zst）流式导入 SQLite，无需先解压 56.6 GB。

用法: python3 scripts/v4/build-db.py [数据目录] [输出 db]
默认: data/v4.0-13d → data/v4.db。需要 PATH 或 ~/.local/bin 里有 zstd。
python3 scripts/v4/build-db.py --sentences-only [db]：只按当前切句规则重建 sent 表，不动译文。

正文重复率极高，所以逐层去重：chart → 13 篇 reading → 段落 para。
sent 表是翻译队列：句子按全库出现次数计数，切句规则必须与 lib/v4/reading-db.ts 一致。
"""
import hashlib, json, os, re, shutil, sqlite3, struct, subprocess, sys, time

TOPICS = ['overview', 'personality', 'love', 'career', 'wealth', 'health', 'family',
          'children', 'move', 'friends', 'home', 'spirit', 'parents']
# 句末标点后紧跟的闭引号归入本句
SENT_END = re.compile(r'(?<=[。！？；\n])(?![」』”’）])|(?<=[。！？；][」』”’）])')


def build_sentences(db):
    """句子频次：chart → reading 次数 → 段落次数 → 句子次数。"""
    max_reading = db.execute('SELECT max(id) FROM reading').fetchone()[0]
    max_para = db.execute('SELECT max(id) FROM para').fetchone()[0]
    reading_n = [0] * (max_reading + 1)
    for (blob,) in db.execute('SELECT readings FROM chart'):
        for (rid,) in struct.iter_unpack('<I', blob):
            reading_n[rid] += 1
    para_n = [0] * (max_para + 1)
    for rid, blob in db.execute('SELECT id, para_ids FROM reading'):
        n = reading_n[rid]
        for (pid,) in struct.iter_unpack('<I', blob):
            para_n[pid] += n
    sent_n = {}
    for pid, zh in db.execute('SELECT id, zh FROM para'):
        for s in SENT_END.split(zh):
            s = s.strip()
            if s:
                sent_n[s] = sent_n.get(s, 0) + para_n[pid]
    db.execute('DELETE FROM sent')
    db.executemany('INSERT INTO sent VALUES(?,?)', sent_n.items())
    db.execute("INSERT OR REPLACE INTO meta VALUES('sentences', ?)", (str(len(sent_n)),))
    db.commit()
    return len(sent_n)


if len(sys.argv) > 1 and sys.argv[1] == '--sentences-only':
    path = sys.argv[2] if len(sys.argv) > 2 else 'data/v4.db'
    print('sentences', build_sentences(sqlite3.connect(path)))
    sys.exit(0)


src = sys.argv[1] if len(sys.argv) > 1 else 'data/v4.0-13d'
out = sys.argv[2] if len(sys.argv) > 2 else 'data/v4.db'
zstd = shutil.which('zstd') or os.path.expanduser('~/.local/bin/zstd')
tmp = out + '.tmp'
if os.path.exists(tmp):
    os.remove(tmp)

db = sqlite3.connect(tmp)
db.executescript('''
  PRAGMA journal_mode=OFF; PRAGMA synchronous=OFF;
  CREATE TABLE meta(k TEXT PRIMARY KEY, v TEXT) WITHOUT ROWID;
  CREATE TABLE para(id INTEGER PRIMARY KEY, zh TEXT NOT NULL);
  CREATE TABLE reading(id INTEGER PRIMARY KEY, para_ids BLOB NOT NULL);
  CREATE TABLE chart(k TEXT PRIMARY KEY, ms TEXT, readings BLOB NOT NULL) WITHOUT ROWID;
  CREATE TABLE sent(zh TEXT PRIMARY KEY, n INTEGER NOT NULL) WITHOUT ROWID;
  CREATE TABLE tr(zh TEXT PRIMARY KEY, vi TEXT NOT NULL) WITHOUT ROWID;
''')
digest = lambda s: hashlib.blake2b(s.encode(), digest_size=12).digest()
para_ids, reading_ids = {}, {}
charts = 0
started = time.time()
manifest = json.load(open(os.path.join(src, 'MANIFEST.json'), encoding='utf8'))

for entry in manifest['files']:
    year = entry['year']
    proc = subprocess.Popen([zstd, '-dc', '--long=27', '-q', os.path.join(src, f'year-{year}.jsonl.zst')],
                            stdout=subprocess.PIPE, text=True, encoding='utf8')
    rows, new_paras, new_readings = [], [], []
    for line in proc.stdout:
        r = json.loads(line)
        ids = []
        for topic in TOPICS:
            text = r['c'][topic]
            h = digest(text)
            rid = reading_ids.get(h)
            if rid is None:
                pids = []
                for p in text.split('\n\n'):
                    ph = digest(p)
                    pid = para_ids.get(ph)
                    if pid is None:
                        pid = para_ids[ph] = len(para_ids) + 1
                        new_paras.append((pid, p))
                    pids.append(pid)
                rid = reading_ids[h] = len(reading_ids) + 1
                new_readings.append((rid, struct.pack(f'<{len(pids)}I', *pids)))
            ids.append(rid)
        rows.append((r['k'], r['ms'], struct.pack('<13I', *ids)))
    if proc.wait() != 0:
        sys.exit(f'zstd failed on {year}')
    if len(rows) != entry['charts']:
        sys.exit(f'{year}: {len(rows)} charts, manifest says {entry["charts"]}')
    db.executemany('INSERT INTO para VALUES(?,?)', new_paras)
    db.executemany('INSERT INTO reading VALUES(?,?)', new_readings)
    db.executemany('INSERT INTO chart VALUES(?,?,?)', rows)
    db.commit()
    charts += len(rows)
    print(f'{year} charts={charts} readings={len(reading_ids)} paras={len(para_ids)} {time.time()-started:.0f}s', flush=True)

if charts != manifest['totalCharts']:
    sys.exit(f'total {charts} != manifest {manifest["totalCharts"]}')

del para_ids, reading_ids
sentences = build_sentences(db)
db.executemany('INSERT INTO meta VALUES(?,?)', [
    ('contentVersion', manifest['contentVersion']), ('releaseTag', manifest['releaseTag']),
    ('charts', str(charts)),
])
db.commit()
db.close()
os.replace(tmp, out)
print(f'DONE charts={charts} sentences={sentences} size={os.path.getsize(out)/1e9:.2f}GB {time.time()-started:.0f}s', flush=True)
