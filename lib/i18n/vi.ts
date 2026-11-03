/**
 * 越南语显示层：算法层内部一律保留中文键（星名、宫名、四化），只在渲染时转换。
 * 星曜表由 iztro 的 zh-CN / vi-VN 语言包生成，并修正了亮度「陷」的译名（Hãm）。
 */

const STARS: Record<string, string> = {
  '紫微': 'Tử Vi',
  '天机': 'Thiên Cơ',
  '太阳': 'Thái Dương',
  '武曲': 'Vũ Khúc',
  '天同': 'Thiên Đồng',
  '廉贞': 'Liêm Trinh',
  '天府': 'Thiên Phủ',
  '太阴': 'Thái Âm',
  '贪狼': 'Tham Lang',
  '巨门': 'Cự Môn',
  '天相': 'Thiên Tướng',
  '天梁': 'Thiên Lương',
  '七杀': 'Thất Sát',
  '破军': 'Phá Quân',
  '左辅': 'Tả Phù',
  '右弼': 'Hữu Bật',
  '文昌': 'Văn Xương',
  '文曲': 'Văn Khúc',
  '禄存': 'Lộc Tồn',
  '天马': 'Thiên Mã',
  '擎羊': 'Kình Dương',
  '陀罗': 'Đà La',
  '火星': 'Hỏa Tinh',
  '铃星': 'Linh Tinh',
  '天魁': 'Thiên Khôi',
  '天钺': 'Thiên Việt',
  '地空': 'Địa Không',
  '地劫': 'Địa Kiếp',
  '劫杀': 'Kiếp Sát',
  '天空': 'Thiên Không',
  '天刑': 'Thiên Hình',
  '天姚': 'Thiên Diêu',
  '解神': 'Giải Thần',
  '阴煞': 'Âm Sát',
  '天喜': 'Thiên Hỷ',
  '天官': 'Thiên Quan',
  '天福': 'Thiên Phúc',
  '天哭': 'Thiên Khốc',
  '天虚': 'Thiên Hư',
  '龙池': 'Long Trì',
  '凤阁': 'Phụng Các',
  '红鸾': 'Hồng Loan',
  '孤辰': 'Cô Thần',
  '寡宿': 'Quả Tú',
  '蜚廉': 'Phi Liêm',
  '破碎': 'Phá Toái',
  '台辅': 'Đài Phụ',
  '封诰': 'Phong Cáo',
  '天巫': 'Thiên Vu',
  '天月': 'Thiên Nguyệt',
  '三台': 'Tam Thai',
  '八座': 'Bát Tọa',
  '恩光': 'Ân Quang',
  '天贵': 'Thiên Quý',
  '天才': 'Thiên Tài',
  '天寿': 'Thiên Thọ',
  '截空': 'Triệt Không',
  '副截': 'Phó Triệt',
  '旬中': 'Tuần Trung',
  '旬空': 'Tuần Không',
  '副旬': 'Phó Tuần',
  '空亡': 'Không Vong',
  '截路': 'Triệt Lộ',
  '月德': 'Nguyệt Đức',
  '天伤': 'Thiên Thương',
  '天使': 'Thiên Sứ',
  '天厨': 'Thiên Trù',
  '长生': 'Trường Sinh',
  '沐浴': 'Mục Dục',
  '冠带': 'Quan Đới',
  '临官': 'Lâm Quan',
  '帝旺': 'Đế Vượng',
  '衰': 'Suy',
  '病': 'Bệnh',
  '死': 'Tử',
  '墓': 'Mộ',
  '绝': 'Tuyệt',
  '胎': 'Thai',
  '养': 'Dưỡng',
  '博士': 'Bác Sỹ',
  '力士': 'Lực Sỹ',
  '青龙': 'Thanh Long',
  '小耗': 'Tiểu Hao',
  '将军': 'Tướng Quân',
  '奏书': 'Tấu Thư',
  '飞廉': 'Phi Liêm',
  '喜神': 'Hỷ Thần',
  '病符': 'Bệnh Phù',
  '大耗': 'Đại Hao',
  '岁破': 'Tuế Phá',
  '伏兵': 'Phục Binh',
  '官府': 'Quan Phủ',
  '岁建': 'Tuế Kiện',
  '晦气': 'Hối Khí',
  '丧门': 'Tang Môn',
  '贯索': 'Quán Tác',
  '官符': 'Quan Phù',
  '龙德': 'Long Đức',
  '白虎': 'Bạch Hổ',
  '天德': 'Thiên Đức',
  '吊客': 'Điếu Khách',
  '将星': 'Tướng Tinh',
  '攀鞍': 'Phan Án',
  '岁驿': 'Tuế Dịch',
  '息神': 'Tức Thần',
  '华盖': 'Hoa Cái',
  '劫煞': 'Kiếp Sát',
  '灾煞': 'Tai Sát',
  '天煞': 'Thiên Sát',
  '指背': 'Chỉ Bối',
  '咸池': 'Hàm Trì',
  '月煞': 'Nguyệt Sát',
  '亡神': 'Vong Thần',
  '运魁': 'Vận Khôi',
  '运钺': 'Vận Việt',
  '运昌': 'Vận Xương',
  '运曲': 'Vận Khúc',
  '运鸾': 'Vận Loan',
  '运喜': 'Vận Hỷ',
  '运禄': 'Vận Lộc',
  '运羊': 'Vận Dương',
  '运陀': 'Vận Đà',
  '运马': 'Vận Mã',
  '流魁': 'Lưu Khôi',
  '流钺': 'Lưu Việt',
  '流昌': 'Lưu Xương',
  '流曲': 'Lưu Khúc',
  '流鸾': 'Lưu Loan',
  '流喜': 'Lưu Hỷ',
  '流禄': 'Lưu Lộc',
  '流羊': 'Lưu Dương',
  '流陀': 'Lưu Đà',
  '流马': 'Lưu Mã',
  '年解': 'Niên Giải'
};

