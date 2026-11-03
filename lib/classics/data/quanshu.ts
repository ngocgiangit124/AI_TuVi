/**
 * 《紫微斗数全书》— 核心精选
 *
 * 公版（明代罗洪先编）
 * 是紫微斗数最系统的古籍，强调宫位关系与四化，全本约 10 万字。
 */

import type { Book } from '../types';

export const ziWeiQuanShu: Book = {
  title: 'Tử Vi Đẩu Số Toàn Thư',
  slug: 'quanshu',
  dynasty: 'Đời Minh',
  author: 'La Hồng Tiên biên soạn',
  intro: 'Cổ tịch có hệ thống nhất của Tử Vi Đẩu Số, nhấn mạnh quan hệ giữa Thập Nhị Cung và Tứ Hóa. Là giáo trình chính của người học Tử Vi từ đời Thanh trở đi.',
  wordCount: 100000,
  chapters: [
    {
      title: 'Luận Thập Nhị Cung · Cung Mệnh',
      subtitle: 'Căn bản của việc xem mệnh',
      paragraphs: [
        {
          id: 'qs-1-1',
          idx: 1,
          text: '命宫者，一身之根本，万事之枢纽。命宫定，则一生格局定。看命宫先看主星，次看辅煞，再看四化与三方四正之会照。',
          translation: 'Cung Mệnh là gốc rễ của một thân, là then chốt của muôn việc. Cung Mệnh định thì Cách Cục một đời định. Xem cung Mệnh trước hết xem Chính Tinh, kế đến xem Phụ Tinh và Sát Tinh, rồi xem Tứ Hóa và sự hội chiếu của Tam Phương Tứ Chính.',
        },
        {
          id: 'qs-1-2',
          idx: 2,
          text: '命宫主星庙旺，主先天优势，做事事半功倍；落陷则主先天劣势，但反主大成——落陷之人有"不甘"二字推动，反能爆发出庙旺命格做不到的逆袭。',
          translation: 'Chính Tinh cung Mệnh Miếu Vượng, chủ về ưu thế bẩm sinh, làm việc ít công nhiều kết quả; Hãm Địa thì chủ về bất lợi bẩm sinh, nhưng trái lại chủ về đại thành: người Hãm Địa có hai chữ “không cam” thúc đẩy, nên trái lại có thể bùng phát cú lội ngược dòng mà mệnh cách Miếu Vượng không làm được.',
        },
        {
          id: 'qs-1-3',
          idx: 3,
          text: '命宫见六吉星（左辅右弼文昌文曲天魁天钺），主一生贵人不绝；命宫见六煞星（擎羊陀罗火星铃星地空地劫），主多波折磨砺，但若能忍过，反成大器。',
          translation: 'Cung Mệnh gặp sáu Cát Tinh (Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt), chủ về một đời quý nhân không dứt; cung Mệnh gặp sáu Sát Tinh (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp), chủ về nhiều sóng gió, thử thách, nhưng nếu nhẫn nại vượt qua được thì trái lại thành tài lớn.',
        },
      ],
    },
    {
      title: 'Luận Thập Nhị Cung · Cung Tài Bạch',
      subtitle: 'Nơi có nguồn tài',
      paragraphs: [
        {
          id: 'qs-2-1',
          idx: 1,
          text: '财帛宫主一生之财源、收入、理财方式。财帛宫主星不同，赚钱方式各异：紫微在财主官财，武曲在财主商财，太阴在财主田宅财，巨门在财主口才财。',
          translation: 'Cung Tài Bạch chủ về nguồn tài, thu nhập, cách quản lý tiền bạc trong một đời. Chính Tinh cung Tài Bạch khác nhau thì cách kiếm tiền cũng khác: Tử Vi ở cung Tài Bạch chủ về tiền từ quan chức, Vũ Khúc ở cung Tài Bạch chủ về tiền từ thương nghiệp, Thái Âm ở cung Tài Bạch chủ về tiền từ điền trạch, Cự Môn ở cung Tài Bạch chủ về tiền từ khẩu tài.',
        },
        {
          id: 'qs-2-2',
          idx: 2,
          text: '财帛宫化禄入命，主财源广进；财帛宫化忌，主财来财去；财帛宫见禄存，主稳定积累；财帛宫遇空劫，主财耗虚名。',
          translation: 'Cung Tài Bạch Hóa Lộc nhập Mệnh, chủ về nguồn tài rộng mở; cung Tài Bạch Hóa Kỵ, chủ về tiền đến rồi tiền đi; cung Tài Bạch gặp Lộc Tồn, chủ về tích lũy ổn định; cung Tài Bạch gặp Không Kiếp, chủ về hao tài, hư danh.',
        },
      ],
    },
    {
      title: 'Luận Thập Nhị Cung · Cung Quan Lộc',
      subtitle: 'Gốc rễ của sự nghiệp',
      paragraphs: [
        {
          id: 'qs-3-1',
          idx: 1,
          text: '官禄宫主事业、地位、社会成就。官禄宫主星不同，事业方向各异：紫微在官宜大平台高位，太阳在官宜公务名声，武曲在官宜金融实业，廉贞在官宜文武兼备。',
          translation: 'Cung Quan Lộc chủ về sự nghiệp, địa vị, thành tựu xã hội. Chính Tinh cung Quan Lộc khác nhau thì hướng sự nghiệp cũng khác: Tử Vi ở cung Quan Lộc nên ở vị trí cao trên nền tảng lớn, Thái Dương ở cung Quan Lộc nên theo công vụ và danh tiếng, Vũ Khúc ở cung Quan Lộc nên theo tài chính và thực nghiệp, Liêm Trinh ở cung Quan Lộc nên văn võ kiêm toàn.',
        },
        {
          id: 'qs-3-2',
          idx: 2,
          text: '官禄宫化权入命，主能独当一面；化禄入官，主财从职业来；化忌入官，主职场波折。',
          translation: 'Cung Quan Lộc Hóa Quyền nhập Mệnh, chủ về có thể một mình đảm đương; Hóa Lộc nhập cung Quan Lộc, chủ về tiền đến từ nghề nghiệp; Hóa Kỵ nhập cung Quan Lộc, chủ về sóng gió nơi làm việc.',
        },
      ],
    },
    {
      title: 'Luận Thập Nhị Cung · Cung Phu Thê',
      subtitle: 'Khí trường của phối ngẫu',
      paragraphs: [
        {
          id: 'qs-4-1',
          idx: 1,
          text: '夫妻宫主配偶气质、婚姻状态。夫妻宫紫微主配偶端庄威权，宜迟婚；夫妻宫贪狼主配偶多情，桃花重；夫妻宫天梁主配偶成熟稳重，年长。',
          translation: 'Cung Phu Thê chủ về khí chất phối ngẫu, tình trạng hôn nhân. Cung Phu Thê có Tử Vi chủ về phối ngẫu đoan trang, có uy quyền, nên kết hôn muộn; cung Phu Thê có Tham Lang chủ về phối ngẫu đa tình, Đào Hoa nặng; cung Phu Thê có Thiên Lương chủ về phối ngẫu chín chắn, vững vàng, lớn tuổi.',
        },
        {
          id: 'qs-4-2',
          idx: 2,
          text: '夫妻宫化忌冲命，主婚姻多波折。夫妻宫见六煞，需特别注意感情之磨砺。夫妻宫见六吉，主配偶贵人。',
          translation: 'Cung Phu Thê Hóa Kỵ xung Mệnh, chủ về hôn nhân nhiều sóng gió. Cung Phu Thê gặp sáu Sát Tinh, cần đặc biệt chú ý thử thách trong tình cảm. Cung Phu Thê gặp sáu Cát Tinh, chủ về phối ngẫu là quý nhân.',
        },
      ],
    },
    {
      title: 'Luận về Tứ Hóa',
      subtitle: 'Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ',
      paragraphs: [
        {
          id: 'qs-5-1',
          idx: 1,
          text: '四化为命盘之精华——化禄主财、化权主势、化科主名、化忌主病。四化所在宫位，决定一生重大事件之节点。',
          translation: 'Tứ Hóa là tinh hoa của lá số: Hóa Lộc chủ về tài, Hóa Quyền chủ về thế, Hóa Khoa chủ về danh, Hóa Kỵ chủ về bệnh. Cung vị có Tứ Hóa quyết định các điểm mốc của những sự kiện trọng đại trong đời.',
        },
        {
          id: 'qs-5-2',
          idx: 2,
          text: '生年四化为本命四化，永远固定；倪师强调四化星不动，只看大限流年走到何处。北派飞星派之自化、宫干飞化、来因宫等，倪师不主张使用。',
          translation: 'Tứ Hóa năm sinh là Tứ Hóa bản mệnh, vĩnh viễn cố định; Thầy Nghê nhấn mạnh sao Tứ Hóa không động, chỉ xem Đại Hạn, Lưu Niên đi đến đâu. Tự Hóa, phi hóa theo can cung, cung Lai Nhân v.v. của phái Phi Tinh thuộc Bắc phái, Thầy Nghê không chủ trương sử dụng.',
        },
        {
          id: 'qs-5-3',
          idx: 3,
          text: '化禄入命三方四正：财源稳定，缘分广，能力可变现。化禄入夫妻：婚姻甜蜜。化禄入官禄：事业财源相应。',
          translation: 'Hóa Lộc nhập Tam Phương Tứ Chính của cung Mệnh: nguồn tài ổn định, duyên rộng, năng lực có thể biến thành tiền. Hóa Lộc nhập cung Phu Thê: hôn nhân ngọt ngào. Hóa Lộc nhập cung Quan Lộc: sự nghiệp và nguồn tài tương ứng.',
        },
        {
          id: 'qs-5-4',
          idx: 4,
          text: '化忌入命三方四正：一生有深刻功课，宜面对而非逃避。化忌入夫妻：婚姻多磨砺。化忌入官禄：事业多波折，但磨练后反成专业人才。',
          translation: 'Hóa Kỵ nhập Tam Phương Tứ Chính của cung Mệnh: một đời có bài học sâu sắc, nên đối mặt chứ không trốn tránh. Hóa Kỵ nhập cung Phu Thê: hôn nhân nhiều thử thách. Hóa Kỵ nhập cung Quan Lộc: sự nghiệp nhiều sóng gió, nhưng sau khi rèn luyện trái lại thành người có chuyên môn.',
        },
      ],
    },
    {
      title: 'Cách Cơ Nguyệt Đồng Lương',
      subtitle: 'Mệnh tích lũy ổn định',
      paragraphs: [
        {
          id: 'qs-6-1',
          idx: 1,
          text: '天机太阴天同天梁四星齐入命三方四正，称机月同梁格。文质彬彬、聪慧善谋，最适合公职、学术、文艺、医疗、服务等需稳定累积的行业。',
          translation: 'Bốn sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng nhập Tam Phương Tứ Chính của cung Mệnh, gọi là cách Cơ Nguyệt Đồng Lương. Nho nhã, thông tuệ, giỏi mưu tính; thích hợp nhất với các ngành cần tích lũy ổn định như công chức, học thuật, văn nghệ, y tế, dịch vụ.',
        },
        {
          id: 'qs-6-2',
          idx: 2,
          text: '机月同梁作吏人——古云此格者宜担任公职、行政文书工作，安稳一生。再会昌曲化科，主名声远播。最忌煞星过多，则反主多变难安。',
          translation: '“Cơ Nguyệt Đồng Lương làm lại viên”: người xưa nói người có cách này nên đảm nhiệm công chức, công việc hành chính văn thư, một đời an ổn. Lại hội Xương Khúc Hóa Khoa, chủ về danh tiếng vang xa. Kỵ nhất là Sát Tinh quá nhiều, khi đó trái lại chủ về nhiều biến động, khó yên.',
        },
      ],
    },
    {
      title: 'Cách Song Lộc Triều Viên',
      subtitle: 'Giàu sánh Đào Chu',
      paragraphs: [
        {
          id: 'qs-7-1',
          idx: 1,
          text: '化禄与禄存同会命宫三方四正，称双禄朝垣格。古云"双禄朝垣，富比陶朱"，主一生不愁财，多有正财横财兼得。',
          translation: 'Hóa Lộc và Lộc Tồn cùng hội ở Tam Phương Tứ Chính của cung Mệnh, gọi là cách Song Lộc Triều Viên. Người xưa nói “Song Lộc Triều Viên, giàu sánh Đào Chu”, chủ về một đời không lo về tiền, thường có cả chính tài lẫn hoạnh tài.',
        },
        {
          id: 'qs-7-2',
          idx: 2,
          text: '双禄朝垣最忌空劫——空劫一冲，则双禄成虚名。需见左辅右弼或文昌文曲，方为正格。',
          translation: 'Song Lộc Triều Viên kỵ nhất Không Kiếp: Không Kiếp vừa xung thì song lộc thành hư danh. Cần gặp Tả Phù, Hữu Bật hoặc Văn Xương, Văn Khúc mới là chính cách.',
        },
      ],
    },
  ],
};
