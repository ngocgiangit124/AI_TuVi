import type { CityInfo, ProvinceInfo } from './cities';

export interface VnCityInfo extends CityInfo {
  /** 1954–1975 属北方时区的南方省内地点（如北纬 17 度线以北的永灵） */
  northZone?: boolean;
}

export interface VnProvinceInfo extends ProvinceInfo {
  /** 1954–1975 属北纬 17 度线以南，时区历史与北方不同（见 vnUtcOffsetMinutes） */
  south: boolean;
  cities: VnCityInfo[];
}

// 越南 63 个省级单位（2025 年合并前的区划，出生证上写的多为这些名称），经度取自 GeoNames。
export const VN_PROVINCES: VnProvinceInfo[] = [
  { name: 'Hà Nội', south: false, cities: [{ name: 'Hà Nội', longitude: 105.84 }] },
  { name: 'TP. Hồ Chí Minh', south: true, cities: [{ name: 'TP. Hồ Chí Minh', longitude: 106.63 }] },
  { name: 'Hải Phòng', south: false, cities: [{ name: 'Hải Phòng', longitude: 106.68 }] },
  { name: 'Đà Nẵng', south: true, cities: [
    { name: 'Đà Nẵng', longitude: 108.22 },
    { name: 'Quần đảo Hoàng Sa', longitude: 112.3 },
  ] },
  { name: 'Cần Thơ', south: true, cities: [{ name: 'Cần Thơ', longitude: 105.79 }] },
  { name: 'An Giang', south: true, cities: [
    { name: 'Long Xuyên', longitude: 105.44 },
    { name: 'Châu Đốc', longitude: 105.12 },
  ] },
  { name: 'Bà Rịa - Vũng Tàu', south: true, cities: [
    { name: 'Bà Rịa', longitude: 107.17 },
    { name: 'Vũng Tàu', longitude: 107.08 },
    { name: 'Côn Đảo', longitude: 106.6 },
  ] },
  { name: 'Bắc Giang', south: false, cities: [{ name: 'Bắc Giang', longitude: 106.19 }] },
  { name: 'Bắc Kạn', south: false, cities: [{ name: 'Bắc Kạn', longitude: 105.83 }] },
  { name: 'Bạc Liêu', south: true, cities: [{ name: 'Bạc Liêu', longitude: 105.72 }] },
  { name: 'Bắc Ninh', south: false, cities: [{ name: 'Bắc Ninh', longitude: 106.08 }] },
  { name: 'Bến Tre', south: true, cities: [{ name: 'Bến Tre', longitude: 106.38 }] },
  { name: 'Bình Định', south: true, cities: [{ name: 'Quy Nhơn', longitude: 109.22 }] },
  { name: 'Bình Dương', south: true, cities: [{ name: 'Thủ Dầu Một', longitude: 106.65 }] },
  { name: 'Bình Phước', south: true, cities: [{ name: 'Đồng Xoài', longitude: 106.88 }] },
  { name: 'Bình Thuận', south: true, cities: [{ name: 'Phan Thiết', longitude: 108.1 }] },
  { name: 'Cà Mau', south: true, cities: [{ name: 'Cà Mau', longitude: 105.15 }] },
  { name: 'Cao Bằng', south: false, cities: [{ name: 'Cao Bằng', longitude: 106.26 }] },
  { name: 'Đắk Lắk', south: true, cities: [{ name: 'Buôn Ma Thuột', longitude: 108.04 }] },
  { name: 'Đắk Nông', south: true, cities: [{ name: 'Gia Nghĩa', longitude: 107.69 }] },
  { name: 'Điện Biên', south: false, cities: [{ name: 'Điện Biên Phủ', longitude: 103.02 }] },
  { name: 'Đồng Nai', south: true, cities: [{ name: 'Biên Hòa', longitude: 106.82 }] },
  { name: 'Đồng Tháp', south: true, cities: [
    { name: 'Cao Lãnh', longitude: 105.63 },
    { name: 'Sa Đéc', longitude: 105.76 },
  ] },
  { name: 'Gia Lai', south: true, cities: [{ name: 'Pleiku', longitude: 108.0 }] },
  { name: 'Hà Giang', south: false, cities: [{ name: 'Hà Giang', longitude: 104.98 }] },
  { name: 'Hà Nam', south: false, cities: [{ name: 'Phủ Lý', longitude: 105.91 }] },
  { name: 'Hà Tĩnh', south: false, cities: [{ name: 'Hà Tĩnh', longitude: 105.91 }] },
  { name: 'Hải Dương', south: false, cities: [{ name: 'Hải Dương', longitude: 106.33 }] },
  { name: 'Hậu Giang', south: true, cities: [{ name: 'Vị Thanh', longitude: 105.47 }] },
  { name: 'Hòa Bình', south: false, cities: [{ name: 'Hòa Bình', longitude: 105.34 }] },
  { name: 'Hưng Yên', south: false, cities: [{ name: 'Hưng Yên', longitude: 106.05 }] },
  { name: 'Khánh Hòa', south: true, cities: [
    { name: 'Nha Trang', longitude: 109.19 },
    { name: 'Cam Ranh', longitude: 109.16 },
    { name: 'Quần đảo Trường Sa', longitude: 111.92 },
  ] },
  { name: 'Kiên Giang', south: true, cities: [
    { name: 'Rạch Giá', longitude: 105.08 },
    { name: 'Phú Quốc', longitude: 103.96 },
  ] },
  { name: 'Kon Tum', south: true, cities: [{ name: 'Kon Tum', longitude: 108.0 }] },
  { name: 'Lai Châu', south: false, cities: [{ name: 'Lai Châu', longitude: 103.46 }] },
  { name: 'Lâm Đồng', south: true, cities: [
    { name: 'Đà Lạt', longitude: 108.44 },
    { name: 'Bảo Lộc', longitude: 107.81 },
  ] },
  { name: 'Lạng Sơn', south: false, cities: [{ name: 'Lạng Sơn', longitude: 106.76 }] },
  { name: 'Lào Cai', south: false, cities: [
    { name: 'Lào Cai', longitude: 103.97 },
    { name: 'Sa Pa', longitude: 103.84 },
  ] },
  { name: 'Long An', south: true, cities: [{ name: 'Tân An', longitude: 106.41 }] },
  { name: 'Nam Định', south: false, cities: [{ name: 'Nam Định', longitude: 106.18 }] },
  { name: 'Nghệ An', south: false, cities: [{ name: 'Vinh', longitude: 105.69 }] },
  { name: 'Ninh Bình', south: false, cities: [{ name: 'Ninh Bình', longitude: 105.98 }] },
  { name: 'Ninh Thuận', south: true, cities: [{ name: 'Phan Rang - Tháp Chàm', longitude: 108.99 }] },
  { name: 'Phú Thọ', south: false, cities: [{ name: 'Việt Trì', longitude: 105.4 }] },
  { name: 'Phú Yên', south: true, cities: [{ name: 'Tuy Hòa', longitude: 109.32 }] },
  { name: 'Quảng Bình', south: false, cities: [{ name: 'Đồng Hới', longitude: 106.62 }] },
  { name: 'Quảng Nam', south: true, cities: [
    { name: 'Tam Kỳ', longitude: 108.47 },
    { name: 'Hội An', longitude: 108.33 },
  ] },
  { name: 'Quảng Ngãi', south: true, cities: [{ name: 'Quảng Ngãi', longitude: 108.79 }] },
  { name: 'Quảng Ninh', south: false, cities: [
    { name: 'Hạ Long', longitude: 107.07 },
    { name: 'Móng Cái', longitude: 107.97 },
  ] },
  { name: 'Quảng Trị', south: true, cities: [
    { name: 'Đông Hà', longitude: 107.1 },
    { name: 'Vĩnh Linh', longitude: 107.0, northZone: true },
  ] },
  { name: 'Sóc Trăng', south: true, cities: [{ name: 'Sóc Trăng', longitude: 105.97 }] },
  { name: 'Sơn La', south: false, cities: [{ name: 'Sơn La', longitude: 103.92 }] },
  { name: 'Tây Ninh', south: true, cities: [{ name: 'Tây Ninh', longitude: 106.1 }] },
  { name: 'Thái Bình', south: false, cities: [{ name: 'Thái Bình', longitude: 106.34 }] },
  { name: 'Thái Nguyên', south: false, cities: [{ name: 'Thái Nguyên', longitude: 105.85 }] },
  { name: 'Thanh Hóa', south: false, cities: [{ name: 'Thanh Hóa', longitude: 105.77 }] },
  { name: 'Thừa Thiên Huế', south: true, cities: [{ name: 'Huế', longitude: 107.6 }] },
  { name: 'Tiền Giang', south: true, cities: [{ name: 'Mỹ Tho', longitude: 106.36 }] },
  { name: 'Trà Vinh', south: true, cities: [{ name: 'Trà Vinh', longitude: 106.34 }] },
  { name: 'Tuyên Quang', south: false, cities: [{ name: 'Tuyên Quang', longitude: 105.21 }] },
  { name: 'Vĩnh Long', south: true, cities: [{ name: 'Vĩnh Long', longitude: 105.97 }] },
  { name: 'Vĩnh Phúc', south: false, cities: [{ name: 'Vĩnh Yên', longitude: 105.6 }] },
  { name: 'Yên Bái', south: false, cities: [{ name: 'Yên Bái', longitude: 104.87 }] },
];

