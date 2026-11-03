import path from 'node:path';
import { existsSync } from 'node:fs';
import { NextResponse } from 'next/server';
import {
  getReading, openReadingDb, readingKey, READING_TOPICS, MIN_READING_YEAR, MAX_READING_YEAR,
  type ReadingTopic,
} from '@/lib/v4/reading-db';

const DB_PATH = process.env.ZIWEI_V4_DB || path.join(process.cwd(), 'data', 'v4.db');
let db: ReturnType<typeof openReadingDb> | null = null;

const intParam = (params: URLSearchParams, name: string, min: number, max: number): number | null => {
  const raw = params.get(name) ?? '';
  if (!/^\d{1,4}$/.test(raw)) return null;
  const value = Number(raw);
  return value >= min && value <= max ? value : null;
};

export async function GET(req: Request) {
  const params = new URL(req.url).searchParams;
  const month = intParam(params, 'm', 1, 12);
  const day = intParam(params, 'd', 1, 31);
  const hour = intParam(params, 'h', 0, 11);
  const gender = params.get('g');
  const topic = params.get('topic') as ReadingTopic;
  const rawYear = intParam(params, 'y', 1, 9999);
  if (rawYear === null || month === null || day === null || hour === null
    || (gender !== 'male' && gender !== 'female') || !READING_TOPICS.includes(topic)) {
    return NextResponse.json({ error: 'bad-request' }, { status: 400 });
  }
  if (rawYear < MIN_READING_YEAR || rawYear > MAX_READING_YEAR) {
    return NextResponse.json({ error: 'year-out-of-range' }, { status: 404 });
  }
  if (!db) {
    if (!existsSync(DB_PATH)) return NextResponse.json({ error: 'db-missing' }, { status: 503 });
    db = openReadingDb(DB_PATH);
  }
  const result = getReading(db, readingKey(rawYear, month, day, hour, gender), topic);
  if (!result) return NextResponse.json({ error: 'not-found' }, { status: 404 });
  return NextResponse.json(result);
}