const PALACES: Record<string, string> = {
  '命宫': 'Mệnh', '身宫': 'Thân', '兄弟宫': 'Huynh Đệ', '夫妻宫': 'Phu Thê', '子女宫': 'Tử Nữ',
  '财帛宫': 'Tài Bạch', '疾厄宫': 'Tật Ách', '迁移宫': 'Thiên Di', '交友宫': 'Giao Hữu', '仆役宫': 'Nô Bộc',
  '官禄宫': 'Quan Lộc', '田宅宫': 'Điền Trạch', '福德宫': 'Phúc Đức', '父母宫': 'Phụ Mẫu',
  '命': 'Mệnh', '身': 'Thân', '兄弟': 'Huynh Đệ', '夫妻': 'Phu Thê', '子女': 'Tử Nữ', '财帛': 'Tài Bạch',
  '疾厄': 'Tật Ách', '迁移': 'Thiên Di', '交友': 'Giao Hữu', '仆役': 'Nô Bộc', '官禄': 'Quan Lộc',
  '田宅': 'Điền Trạch', '福德': 'Phúc Đức', '父母': 'Phụ Mẫu',
};

const STEMS: Record<string, string> = { '甲': 'Giáp', '乙': 'Ất', '丙': 'Bính', '丁': 'Đinh', '戊': 'Mậu', '己': 'Kỷ', '庚': 'Canh', '辛': 'Tân', '壬': 'Nhâm', '癸': 'Quý' };
const BRANCHES: Record<string, string> = { '子': 'Tý', '丑': 'Sửu', '寅': 'Dần', '卯': 'Mão', '辰': 'Thìn', '巳': 'Tỵ', '午': 'Ngọ', '未': 'Mùi', '申': 'Thân', '酉': 'Dậu', '戌': 'Tuất', '亥': 'Hợi' };
const STEM_ORDER = '甲乙丙丁戊己庚辛壬癸';
const BRANCH_ORDER = '子丑寅卯辰巳午未申酉戌亥';
const SIHUA: Record<string, string> = { '禄': 'Lộc', '权': 'Quyền', '科': 'Khoa', '忌': 'Kỵ' };
const BRIGHTNESS: Record<string, string> = { '庙': 'Miếu', '旺': 'Vượng', '得': 'Đắc', '利': 'Lợi', '平': 'Bình', '不': 'Bất', '闲': 'Nhàn', '陷': 'Hãm', '地': 'Địa' };
const JU: Record<string, string> = { '水二局': 'Thủy Nhị Cục', '木三局': 'Mộc Tam Cục', '金四局': 'Kim Tứ Cục', '土五局': 'Thổ Ngũ Cục', '火六局': 'Hỏa Lục Cục' };
const YIN_YANG_GENDER: Record<string, string> = { '阳男': 'Dương Nam', '阴男': 'Âm Nam', '阳女': 'Dương Nữ', '阴女': 'Âm Nữ' };

