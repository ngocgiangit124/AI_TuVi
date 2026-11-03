/**
 * 《骨髓赋》— 紫微斗数核心口诀
 *
 * 公版（明代刊本）。是紫微斗数最权威、最浓缩的口诀，长约 1500 字。
 * 倪师在《天纪》中多次援引此赋。
 */

import type { Book } from '../types';

export const guSuiFu: Book = {
  title: 'Cốt Tủy Phú',
  slug: 'gusuifu',
  dynasty: 'Đời Minh',
  author: 'Không rõ tác giả (cổ tịch Tử Vi Đẩu Số truyền lại)',
  intro: 'Khẩu quyết cốt lõi cô đọng nhất của Tử Vi Đẩu Số, toàn văn khoảng 1500 chữ. Nghê Hải Hạ nhiều lần dẫn bài phú này trong “Thiên Kỷ”; đây là kinh điển người học Tử Vi phải đọc.',
  wordCount: 1500,
  chapters: [
    {
      title: 'Thiên Tổng Luận',
      subtitle: 'Luận điểm cơ bản của Tử Vi Đẩu Số',
      paragraphs: [
        {
          id: 'gsf-1-1',
          idx: 1,
          text: '太极星曜，乃群星之主。紫微帝座，为众星之尊。天府令星，南北斗化禄、化权、令星；左辅右弼，主祭祀之星。',
          translation: 'Tinh diệu Thái Cực là chủ của các sao. Tử Vi là ngôi đế tọa, tôn quý nhất trong các sao. Thiên Phủ là lệnh tinh; Nam Bắc Đẩu có Hóa Lộc, Hóa Quyền, lệnh tinh; Tả Phù, Hữu Bật là sao chủ về tế tự.',
        },
        {
          id: 'gsf-1-2',
          idx: 2,
          text: '紫微为君，以左辅右弼为相。天府为臣，以禄存为府库。天机为善，天梁为荫，遇之则吉；廉贞为囚，破军为耗，逢之则凶。',
          translation: 'Tử Vi là vua, lấy Tả Phù, Hữu Bật làm tể tướng. Thiên Phủ là bề tôi, lấy Lộc Tồn làm kho tàng. Thiên Cơ là Thiện, Thiên Lương là Ấm, gặp thì cát; Liêm Trinh là Tù, Phá Quân là Hao, gặp thì hung.',
        },
        {
          id: 'gsf-1-3',
          idx: 3,
          text: '看命之要，先看命宫。命宫主星定其格局，三方四正定其用武。次看身宫，身宫定其晚景与依归。再看大限流年，定其一生进退之节。',
          translation: 'Điều cốt yếu khi xem mệnh là trước hết xem cung Mệnh. Chính Tinh cung Mệnh định Cách Cục, Tam Phương Tứ Chính định chỗ dụng võ. Kế đến xem cung Thân; cung Thân định cảnh về già và chỗ nương tựa. Sau đó xem Đại Hạn, Lưu Niên để định nhịp tiến thoái của cả đời.',
        },
      ],
    },
    {
      title: 'Luận về sao Tử Vi',
      subtitle: 'Ngôi đế tọa tôn quý, được phò tá thì quý',
      paragraphs: [
        {
          id: 'gsf-2-1',
          idx: 1,
          text: '紫微为帝座之星，得辅弼则贵，得昌曲则秀，得魁钺则贵人扶持。紫微独坐无辅，纵贵不久；得三方四正之吉星会照，方为正宗大格。',
          translation: 'Tử Vi là sao đế tọa, được Phù Bật thì quý, được Xương Khúc thì tú, được Khôi Việt thì có quý nhân phò trợ. Tử Vi độc tọa không có phò tá, dù quý cũng không lâu; được Cát Tinh ở Tam Phương Tứ Chính hội chiếu mới là đại cách chính tông.',
        },
        {
          id: 'gsf-2-2',
          idx: 2,
          text: '紫微在子午为「面南背北」之贵，主大富大贵；紫微在丑未与破军同宫，主刚毅果决；紫微在寅申与天府同宫，称「紫府同宫」格，主品端衣食丰足。',
          translation: 'Tử Vi ở Tý, Ngọ là cái quý “quay mặt về Nam, tựa lưng về Bắc”, chủ về đại phú đại quý; Tử Vi ở Sửu, Mùi đồng cung với Phá Quân, chủ về cương nghị quả quyết; Tử Vi ở Dần, Thân đồng cung với Thiên Phủ, gọi là cách “Tử Phủ đồng cung”, chủ về phẩm hạnh đoan chính, cơm áo đủ đầy.',
        },
        {
          id: 'gsf-2-3',
          idx: 3,
          text: '紫微居官禄，无煞冲破，必为高官；紫微居田宅，主有祖业，又能自置；紫微居夫妻，主配偶端庄，气质不凡，但宜迟婚不宜早。',
          translation: 'Tử Vi ở cung Quan Lộc, không có Sát Tinh xung phá, ắt làm quan cao; Tử Vi ở cung Điền Trạch, chủ về có tổ nghiệp, lại có thể tự tạo dựng; Tử Vi ở cung Phu Thê, chủ về phối ngẫu đoan trang, khí chất bất phàm, nhưng nên kết hôn muộn, không nên sớm.',
        },
        {
          id: 'gsf-2-4',
          idx: 4,
          text: '紫微忌空劫，主有位无禄。紫微忌孤君无辅，主孤峰独峙，难成大事。紫微化权主独断，紫微化科主名声，紫微化忌主受制于人。',
          translation: 'Tử Vi kỵ Không Kiếp, chủ về có chức vị mà không có bổng lộc. Tử Vi kỵ cảnh vua cô độc không người phò tá, chủ về như ngọn núi lẻ đứng một mình, khó thành đại sự. Tử Vi Hóa Quyền chủ về tự mình quyết đoán, Tử Vi Hóa Khoa chủ về danh tiếng, Tử Vi Hóa Kỵ chủ về bị người khác chế ngự.',
        },
      ],
    },
    {
      title: 'Luận về sao Thất Sát',
      subtitle: 'Tướng tinh cô độc, nên theo võ chức',
      paragraphs: [
        {
          id: 'gsf-3-1',
          idx: 1,
          text: '七杀为将星，性刚毅果决。七杀守命，不喜与诸吉同宫，独行其道方为本格。七杀逢空劫，主孤独漂泊，事业难成。',
          translation: 'Thất Sát là tướng tinh, tính cương nghị quả quyết. Thất Sát thủ Mệnh, không thích đồng cung với các Cát Tinh, tự đi đường riêng mới là bản cách. Thất Sát gặp Không Kiếp, chủ về cô độc phiêu bạt, sự nghiệp khó thành.',
        },
        {
          id: 'gsf-3-2',
          idx: 2,
          text: '七杀朝斗格：七杀居子午、寅申，对宫紫微天府相照，主爵禄荣昌。最宜军警武职、开疆拓土。一生贵气难挡，但需经磨炼方成大器。',
          translation: 'Cách Thất Sát Triều Đẩu: Thất Sát ở Tý, Ngọ, Dần, Thân, đối cung có Tử Vi, Thiên Phủ chiếu, chủ về tước lộc vinh hiển. Hợp nhất với quân đội, cảnh sát, võ chức, mở mang bờ cõi. Cả đời quý khí khó ngăn, nhưng phải qua rèn luyện mới thành tài lớn.',
        },
        {
          id: 'gsf-3-3',
          idx: 3,
          text: '七杀逢羊陀，主刑伤血光；七杀逢火铃，主威武刚烈；七杀逢化禄，主一身武贵；七杀逢化忌，反主消沉，事业多败。',
          translation: 'Thất Sát gặp Kình Đà, chủ về hình thương, huyết quang; Thất Sát gặp Hỏa Linh, chủ về uy vũ cương liệt; Thất Sát gặp Hóa Lộc, chủ về một thân võ quý; Thất Sát gặp Hóa Kỵ, trái lại chủ về tiêu trầm, sự nghiệp nhiều thất bại.',
        },
      ],
    },
    {
      title: 'Cách Sát Phá Tham',
      subtitle: 'Khai sáng, xông pha; mệnh nhiều biến động',
      paragraphs: [
        {
          id: 'gsf-4-1',
          idx: 1,
          text: '七杀、破军、贪狼三星会命迁财官，称「杀破狼格」。主一生变动多、不甘平凡，宜创业、军警、业务。年轻易冲动失利，中年后方能稳定守成。',
          translation: 'Ba sao Thất Sát, Phá Quân, Tham Lang hội ở các cung Mệnh, Thiên Di, Tài Bạch, Quan Lộc, gọi là “cách Sát Phá Tham”. Chủ về một đời nhiều biến động, không cam bình thường; nên khởi nghiệp, theo quân đội, cảnh sát, nghiệp vụ kinh doanh. Lúc trẻ dễ xung động thất lợi, sau trung niên mới có thể ổn định giữ thành.',
        },
        {
          id: 'gsf-4-2',
          idx: 2,
          text: '杀破狼三方有化禄或化权，主动得有力，可成大事；若三方煞星过重（羊陀火铃齐照），主动而无成，宜静守。',
          translation: 'Tam Phương của Sát Phá Tham có Hóa Lộc hoặc Hóa Quyền, chủ về hành động có sức, có thể thành đại sự; nếu Sát Tinh ở Tam Phương quá nặng (Kình Đà, Hỏa Linh cùng chiếu), chủ về hành động mà không thành, nên yên tĩnh giữ mình.',
        },
      ],
    },
    {
      title: 'Cơ Nguyệt Đồng Lương',
      subtitle: 'Tích lũy ổn định, nên làm công chức',
      paragraphs: [
        {
          id: 'gsf-5-1',
          idx: 1,
          text: '天机、太阴、天同、天梁四星齐入命迁财官，称「机月同梁格」。主文质彬彬、聪慧善谋。最适合公职、学术、文艺、医疗、服务等需稳定累积的行业，不宜大冒险大投机。',
          translation: 'Bốn sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng nhập các cung Mệnh, Thiên Di, Tài Bạch, Quan Lộc, gọi là “cách Cơ Nguyệt Đồng Lương”. Chủ về nho nhã, thông tuệ, giỏi mưu tính. Thích hợp nhất với các ngành cần tích lũy ổn định như công chức, học thuật, văn nghệ, y tế, dịch vụ; không nên mạo hiểm lớn, đầu cơ lớn.',
        },
        {
          id: 'gsf-5-2',
          idx: 2,
          text: '机月同梁作吏人——古云此格者宜担任公职、行政文书工作，安稳一生。再会昌曲化科，主名声远播。最忌煞星过多，则反主多变难安。',
          translation: '“Cơ Nguyệt Đồng Lương làm lại viên”: người xưa nói người có cách này nên đảm nhiệm công chức, công việc hành chính văn thư, một đời an ổn. Lại hội Xương Khúc Hóa Khoa, chủ về danh tiếng vang xa. Kỵ nhất là Sát Tinh quá nhiều, khi đó trái lại chủ về nhiều biến động, khó yên.',
        },
      ],
    },
    {
      title: 'Luận về sao Tứ Hóa',
      subtitle: 'Cát hung của Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ',
      paragraphs: [
        {
          id: 'gsf-6-1',
          idx: 1,
          text: '化禄主财、主缘、主能力变现；化权主权、主决断、主独当一面；化科主名、主贵人、主文书；化忌主病、主煞、主深刻功课。',
          translation: 'Hóa Lộc chủ về tài, chủ về duyên, chủ về biến năng lực thành tiền; Hóa Quyền chủ về quyền, chủ về quyết đoán, chủ về một mình đảm đương; Hóa Khoa chủ về danh, chủ về quý nhân, chủ về văn thư; Hóa Kỵ chủ về bệnh, chủ về sát, chủ về bài học sâu sắc.',
        },
        {
          id: 'gsf-6-2',
          idx: 2,
          text: '化禄入命，财源广进；化权入命，能担大任；化科入命，名声远播；化忌入命，须经磨炼方能成器。',
          translation: 'Hóa Lộc nhập Mệnh, nguồn tài rộng mở; Hóa Quyền nhập Mệnh, có thể gánh vác trọng trách; Hóa Khoa nhập Mệnh, danh tiếng vang xa; Hóa Kỵ nhập Mệnh, phải qua rèn luyện mới có thể thành tài.',
        },
        {
          id: 'gsf-6-3',
          idx: 3,
          text: '化忌入财，主财来财去；化忌入官，主事业受挫；化忌入夫妻，主婚姻多波折；化忌入子女，主子女缘薄或亲子摩擦。',
          translation: 'Hóa Kỵ nhập cung Tài Bạch, chủ về tiền đến rồi tiền đi; Hóa Kỵ nhập cung Quan Lộc, chủ về sự nghiệp gặp trắc trở; Hóa Kỵ nhập cung Phu Thê, chủ về hôn nhân nhiều sóng gió; Hóa Kỵ nhập cung Tử Nữ, chủ về duyên với con cái mỏng hoặc cha mẹ con cái có va chạm.',
        },
        {
          id: 'gsf-6-4',
          idx: 4,
          text: '禄存与化禄同会命三方，称「双禄朝垣」，主富比陶朱；化科与化权同会，称「科权双会」，主名权双美。',
          translation: 'Lộc Tồn và Hóa Lộc cùng hội ở Tam Phương của cung Mệnh, gọi là “Song Lộc Triều Viên”, chủ về giàu sánh Đào Chu; Hóa Khoa và Hóa Quyền cùng hội, gọi là “Khoa Quyền song hội”, chủ về danh và quyền đều tốt đẹp.',
        },
      ],
    },
    {
      title: 'Luận về Phù Bật, Khôi Việt',
      subtitle: 'Cái quý của sáu Cát Tinh',
      paragraphs: [
        {
          id: 'gsf-7-1',
          idx: 1,
          text: '左辅右弼为「相星」，主助力贵人；文昌文曲为「文星」，主聪明俊秀；天魁天钺为「贵人星」，主关键时刻有人扶持。',
          translation: 'Tả Phù, Hữu Bật là “sao tể tướng”, chủ về quý nhân trợ lực; Văn Xương, Văn Khúc là “văn tinh”, chủ về thông minh tuấn tú; Thiên Khôi, Thiên Việt là “sao quý nhân”, chủ về lúc then chốt có người phò trợ.',
        },
        {
          id: 'gsf-7-2',
          idx: 2,
          text: '六吉星齐会命宫三方四正，主一生贵人不绝、人缘极佳。即使命格平常，亦能借六吉之力达成不凡之业。',
          translation: 'Sáu Cát Tinh cùng hội ở Tam Phương Tứ Chính của cung Mệnh, chủ về một đời quý nhân không dứt, nhân duyên rất tốt. Dù mệnh cách bình thường, vẫn có thể nhờ sức của sáu Cát Tinh mà đạt được sự nghiệp phi thường.',
        },
        {
          id: 'gsf-7-3',
          idx: 3,
          text: '辅弼夹命：左辅右弼夹于命宫前后两宫，主一生贵人扶持，遇困有助。最宜与紫微同宫，称「君臣庆会」格。',
          translation: 'Phù Bật giáp Mệnh: Tả Phù, Hữu Bật giáp ở hai cung trước và sau cung Mệnh, chủ về một đời có quý nhân phò trợ, gặp khó có người giúp. Tốt nhất là đồng cung với Tử Vi, gọi là cách “Quân Thần Khánh Hội”.',
        },
      ],
    },
    {
      title: 'Luận về sáu Sát Tinh',
      subtitle: 'Cái hung của Kình Đà, Hỏa Linh, Không Kiếp',
      paragraphs: [
        {
          id: 'gsf-8-1',
          idx: 1,
          text: '擎羊陀罗为「煞星」，主血光、是非、阻碍；火星铃星为「燥星」，主冲动、急躁、伤灾；地空地劫为「空亡」，主财耗、虚名、不实。',
          translation: 'Kình Dương, Đà La là “Sát Tinh”, chủ về huyết quang, thị phi, trở ngại; Hỏa Tinh, Linh Tinh là “táo tinh”, chủ về xung động, nóng nảy, thương tai; Địa Không, Địa Kiếp là “Không Vong”, chủ về hao tài, hư danh, không thực.',
        },
        {
          id: 'gsf-8-2',
          idx: 2,
          text: '煞星不全是凶——煞星犹如磨刀石，能炼出常人没有的破局力。年轻时易冲动伤己，中年后方能化煞为权。',
          translation: 'Sát Tinh không hoàn toàn là hung: Sát Tinh giống như đá mài dao, có thể rèn ra sức phá thế cục mà người thường không có. Lúc trẻ dễ xung động tự hại mình, sau trung niên mới có thể hóa sát thành quyền.',
        },
        {
          id: 'gsf-8-3',
          idx: 3,
          text: '羊陀夹忌：擎羊陀罗夹于化忌星所在宫，主大凶。其年其大限须特别警觉血光、官非、重大变故。',
          translation: 'Kình Đà giáp Kỵ: Kình Dương, Đà La giáp cung có sao Hóa Kỵ, chủ về đại hung. Năm đó, Đại Hạn đó phải đặc biệt cảnh giác huyết quang, quan phi, biến cố lớn.',
        },
        {
          id: 'gsf-8-4',
          idx: 4,
          text: '空劫夹命：地空地劫夹于命宫前后两宫，主一生宜务虚不务实，宜从事文艺、宗教、玄学等"非实"行业，不宜经商投资。',
          translation: 'Không Kiếp giáp Mệnh: Địa Không, Địa Kiếp giáp ở hai cung trước và sau cung Mệnh, chủ về một đời nên theo việc hư, không theo việc thực; nên làm các ngành “phi thực” như văn nghệ, tôn giáo, huyền học, không nên kinh doanh, đầu tư.',
        },
      ],
    },
    {
      title: 'Luận về Thập Nhị Cung',
      subtitle: 'Tượng chủ và cát hung của từng cung',
      paragraphs: [
        {
          id: 'gsf-9-1',
          idx: 1,
          text: '命宫为本，三方为用：财帛主财源、官禄主事业、迁移主外缘。三方四正吉星会照，命格方能完整发用。',
          translation: 'Cung Mệnh là gốc, Tam Phương là dụng: Tài Bạch chủ về nguồn tài, Quan Lộc chủ về sự nghiệp, Thiên Di chủ về duyên bên ngoài. Tam Phương Tứ Chính có Cát Tinh hội chiếu thì mệnh cách mới có thể phát huy trọn vẹn.',
        },
        {
          id: 'gsf-9-2',
          idx: 2,
          text: '夫妻宫看配偶气质，子女宫看子女缘分，疾厄宫看身体罩门，迁移宫看外出运势。各宫主星与四化决定该领域之吉凶进退。',
          translation: 'Cung Phu Thê xem khí chất phối ngẫu, cung Tử Nữ xem duyên với con cái, cung Tật Ách xem điểm yếu của cơ thể, cung Thiên Di xem vận thế khi đi ra ngoài. Chính Tinh và Tứ Hóa của mỗi cung quyết định cát hung, tiến thoái của lĩnh vực đó.',
        },
        {
          id: 'gsf-9-3',
          idx: 3,
          text: '田宅宫为命盘财库，正财能否守住看此宫；福德宫为精神享受，心安与否看此宫；父母宫为长辈关系，亦主文书契约。',
          translation: 'Cung Điền Trạch là kho tài của lá số, chính tài có giữ được hay không xem ở cung này; cung Phúc Đức là hưởng thụ tinh thần, tâm có yên hay không xem ở cung này; cung Phụ Mẫu là quan hệ với bề trên, cũng chủ về văn thư, khế ước.',
        },
        {
          id: 'gsf-9-4',
          idx: 4,
          text: '空宫借对宫论事——某宫无主星时，借其对宫主星论该宫之事。如命宫空宫，借迁移宫主星定命格。',
          translation: 'Cung Vô Chính Diệu mượn đối cung để luận việc: khi một cung không có Chính Tinh thì mượn Chính Tinh của đối cung để luận việc của cung đó. Như cung Mệnh Vô Chính Diệu thì mượn Chính Tinh cung Thiên Di để định mệnh cách.',
        },
      ],
    },
  ],
};
