/**
 * 地纪 — 倪海厦地理风水体系数据库
 *
 * 「下知地理」—— 地之纪，是地理志的体系化研究。
 * 倪海厦原计划60岁后著述，利用天文地理知识与医学素养
 * 重新编写各国地理志，研究国家人性、物产与其风水地理的关系。
 *
 * 倪师于2012年辞世，地纪未能完成，为「倪师未竟之业」。
 * 现有内容来自天纪课程中的堪舆学部分以及后人整理的遗稿。
 */

import type { NiModule } from './types';

// ─── 地纪模块 ────────────────────────────────────────────
export const DIJI_MODULES: NiModule[] = [
  {
    id: 'dj-guojiadili',
    category: 'diji',
    name: 'Địa lý chí quốc gia',
    nameEn: 'National Geography',
    subtitle: 'Sự nghiệp dang dở của Thầy Nghê · Nghiên đọc di cảo',
    description: 'Thầy Nghê dự định dùng kiến thức Phong Thủy địa lý để lý giải ảnh hưởng của môi trường địa lý các nước đối với tính cách quốc dân, sản vật tài nguyên và sự thịnh suy của quốc vận. Đây là tâm nguyện lớn mà Thầy Nghê chưa thể hoàn thành.',
    details: [
      'Địa Kỷ là phần được dự định hoàn thành sau cùng trong ba hệ thống trước tác lớn của Nghê Hải Hạ, ban đầu định bắt đầu biên soạn sau tuổi 60.',
      'Ý tưởng cốt lõi là dùng kiến thức Phong Thủy địa lý để biên soạn lại địa lý chí các nước, áp dụng Kham Dư học truyền thống ở tầm vĩ mô quốc gia.',
      'Hướng nghiên cứu gồm: vị trí địa lý của quốc gia, tác động của núi sông đến việc hun đúc tính cách quốc dân, quan hệ giữa sản vật tài nguyên và Cách Cục Phong Thủy, mối liên hệ giữa thịnh suy lịch sử và biến đổi địa lý.',
      'Thầy Nghê qua đời năm 2012, Địa Kỷ chỉ để lại ý tưởng ban đầu và nền tảng lý luận Kham Dư học trong khóa Thiên Kỷ. Những tia sáng tư tưởng quý báu này xứng đáng được hậu học chỉnh lý và truyền thừa.',
    ],
    references: [
      'Phần Kham Dư học trong “Thiên Kỷ” của Nghê Hải Hạ',
      'Ý tưởng về địa lý chí trong các bài giảng của Nghê Hải Hạ',
    ],
    keywords: ['Địa Kỷ', 'Địa lý quốc gia', 'Phong Thủy', 'Địa lý chí', 'Quốc vận', 'Sản vật', 'Nhân tính', 'Kham Dư'],
    icon: '⊞',
    status: 'preview',
    order: 1,
    slug: 'geography',
    chapters: [
      {
        id: 'dj-dl-01',
        title: 'Ý tưởng về Địa Kỷ',
        subtitle: 'Tâm nguyện và bản thiết kế của Thầy Nghê',
        description: 'Ý tưởng tổng thể của Thầy Nghê về Địa Kỷ: dùng kiến thức Phong Thủy địa lý để lý giải vận mệnh quốc gia.',
        keyPoints: [
          'Dự định trước tác sau tuổi 60 (Thầy Nghê sinh năm 1954)',
          'Dung hợp kiến thức thiên văn địa lý với tố dưỡng y học',
          'Biên soạn lại địa lý chí các nước',
          'Nghiên cứu quan hệ giữa nhân tính, sản vật và Phong Thủy địa lý',
        ],
        quotes: ['“Tôi muốn sau tuổi sáu mươi, vận dụng kiến thức thiên văn địa lý và tố dưỡng y học của mình để viết lại địa lý chí”'],
        order: 1,
      },
      {
        id: 'dj-dl-02',
        title: 'Địa lý và nhân tính',
        subtitle: 'Thủy thổ một phương nuôi người một phương',
        description: 'Môi trường địa lý khác nhau hun đúc tính cách dân tộc và đặc trưng văn hóa khác nhau như thế nào.',
        keyPoints: [
          'Khác biệt tính cách giữa dân tộc miền núi và dân tộc đồng bằng',
          'Ảnh hưởng của sự phân bố sông ngòi đối với văn minh nông nghiệp',
          'Quan hệ giữa đới khí hậu với thể chất và tính cách con người',
          'Nơi Phong Thủy tốt ắt có người hiền xuất hiện',
        ],
        order: 2,
      },
    ],
  },
  {
    id: 'dj-kanyu-theory',
    category: 'diji',
    name: 'Nền tảng lý luận Kham Dư',
    nameEn: 'Feng Shui Theory',
    subtitle: 'Kham Dư học trong Thiên Kỷ · Chỉnh lý lý luận',
    description: 'Chỉnh lý từ phần lý luận Kham Dư học trong khóa Thiên Kỷ, làm nền tảng lý luận cho Địa Kỷ. Bao gồm các lý luận cốt lõi như Loan Đầu học, Lý Khí học, Dương Trạch học.',
    details: [
      'Tuy Địa Kỷ chưa thành sách riêng, nhưng khóa Thiên Kỷ đã có nội dung lý luận Kham Dư học phong phú.',
      'Những lý luận này là khung nền tảng của Địa Kỷ, bao quát phương pháp phân tích Phong Thủy từ vi mô (nhà ở) đến vĩ mô (đô thị, quốc gia).',
      'Thầy Nghê theo phái Cửu Tinh (dòng Dương Cứu Bần), coi trọng cả Loan Đầu lẫn Lý Khí.',
      'Phần nội dung này có thể xem là “dự khoa lý luận” của Địa Kỷ, cung cấp phương pháp luận cho việc nghiên cứu địa lý chí quốc gia về sau.',
    ],
    school: 'phái Cửu Tinh (dòng Dương Cứu Bần)',
    references: [
      '“Thiên Kỷ · Địa Mạch Đạo” của Nghê Hải Hạ',
      'Điển tịch Phong Thủy của Dương Cứu Bần',
    ],
    keywords: ['Kham Dư', 'Lý luận Phong Thủy', 'Loan Đầu', 'Lý Khí', 'phái Cửu Tinh', 'Dương Cứu Bần', 'Dương trạch', 'Âm trạch'],
    icon: '◫',
    status: 'active',
    order: 2,
    slug: 'kanyu-theory',
    chapters: [
      {
        id: 'dj-kt-01',
        title: 'Loan Đầu học',
        subtitle: 'Phán đoán thế núi dáng nước',
        description: 'Quan sát hình dáng, hướng đi của núi, dòng chảy của nước và các địa mạo tự nhiên khác để phán đoán cát hung Phong Thủy.',
        keyPoints: [
          'Long mạch: thế đi và khí mạch của dãy núi',
          'Huyệt vị: vị trí tốt nhất để tàng phong tụ khí',
          'Sa thủ: thế núi hai bên trái phải ôm quanh huyệt vị',
          'Thủy khẩu: phương vị dòng nước vào ra',
        ],
        order: 1,
      },
      {
        id: 'dj-kt-02',
        title: 'Lý Khí học',
        subtitle: 'Suy tính cát hung của phương vị',
        description: 'Dùng la bàn đo phương vị, kết hợp các lý luận như Cửu Tinh phi bố, Bát Sát Hoàng Tuyền để suy tính cát hung.',
        keyPoints: [
          'Cách sử dụng la bàn',
          'Nguyên lý Cửu Tinh phi bố',
          'Các phương vị cấm kỵ của Bát Sát Hoàng Tuyền',
          'Các phương vị cát lợi của Tam Cát Lục Tú',
        ],
        order: 2,
      },
      {
        id: 'dj-kt-03',
        title: 'Ứng dụng dương trạch',
        subtitle: 'Thực hành Phong Thủy cho môi trường cư trú',
        description: 'Phương pháp thực hành áp dụng lý luận Kham Dư vào việc chọn và bố trí nhà ở.',
        keyPoints: [
          'Nguyên tắc chọn tọa hướng nhà',
          'Sắp xếp phương vị các khu chức năng trong nhà',
          'Phán đoán cát hung của môi trường xung quanh',
          'Phương pháp hóa giải Phong Thủy xấu',
        ],
        order: 3,
      },
    ],
  },
  {
    id: 'dj-yigao',
    category: 'diji',
    name: 'Di cảo và hậu học',
    nameEn: 'Legacy & Continuation',
    subtitle: 'Hậu học bổ chú · Lửa truyền nối tiếp',
    description: 'Chỉnh lý những lời giảng rời rạc của Thầy Nghê về Địa Kỷ, phần nghiên cứu bổ chú của học trò đời sau, cùng sự phát triển hiện đại của tư tưởng Địa Kỷ.',
    details: [
      'Tuy Thầy Nghê chưa hoàn thành chuyên luận Địa Kỷ, nhưng đã nhiều lần nhắc đến ý tưởng và điểm chính của Địa Kỷ trong khóa Thiên Kỷ và các dịp khác.',
      'Học trò đời sau và các nhà nghiên cứu đã dựa vào lời giảng và di cảo của Thầy Nghê để chỉnh lý và bổ chú ở một mức độ nhất định.',
      'Tư tưởng Địa Kỷ có giá trị tham khảo quan trọng trong các lĩnh vực như nghiên cứu Phong Thủy hiện đại, quy hoạch đô thị, khoa học môi trường.',
      'Học phần này nhằm thu thập, chỉnh lý mọi tư liệu rải rác liên quan đến Địa Kỷ, tạo nền tảng cho nghiên cứu về sau.',
    ],
    references: [
      'Bản ghi bài giảng của Nghê Hải Hạ',
      'Ghi chép và nghiên cứu của học trò đời sau',
    ],
    keywords: ['Di cảo', 'Hậu học', 'Bổ chú', 'Truyền thừa', 'Ứng dụng hiện đại'],
    icon: '⊟',
    status: 'coming',
    order: 3,
    slug: 'legacy',
    chapters: [
      {
        id: 'dj-yg-01',
        title: 'Ngữ lục Địa Kỷ của Thầy Nghê',
        subtitle: 'Tư tưởng Địa Kỷ rải rác trong các khóa học',
        description: 'Trích từ các khóa Thiên Kỷ, Nhân Kỷ những luận thuật quan trọng của Thầy Nghê về Địa Kỷ.',
        keyPoints: [
          'Động cơ sáng tác và kế hoạch của Địa Kỷ',
          'Quan sát môi trường địa lý các nước',
          'Luận thuật về quan hệ giữa Phong Thủy và quốc vận',
          'Liên hệ giữa Địa Kỷ với Thiên Kỷ, Nhân Kỷ',
        ],
        quotes: [
          '“Nỗ lực của con người cộng với điều chỉnh về địa lý, nhất định có thể lớn hơn vận mệnh tiên thiên”',
          '“2/3 lớn hơn 1/3 — nhân sự + địa lý = 2/3, vận mệnh tiên thiên = 1/3”',
        ],
        order: 1,
      },
    ],
  },
];

// ─── 统计 ────────────────────────────────────────────────
export const DIJI_STATS = {
  totalModules: DIJI_MODULES.length,
  totalChapters: DIJI_MODULES.reduce((sum, m) => sum + m.chapters.length, 0),
  status: 'Sự nghiệp dang dở của Thầy Nghê · Hậu học tiếp tục chỉnh lý',
  note: 'Nghê Hải Hạ dự định trước tác Địa Kỷ sau tuổi 60, qua đời năm 2012, Địa Kỷ chỉ để lại ý tưởng và nền tảng lý luận',
};
