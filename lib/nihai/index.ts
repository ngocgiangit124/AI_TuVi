/**
 * 倪海厦 天纪 / 地纪 / 人纪 — 统一导出
 *
 * 倪海厦（1954-2012），美国汉唐中医学院创办人，
 * 当代少见的「命、相、卜、山、医」五术兼备之旷世奇人。
 *
 * 三纪体系：
 *   天纪 —— 上知天文（紫微斗数、易经、堪舆、推命、面相、测字）
 *   地纪 —— 下知地理（国家地理志、风水与国运）
 *   人纪 —— 中知人事（针灸、黄帝内经、神农本草经、伤寒论、金匮要略）
 */

export * from './types';
export { TIANJI_MODULES, HEXAGRAMS, FENGSHUI_ENTRIES, TIANJI_EPISODES, TIANJI_QUOTES, TIANJI_STATS } from './tianji';
export { RENJI_MODULES, ACU_EXPERIENCES, TRANS_NEEDLING, HANTANG_FORMULAS, CLASSIC_FORMULAS, RENJI_STATS } from './renji';
export { DIJI_MODULES, DIJI_STATS } from './diji';

/** 倪海厦完整传记 */
export const NI_HAIXIA_BIO = {
  name: 'Nghê Hải Hạ',
  nameVariant: 'Nghê Hải Hạ',
  alias: 'Phạn Vũ Long',
  birth: '1 tháng 1 năm 1954',
  death: '31 tháng 1 năm 2012',
  birthPlace: 'Thành phố Đài Bắc',
  ancestry: 'Thụy An, Chiết Giang',
  family: 'Bảy anh chị em, xếp thứ năm',
  education: 'Khoa Chính trị, Đại học Đông Ngô',
  title: 'Người sáng lập Học viện Trung Y Hán Đường tại Hoa Kỳ',
  titles: [
    'Bậc kỳ nhân có một không hai, gồm đủ năm thuật Mệnh, Tướng, Bốc, Sơn, Y',
    'Viện trưởng Học viện Trung Y Hán Đường tại Hoa Kỳ',
    'Giáo sư hướng dẫn tiến sĩ tại Đại học Trung Y Dược California, Hoa Kỳ',
    'Ủy viên cao cấp nhất của Ủy ban Trung Y thuộc Sở Y tế bang Florida (2000-2003)',
    'Ủy viên kiêm Phó Chủ tịch Ủy ban Châm Cứu bang Florida',
    'Người kế thừa hiện đại của phái Kinh phương',
    'Người sáng lập hệ thống giảng dạy Thiên Kỷ, Nhân Kỷ',
    'Người nhận giải thưởng Hoa kiều ưu tú ở hải ngoại',
  ],
  /** 师承关系 */
  teachers: [
    { name: 'Chu Tả Vũ', background: 'Danh y gia truyền bốn đời ở Bắc Kinh, chuyển đến Đài Loan sau năm 1949', subject: 'Châm Cứu', period: '1977-1981' },
    { name: 'Từ Tế Dân', background: 'Danh y ở Thượng Hải, quê Giang Tô', subject: 'Châm Cứu', period: '1970s' },
    { name: 'Truyền thừa của Khương Tá Cảnh', background: 'Nhà Kinh phương, học trò của Tào Dĩnh Phủ', subject: 'Kinh phương', period: 'Thời kỳ học việc tại hiệu thuốc Trung dược ở Cơ Long' },
  ],
  /** 核心理念 */
  corePhilosophy: [
    'Đại đạo chí giản — Phi Tinh bay tới bay lui quá phức tạp, không làm theo cách này',
    'Cung Mệnh là gốc, Tam Phương là dụng',
    'Nỗ lực con người + điều chỉnh địa lý > vận mệnh tiên thiên (2/3 > 1/3)',
    'Trung Y là y học vật lý, phân tích cơ thể người từ góc độ vật lý',
    'Biện chứng chứ không biện bệnh — Trung Y xem thể chứng chứ không xem tên bệnh',
    'Kinh phương một thang thấy hiệu quả, hai thang khỏi bệnh',
    'Không muốn văn hóa Trung Hoa bị thất truyền, nên đã dạy nhiều học trò',
    'Xem mệnh chính là một triết học bàn về quả',
    'Chữ nghĩa chỉ là con thuyền, chân lý mới là bờ bên kia',
  ],
  /** 人生大事记 */
  timeline: [
    { year: '1954', event: 'Sinh tại thành phố Đài Bắc, nguyên quán Thụy An, Chiết Giang' },
    { year: '1970s', event: 'Thời trung học dùng “Y Tông Kim Giám” chữa khỏi chứng đau bụng kinh cho chị hai, từ đó quyết chí học y' },
    { year: '1977-1981', event: 'Học Châm Cứu với thầy thuốc Chu Tả Vũ' },
    { year: '1978', event: 'Phục vụ quân ngũ tại Cục Quân y Mã Tổ, được mệnh danh “Thần y Mã Tổ”, năm 24 tuổi' },
    { year: '1979', event: 'Sau khi xuất ngũ, lấy bí danh “Phạn Vũ Long” bắt đầu nghề xem mệnh, xem tướng' },
    { year: '1980', event: 'Di cư sang Hoa Kỳ' },
    { year: '1988', event: 'Mở “Lớp Thiên văn Địa lý” tại đường Kim Sơn Nam, Đài Bắc, truyền dạy Tử Vi Đẩu Số và Phong Thủy dương trạch' },
    { year: '1991', event: 'Trở thành thầy Châm Cứu có đăng ký tại bang Florida, Hoa Kỳ' },
    { year: '1993', event: 'Chọn được khu đất cho Học viện Trung Y Hán Đường tại Merritt Island, Florida' },
    { year: '1994', event: 'Hoàn thành ghi hình bộ “Thiên Kỷ”, tổng cộng 24 tập' },
    { year: '1995', event: 'Sáng lập Học viện Trung Y Hán Đường' },
    { year: '2000-2003', event: 'Giữ chức Ủy viên cao cấp nhất của Ủy ban Trung Y thuộc Sở Y tế bang Florida' },
    { year: '2004', event: 'Mở lớp giảng dạy Trung Y “Nhân Kỷ” tại Đài Bắc' },
    { year: '2005', event: 'Xuất bản bộ DVD giảng dạy “Nhân Kỷ”' },
    { year: '2007', event: 'Bắt đầu biên soạn “Địa Kỷ”' },
    { year: '2010', event: 'Thành lập Phòng khám Trung Y Kinh phương Hán Đường tại Đài Bắc; được mời diễn giảng suốt một ngày tại Diễn đàn Phù Dương lần thứ ba' },
    { year: '2011', event: 'Thành lập Y quán Trung Y Kinh phương Hán Đường tại Thâm Quyến' },
    { year: '2012', event: 'Ngày 31 tháng 1, qua đời tại Đài Bắc do suy tim phổi, hưởng thọ 59 tuổi' },
  ],
  /** 著作体系 */
  publications: {
    originalBooks8: ['Hoàng Đế Nội Kinh Tố Vấn', 'Hoàng Đế Nội Kinh', 'Thần Nông Bản Thảo Kinh', 'Châm Cứu', 'Thương Hàn Luận', 'Kim Quỹ', 'Nhân Gian Đạo', 'Thiên Cơ Đạo · Địa Mạch Đạo'],
    totalBooks: '26-44 cuốn (gồm giáo trình bản chú giải, toàn tập y án, tinh giải huyệt vị, v.v.)',
    hantangFormulas: '100 phương thang Hán Đường',
    classicFormulas: '259 phương thang kinh điển',
    medicalCases: 'Toàn tập y án, 7 cuốn',
    totalVideoHours: '200+ giờ',
  },
  /** 三纪体系 */
  sanJi: {
    tianji: {
      name: 'Thiên Kỷ',
      meaning: 'Trên biết thiên văn',
      content: 'Tử Vi Đẩu Số, Kinh Dịch 64 quẻ, Kham Dư học, Thôi Mệnh học, Diện Tướng học, thuật Trắc Tự',
      recordYear: 1994,
      episodes: 24,
      hdEpisodes: 83,
      hoursPerEpisode: 2,
      totalHours: 48,
      books: ['Thiên Cơ Đạo', 'Nhân Gian Đạo', 'Địa Mạch Đạo', '64 Quái Dịch Đồ'],
      schools: ['phái Tam Hợp (Tử Vi Đẩu Số)', 'phái Tượng Số (Kinh Dịch)', 'phái Cửu Tinh (Kham Dư)', 'phái Hà Lạc Số Lý (Thôi Mệnh)'],
      structure: 'Giờ đầu giảng mệnh học, giờ sau giảng Kinh Dịch',
    },
    renji: {
      name: 'Nhân Kỷ',
      meaning: 'Giữa biết nhân sự',
      content: 'Châm Cứu Đại Thành (44 tập), Hoàng Đế Nội Kinh (20 tập), Thần Nông Bản Thảo Kinh (46 tập), Thương Hàn Luận, Kim Quỹ Yếu Lược (20 tập)',
      completionYear: '2004-2005',
      totalLessons: '150+ tập',
      learningOrder: 'Châm Cứu → Hoàng Đế Nội Kinh → Thần Nông Bản Thảo Kinh → Thương Hàn Luận → Kim Quỹ Yếu Lược',
      acuExperience: 215,
      transNeedling: 31,
      hantangFormulas: 100,
    },
    diji: {
      name: 'Địa Kỷ',
      meaning: 'Dưới biết địa lý',
      content: 'Địa lý chí quốc gia (chưa hoàn thành)',
      status: 'Sự nghiệp dang dở của Thầy Nghê',
      note: 'Dự định trước tác sau tuổi 60, qua đời năm 2012',
      startYear: 2007,
      existingContent: 'Phần Kham Dư học trong khóa Thiên Kỷ + di cảo do người đời sau chỉnh lý',
    },
  },
  /** 人格特征 */
  personality: {
    算命风格: 'Phán đoán dứt khoát như đinh đóng cột, không chừa đường lui',
    音乐爱好: 'Thích nhất bài “Hotel California” của ban nhạc Eagles',
    生活技能: 'Nấu ăn giặt giũ việc gì cũng giỏi, tay nghề làm món bột được mọi người hết lời khen ngợi',
    工作态度: 'Đầu giường quanh năm để sẵn giấy bút, gặp nghi nan tạp chứng thì khấn cầu tiên sư',
    睡眠: 'Nhiều năm liền ban đêm ngủ chưa đến ba giờ',
    患者评价: 'Thường được bệnh nhân Mỹ gọi là “Hy vọng cuối cùng (The last hope)”',
  },
  /** 传人选拔标准 */
  discipleStandards: [
    'Tâm tính tốt',
    'Cá tính mạnh',
    'Chủ kiến vững',
    'Óc quan sát nhạy bén',
    'Dám phê phán lý luận sai lầm',
  ],
};

/** 三纪导航 */
export const SANJI_CATEGORIES = [
  { key: 'tianji' as const, name: 'Thiên Kỷ', nameEn: 'Tian Ji', icon: '⊙', meaning: 'Trên biết thiên văn', color: '#d4a843', href: '/tianji' },
  { key: 'diji' as const, name: 'Địa Kỷ', nameEn: 'Di Ji', icon: '⊞', meaning: 'Dưới biết địa lý', color: '#6b8a5e', href: '/diji' },
  { key: 'renji' as const, name: 'Nhân Kỷ', nameEn: 'Ren Ji', icon: '⊕', meaning: 'Giữa biết nhân sự', color: '#8b6b9e', href: '/renji' },
] as const;