export const isVietnamProvince = (province: string): boolean =>
  VN_PROVINCES.some(p => p.name === province);

const at = (y: number, m: number, d: number, h = 0) => Date.UTC(y, m - 1, d, h);

/**
 * 越南当时的法定钟表时区（分钟，东正西负），按钟表读数比较切换时刻。
 * 来源：tzdb 的 Asia/Ho_Chi_Minh、Asia/Hanoi（依据 Trần Tiến Bình《Lịch Việt Nam》2005）。
 * 1945–1954 越盟控制区与法占区可能不同，这里按 tzdb 统一处理；北方 1954-10 的切换日未详，取 10 月 1 日。
 */
export function vnUtcOffsetMinutes(
  south: boolean, year: number, month: number, day: number, hour = 12,
): number {
  const t = at(year, month, day, hour);
  if (t < at(1906, 7, 1)) return south ? 426.5 : 423.4;
  if (t < at(1911, 5, 1)) return 426.5;
  if (t < at(1942, 12, 31, 23)) return 420;
  if (t < at(1945, 3, 14, 23)) return 480;
  if (t < at(1945, 9, 2)) return 540;
  if (t < at(1947, 4, 1)) return 420;
  if (!south) return t < at(1954, 10, 1) ? 480 : 420;
  if (t < at(1955, 7, 1, 1)) return 480;
  if (t < at(1959, 12, 31, 23)) return 420;
  if (t < at(1975, 6, 13)) return 480;
  return 420;
}

/** 出生地为越南时返回当时时区；其余（中国、未填）返回 undefined，沿用北京时间口径 */
export function vnBirthplaceOffset(
  province: string, city: string, year: number, month: number, day: number, hour = 12,
): number | undefined {
  const prov = VN_PROVINCES.find(p => p.name === province);
  if (!prov) return undefined;
  if (!year || !month || !day) return 420;
  const northZone = prov.cities.find(c => c.name === city)?.northZone;
  return vnUtcOffsetMinutes(prov.south && !northZone, year, month, day, hour);
}
