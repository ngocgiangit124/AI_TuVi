/**
 * 越南出生地：钟表时区按当时法定时区（南北不同），中国及未填出生地的结果必须与旧公式逐分钟一致。
 */
import assert from 'node:assert/strict';
import { calcTrueSolarBranch, formClockOffsetMinutes, formToBirthInfo } from '../../lib/ziwei/share';
import { VN_PROVINCES, vnUtcOffsetMinutes } from '../../lib/ziwei/cities-vn';
import { PROVINCES } from '../../lib/ziwei/cities';
import type { BirthFormState } from '../../components/BirthForm';

const form = (o: Partial<BirthFormState>): BirthFormState => ({
  name: '', year: '2000', month: '6', day: '15', clockHour: '12', clockMinute: '0', unknownTime: false,
  province: '', city: '', longitude: 120, gender: 'male', ...o,
});
const vn = (province: string, city: string, o: Partial<BirthFormState> = {}) => {
  const longitude = VN_PROVINCES.find(p => p.name === province)!.cities.find(c => c.name === city)!.longitude;
  return form({ province, city, longitude, ...o });
};

// ① 63 个省级单位齐全，名称不重复，经度都在越南范围内
assert.equal(VN_PROVINCES.length, 63);
assert.equal(new Set(VN_PROVINCES.map(p => p.name)).size, 63);
for (const p of VN_PROVINCES) for (const c of p.cities) assert.ok(c.longitude > 102 && c.longitude < 115, c.name);

// ② 时区切换点（tzdb Asia/Ho_Chi_Minh、Asia/Hanoi）
const cases: [boolean, number, number, number, number, number][] = [
  [false, 1954, 9, 30, 12, 480], [false, 1954, 10, 1, 12, 420], [false, 1968, 1, 1, 12, 420],
  [true, 1955, 7, 1, 0, 480], [true, 1955, 7, 1, 1, 420],
  [true, 1959, 12, 31, 22, 420], [true, 1959, 12, 31, 23, 480],
  [true, 1975, 6, 12, 23, 480], [true, 1975, 6, 13, 0, 420],
  [true, 1945, 3, 14, 23, 540], [false, 1945, 9, 2, 0, 420], [false, 1947, 4, 1, 0, 480], [true, 2000, 1, 1, 12, 420],
];
for (const [south, y, m, d, h, want] of cases) assert.equal(vnUtcOffsetMinutes(south, y, m, d, h), want, `${south} ${y}-${m}-${d} ${h}`);

// ③ 同一钟表读数，1970 年南方（+8）与北方（+7）差一小时：西贡 08:30 → 真太阳时约 07:37；河内 → 08:29
assert.equal(formClockOffsetMinutes(vn('TP. Hồ Chí Minh', 'TP. Hồ Chí Minh', { year: '1970' })), 480);
assert.equal(formClockOffsetMinutes(vn('Hà Nội', 'Hà Nội', { year: '1970' })), 420);
assert.equal(formClockOffsetMinutes(vn('TP. Hồ Chí Minh', 'TP. Hồ Chí Minh', { year: '1980' })), 420);
assert.equal(formClockOffsetMinutes(vn('Quảng Trị', 'Đông Hà', { year: '1970' })), 480);
assert.equal(formClockOffsetMinutes(vn('Quảng Trị', 'Vĩnh Linh', { year: '1970' })), 420, '永灵在 17 度线以北');

// 河内 2000 年 07:10：经度差 (105.84−105)×4≈+3 分 → 07:13 仍是辰时；若误按北京时间会变成 06:13 卯时
assert.equal(formToBirthInfo(vn('Hà Nội', 'Hà Nội', { clockHour: '7', clockMinute: '10' })).hour, 4);
assert.equal(calcTrueSolarBranch(7, 10, 105.84), 3, '旧口径（北京时间）对越南是错的，这里确认差异确实存在');

// ④ 晚子时换日跟时辰同一口径：河内 23:00 → 真太阳时 23:03 晚子时，排到次日
const late = formToBirthInfo(vn('Hà Nội', 'Hà Nội', { clockHour: '23', clockMinute: '0' }));
assert.deepEqual([late.month, late.day, late.hour], [6, 16, 0]);

// ⑤ 中国及未填出生地：与改动前的公式逐分钟一致
const oldBranch = (h: number, mi: number, lon: number) => {
  const solar = ((h * 60 + mi + (lon - 120) * 4) % 1440 + 1440) % 1440;
  if (solar >= 1380 || solar < 60) return 0;
  return Math.floor((solar - 60) / 120) + 1;
};
for (const p of PROVINCES) for (const c of p.cities) for (const h of [0, 1, 7, 12, 22, 23]) for (const mi of [0, 29, 59]) {
  const f = form({ province: p.name, city: c.name, longitude: c.longitude, clockHour: String(h), clockMinute: String(mi) });
  assert.equal(formClockOffsetMinutes(f), 480);
  assert.equal(calcTrueSolarBranch(h, mi, c.longitude), oldBranch(h, mi, c.longitude));
  assert.equal(calcTrueSolarBranch(h, mi, c.longitude, formClockOffsetMinutes(f)), oldBranch(h, mi, c.longitude));
  assert.equal(formToBirthInfo(f).hour, oldBranch(h, mi, c.longitude));
}
assert.equal(formClockOffsetMinutes(form({ province: '', city: '' })), 480);

console.log('Vietnam birthplace regression passed');