/** 全项目统一术语：翻译时必须使用这里的译法 */
export const TERMS: Record<string, string> = {
  '紫微斗数': 'Tử Vi Đẩu Số', '倪海厦': 'Nghê Hải Hạ', '倪海夏': 'Nghê Hải Hạ', '倪师': 'Thầy Nghê',
  '天纪': 'Thiên Kỷ', '地纪': 'Địa Kỷ', '人纪': 'Nhân Kỷ', '紫微斗数全书': 'Tử Vi Đẩu Số Toàn Thư',
  '紫微斗数全集': 'Tử Vi Đẩu Số Toàn Tập', '骨髓赋': 'Cốt Tủy Phú', '女命骨髓赋': 'Nữ Mệnh Cốt Tủy Phú',
  '命盘': 'lá số', '排盘': 'lập lá số', '时辰': 'giờ sinh', '合盘': 'hợp lá số', '合婚': 'hợp hôn',
  '十二宫': 'Thập Nhị Cung', '宫位': 'cung vị', '天干': 'Thiên Can', '地支': 'Địa Chi', '干支': 'Can Chi',
  '阴阳': 'Âm Dương', '五行': 'Ngũ Hành', '五行局': 'Ngũ Hành Cục', '四柱': 'Tứ Trụ', '命主': 'Mệnh Chủ', '身主': 'Thân Chủ',
  '主星': 'Chính Tinh', '辅星': 'Phụ Tinh', '吉星': 'Cát Tinh', '煞星': 'Sát Tinh', '南斗': 'Nam Đẩu', '北斗': 'Bắc Đẩu',
  '四化': 'Tứ Hóa', '化禄': 'Hóa Lộc', '化权': 'Hóa Quyền', '化科': 'Hóa Khoa', '化忌': 'Hóa Kỵ', '自化': 'Tự Hóa',
  '飞星': 'Phi Tinh', '大限': 'Đại Hạn', '小限': 'Tiểu Hạn', '流年': 'Lưu Niên', '流月': 'Lưu Nguyệt', '流日': 'Lưu Nhật',
  '三方四正': 'Tam Phương Tứ Chính', '三方': 'Tam Phương', '对宫': 'đối cung', '空宫': 'Vô Chính Diệu', '夹宫': 'giáp cung',
  '格局': 'Cách Cục', '破格': 'phá cách', '庙旺': 'Miếu Vượng', '落陷': 'Hãm Địa', '桃花': 'Đào Hoa', '贵人': 'quý nhân',
  '杀破狼': 'Sát Phá Tham', '机月同梁': 'Cơ Nguyệt Đồng Lương', '紫府': 'Tử Phủ', '府相': 'Phủ Tướng', '日月': 'Nhật Nguyệt',
  '昌曲': 'Xương Khúc', '左右': 'Tả Hữu', '魁钺': 'Khôi Việt', '禄马': 'Lộc Mã', '羊陀': 'Kình Đà', '火铃': 'Hỏa Linh', '空劫': 'Không Kiếp',
  '真太阳时': 'giờ Mặt Trời thực', '晚子时': 'Vãn Tý', '早子时': 'Tảo Tý', '闰月': 'tháng nhuận', '农历': 'âm lịch', '公历': 'dương lịch',
  '三合派': 'phái Tam Hợp', '飞星派': 'phái Phi Tinh', '黄帝内经': 'Hoàng Đế Nội Kinh', '神农本草经': 'Thần Nông Bản Thảo Kinh',
  '伤寒论': 'Thương Hàn Luận', '金匮要略': 'Kim Quỹ Yếu Lược', '易经': 'Kinh Dịch', '风水': 'Phong Thủy', '针灸': 'Châm Cứu', '汉唐': 'Hán Đường',
};

export const viStar = (name: string): string => STARS[name] ?? name;
export const viPalace = (name: string): string => PALACES[name] ?? name;
export const viStem = (s: string | number): string => STEMS[typeof s === 'number' ? STEM_ORDER[s] : s] ?? String(s);
export const viBranch = (b: string | number): string => BRANCHES[typeof b === 'number' ? BRANCH_ORDER[b] : b] ?? String(b);
/** '甲子' → 'Giáp Tý' */
export const viGanzhi = (gz: string): string => Array.from(gz).map(c => STEMS[c] ?? BRANCHES[c] ?? c).join(' ');
export const viSiHua = (h: string): string => SIHUA[h] ?? h;
export const viBrightness = (b: string): string => BRIGHTNESS[b] ?? b;
export const viJu = (ju: string): string => JU[ju] ?? ju;
export const viYinYangGender = (g: string): string => YIN_YANG_GENDER[g] ?? g;
/** 时辰序号 0–11 → 'giờ Tý' */
export const viShichen = (i: number): string => `giờ ${viBranch(i)}`;

const SEP = /[\u4e00-\u9fff]/;
// 单字键（如 死、病、衰、不）在长句中会误伤，所以只用多字词条；长词优先
const PHRASES: [string, string][] = Object.entries({ ...STARS, ...PALACES, ...JU, ...YIN_YANG_GENDER, ...TERMS })
  .filter(([k]) => k.length >= 2)
  .sort((a, b) => b[0].length - a[0].length);

/** 把算法层拼出来的短文案里的术语换成越南语；未收录的字符原样保留 */
export function viText(s: string): string {
  if (!SEP.test(s)) return s;
  let out = s;
  for (const [zh, vi] of PHRASES) if (out.includes(zh)) out = out.split(zh).join(vi);
  return out;
}
