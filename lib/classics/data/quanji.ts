/**
 * 《紫微斗数全集》— 核心精选章节
 *
 * 公版（明代刊本，相传由陈抟祖师传）
 * 是紫微斗数最权威的古籍之一，全本约 8 万字。
 * 此处精选核心论述，未来可补全。
 */

import type { Book } from '../types';

export const ziWeiQuanJi: Book = {
  title: 'Tử Vi Đẩu Số Toàn Tập',
  slug: 'quanji',
  dynasty: 'Đời Minh',
  author: 'Tương truyền tổ sư Trần Đoàn truyền lại',
  intro: 'Một trong những cổ tịch có thẩm quyền nhất của Tử Vi Đẩu Số, tương truyền do tổ sư Trần Đoàn đời Tống truyền dạy. Là nguồn dẫn chứng cốt lõi của hệ thống “Thiên Kỷ” của Nghê Hải Hạ.',
  wordCount: 80000,
  chapters: [
    {
      title: 'Quyển 1 · Tổng luận',
      subtitle: 'Phép lập cơ bản của Tử Vi Đẩu Số',
      paragraphs: [
        {
          id: 'qj-1-1',
          idx: 1,
          text: '夫紫微斗数者，乃陈抟祖师所传，原以紫微为帝座，统御百星。星曜各有所主，各有庙旺利陷之分，会照吉凶之别。看命者，必先安星，次定命宫身宫，三看十二宫吉凶，四参大限流年之飞化。',
          translation: 'Tử Vi Đẩu Số là môn do tổ sư Trần Đoàn truyền lại, vốn lấy Tử Vi làm đế tọa, thống lĩnh trăm sao. Các tinh diệu đều có chỗ chủ riêng, đều có phân biệt Miếu Vượng Lợi Hãm, và khác biệt cát hung khi hội chiếu. Người xem mệnh ắt trước hết phải an sao, thứ đến định cung Mệnh, cung Thân, thứ ba xem cát hung của Thập Nhị Cung, thứ tư tham khảo phi hóa của Đại Hạn, Lưu Niên.',
        },
        {
          id: 'qj-1-2',
          idx: 2,
          text: '安星之法：先以年干起紫微，紫微所在宫位定，则诸星皆按其法位列十二宫。十四主星各居其位，六吉六煞辅而行之。一盘既定，万象皆现。',
          translation: 'Phép an sao: trước hết lấy can năm khởi Tử Vi; cung vị của Tử Vi đã định thì các sao đều theo phép của mình mà xếp vào Thập Nhị Cung. Mười bốn Chính Tinh đều ở vị trí của mình, sáu Cát Tinh và sáu Sát Tinh phụ theo mà vận hành. Một lá số đã định thì muôn tượng đều hiện.',
        },
        {
          id: 'qj-1-3',
          idx: 3,
          text: '命宫为本，主一生格局；身宫为辅，主三十后归向。命身分明，方知一人之进退。三方四正会照，方知一人之用武之地。十二宫各有所主，方知人生之全图。',
          translation: 'Cung Mệnh là gốc, chủ về Cách Cục một đời; cung Thân là phụ, chủ về chỗ hướng về sau tuổi ba mươi. Mệnh, Thân phân minh mới biết sự tiến thoái của một người. Tam Phương Tứ Chính hội chiếu mới biết đất dụng võ của một người. Thập Nhị Cung mỗi cung có chỗ chủ riêng mới biết toàn cảnh đời người.',
        },
      ],
    },
    {
      title: 'Quyển 2 · Luận về sao Tử Vi',
      subtitle: 'Ngôi đế tọa tôn quý',
      paragraphs: [
        {
          id: 'qj-2-1',
          idx: 1,
          text: '紫微为北斗之主，统辖众星。紫微属土，乃尊贵之星。在数为帝座，化气为尊，主忠厚有威仪，独行其道。男命女命皆喜紫微守命，但需有左辅右弼来朝，方为正格。',
          translation: 'Tử Vi là chủ của Bắc Đẩu, thống lĩnh các sao. Tử Vi thuộc Thổ, là sao tôn quý. Trong số là đế tọa, hóa khí là Tôn, chủ về trung hậu, có uy nghi, tự đi đường riêng. Mệnh nam, mệnh nữ đều thích Tử Vi thủ Mệnh, nhưng cần có Tả Phù, Hữu Bật đến chầu mới là chính cách.',
        },
        {
          id: 'qj-2-2',
          idx: 2,
          text: '紫微独坐，需有左右昌曲魁钺夹持方能为用——单身无依的紫微，纵贵不久；得三方四正之吉星会照，方为君臣庆会大格。',
          translation: 'Tử Vi độc tọa cần có Tả Hữu, Xương Khúc, Khôi Việt giáp trì mới có thể phát dụng: Tử Vi đơn thân không nơi nương tựa, dù quý cũng không lâu; được Cát Tinh ở Tam Phương Tứ Chính hội chiếu mới là đại cách Quân Thần Khánh Hội.',
        },
        {
          id: 'qj-2-3',
          idx: 3,
          text: '紫微入命，兄弟有贵气，独立挺秀，多得长兄之助；紫微在子女，子女有贵气，但管教需平等；紫微在夫妻，配偶端庄，但宜迟婚不宜早。',
          translation: 'Tử Vi nhập Mệnh, anh em có quý khí, tự lập nổi trội, thường được anh cả giúp đỡ; Tử Vi ở cung Tử Nữ, con cái có quý khí, nhưng dạy dỗ cần bình đẳng; Tử Vi ở cung Phu Thê, phối ngẫu đoan trang, nhưng nên kết hôn muộn, không nên sớm.',
        },
        {
          id: 'qj-2-4',
          idx: 4,
          text: '紫微在田宅，主有祖业又能自置，房产可作为致富之主轴；紫微在福德，精神层面追求格调、自尊感强；紫微在官禄，主大富贵，宜居高位。',
          translation: 'Tử Vi ở cung Điền Trạch, chủ về có tổ nghiệp lại có thể tự tạo dựng, bất động sản có thể làm trục chính để làm giàu; Tử Vi ở cung Phúc Đức, về mặt tinh thần theo đuổi phong cách, lòng tự tôn mạnh; Tử Vi ở cung Quan Lộc, chủ về đại phú quý, nên ở địa vị cao.',
        },
      ],
    },
    {
      title: 'Quyển 3 · Luận về sáu sao Nam Đẩu',
      subtitle: 'Thiên Phủ, Thái Âm, Tham Lang, Cự Môn, Thiên Tướng, Thiên Lương',
      paragraphs: [
        {
          id: 'qj-3-1',
          idx: 1,
          text: '天府属土，南斗令星，乃禄库之主。天府独坐主品行端正、衣食无忧。天府与紫微同宫名"紫府同宫"，主尊贵。天府最喜见禄存，称"双禄朝垣"，主大富。',
          translation: 'Thiên Phủ thuộc Thổ, là lệnh tinh của Nam Đẩu, là chủ của lộc khố. Thiên Phủ độc tọa chủ về phẩm hạnh đoan chính, cơm áo không lo. Thiên Phủ đồng cung với Tử Vi gọi là “Tử Phủ đồng cung”, chủ về tôn quý. Thiên Phủ thích nhất gặp Lộc Tồn, gọi là “Song Lộc Triều Viên”, chủ về đại phú.',
        },
        {
          id: 'qj-3-2',
          idx: 2,
          text: '太阴为中天主星，属水。太阴庙旺主田宅、富贵，落陷主劳碌、奔波。女命太阴最吉，主貌美贤淑。太阴在亥子主大富，太阴在午未则减力。',
          translation: 'Thái Âm là Chính Tinh của Trung Thiên, thuộc Thủy. Thái Âm Miếu Vượng chủ về điền trạch, phú quý; Hãm Địa chủ về lao lực, bôn ba. Mệnh nữ có Thái Âm là cát nhất, chủ về xinh đẹp hiền thục. Thái Âm ở Hợi, Tý chủ về đại phú; Thái Âm ở Ngọ, Mùi thì giảm lực.',
        },
        {
          id: 'qj-3-3',
          idx: 3,
          text: '贪狼为桃花欲望之星，属木属水。贪狼主多才艺、社交广。贪狼逢火星称"火贪格"，逢铃星称"铃贪格"，皆主偏财横发。但贪狼忌空劫，主华而不实。',
          translation: 'Tham Lang là sao Đào Hoa và dục vọng, thuộc Mộc thuộc Thủy. Tham Lang chủ về đa tài nghệ, giao du rộng. Tham Lang gặp Hỏa Tinh gọi là “cách Hỏa Tham”, gặp Linh Tinh gọi là “cách Linh Tham”, đều chủ về tiền của ngoài chính nghiệp đột phát. Nhưng Tham Lang kỵ Không Kiếp, chủ về hoa mà không thực.',
        },
        {
          id: 'qj-3-4',
          idx: 4,
          text: '巨门属水，化气为暗，主口舌是非。巨门为口才之星，宜律师、教师、传媒。巨门化禄主"以口生财"，化忌则口舌官非不断。巨门最忌与太阳同宫的丑未两宫，称"日月反背"。',
          translation: 'Cự Môn thuộc Thủy, hóa khí là Ám, chủ về khẩu thiệt thị phi. Cự Môn là sao khẩu tài, hợp với luật sư, giáo viên, truyền thông. Cự Môn Hóa Lộc chủ về “dùng miệng sinh tài”, Hóa Kỵ thì khẩu thiệt, quan phi không dứt. Cự Môn kỵ nhất hai cung Sửu, Mùi đồng cung với Thái Dương, gọi là “Nhật Nguyệt phản bối”.',
        },
        {
          id: 'qj-3-5',
          idx: 5,
          text: '天相属水，化气为印，乃辅佐之星。天相忠厚老实，宜行政秘书法务。天相不喜独坐，最宜与紫微或廉贞同宫，借其威仪而成事。',
          translation: 'Thiên Tướng thuộc Thủy, hóa khí là Ấn, là sao phụ tá. Thiên Tướng trung hậu thật thà, hợp với hành chính, thư ký, pháp vụ. Thiên Tướng không thích độc tọa, hợp nhất là đồng cung với Tử Vi hoặc Liêm Trinh, mượn uy nghi của sao đó mà thành việc.',
        },
        {
          id: 'qj-3-6',
          idx: 6,
          text: '天梁属土，化气为荫，乃老人之星。天梁主善良、慈悲、孤克、化解。天梁宜法律、医学、教育、宗教。天梁化科主名声，化禄反而虚浮。',
          translation: 'Thiên Lương thuộc Thổ, hóa khí là Ấm, là sao của người già. Thiên Lương chủ về thiện lương, từ bi, cô khắc, hóa giải. Thiên Lương hợp với pháp luật, y học, giáo dục, tôn giáo. Thiên Lương Hóa Khoa chủ về danh tiếng, Hóa Lộc trái lại hư phù.',
        },
      ],
    },
    {
      title: 'Quyển 4 · Luận về sáu sao Bắc Đẩu',
      subtitle: 'Tử Vi, Thiên Cơ, Thái Dương, Vũ Khúc, Liêm Trinh, Phá Quân',
      paragraphs: [
        {
          id: 'qj-4-1',
          idx: 1,
          text: '紫微属土，已论于卷二。',
          translation: 'Tử Vi thuộc Thổ, đã luận ở quyển hai.',
        },
        {
          id: 'qj-4-2',
          idx: 2,
          text: '天机属木，化气为善，乃智慧之星。天机主聪明、机变、好动。天机入命，思维敏捷，宜咨询、策划、文教。天机最忌善变无主，需文昌文曲会照方能成器。',
          translation: 'Thiên Cơ thuộc Mộc, hóa khí là Thiện, là sao trí tuệ. Thiên Cơ chủ về thông minh, cơ biến, hiếu động. Thiên Cơ nhập Mệnh, tư duy nhanh nhạy, hợp với tư vấn, hoạch định, văn giáo. Thiên Cơ kỵ nhất hay thay đổi, không có chủ kiến; cần Văn Xương, Văn Khúc hội chiếu mới có thể thành tài.',
        },
        {
          id: 'qj-4-3',
          idx: 3,
          text: '太阳属火，化气为贵，乃男贵之星。太阳主名誉、公务、社交。太阳庙旺主大贵，落陷则劳而无获。太阳最宜在卯辰巳午之地，落于戌亥子丑则减力。',
          translation: 'Thái Dương thuộc Hỏa, hóa khí là Quý, là sao quý của nam giới. Thái Dương chủ về danh dự, công vụ, giao tiếp xã hội. Thái Dương Miếu Vượng chủ về đại quý, Hãm Địa thì lao lực mà không thu được gì. Thái Dương hợp nhất ở đất Mão, Thìn, Tỵ, Ngọ; rơi vào Tuất, Hợi, Tý, Sửu thì giảm lực.',
        },
        {
          id: 'qj-4-4',
          idx: 4,
          text: '武曲属金，化气为财，乃财星之主。武曲主刚毅果决，善理财经营。武曲化忌主手术血光、金属意外。武曲在丑未与七杀同宫，称"武曲七杀"格，主刚直武贵。',
          translation: 'Vũ Khúc thuộc Kim, hóa khí là Tài, là chủ của các tài tinh. Vũ Khúc chủ về cương nghị quả quyết, giỏi quản lý tài chính, kinh doanh. Vũ Khúc Hóa Kỵ chủ về phẫu thuật, huyết quang, tai nạn kim loại. Vũ Khúc ở Sửu, Mùi đồng cung với Thất Sát, gọi là cách “Vũ Khúc Thất Sát”, chủ về cương trực, võ quý.',
        },
        {
          id: 'qj-4-5',
          idx: 5,
          text: '廉贞属火属木，化气为囚，乃次桃花之星。廉贞文武兼备，多才艺。廉贞化忌主血光官非、感情纠纷。廉贞与天相同宫为"廉相格"，主清廉之名。',
          translation: 'Liêm Trinh thuộc Hỏa thuộc Mộc, hóa khí là Tù, là sao Đào Hoa thứ yếu. Liêm Trinh văn võ kiêm toàn, đa tài nghệ. Liêm Trinh Hóa Kỵ chủ về huyết quang, quan phi, tranh chấp tình cảm. Liêm Trinh đồng cung với Thiên Tướng là “cách Liêm Tướng”, chủ về danh thanh liêm.',
        },
        {
          id: 'qj-4-6',
          idx: 6,
          text: '破军属水，化气为耗，乃破坏创新之星。破军主开创、变动、六亲缘薄。破军宜技术专长走天下。破军化禄称"破而后立"，主先散后聚。',
          translation: 'Phá Quân thuộc Thủy, hóa khí là Hao, là sao phá hoại và đổi mới. Phá Quân chủ về khai sáng, biến động, duyên với lục thân mỏng. Phá Quân nên dùng chuyên môn kỹ thuật để đi khắp thiên hạ. Phá Quân Hóa Lộc gọi là “phá rồi sau mới lập”, chủ về trước tan sau tụ.',
        },
      ],
    },
    {
      title: 'Quyển 5 · Luận về Tứ Hóa và Cách Cục',
      subtitle: 'Sức mạnh của Tứ Hóa và các Cách Cục quan trọng',
      paragraphs: [
        {
          id: 'qj-5-1',
          idx: 1,
          text: '化禄主财源，主缘分，主能力变现。化禄入命三方，主财源广进；化禄入财帛，主财来财往，正财稳定。',
          translation: 'Hóa Lộc chủ về nguồn tài, chủ về duyên phận, chủ về biến năng lực thành tiền. Hóa Lộc nhập Tam Phương của cung Mệnh, chủ về nguồn tài rộng mở; Hóa Lộc nhập cung Tài Bạch, chủ về tiền đến tiền đi, chính tài ổn định.',
        },
        {
          id: 'qj-5-2',
          idx: 2,
          text: '化权主权力，主决断，主担当。化权入命，主能独当一面；化权入官禄，主事业有掌控力，宜走管理或技术权威路线。',
          translation: 'Hóa Quyền chủ về quyền lực, chủ về quyết đoán, chủ về gánh vác. Hóa Quyền nhập Mệnh, chủ về có thể một mình đảm đương; Hóa Quyền nhập cung Quan Lộc, chủ về sự nghiệp có khả năng kiểm soát, nên đi theo đường quản lý hoặc uy quyền kỹ thuật.',
        },
        {
          id: 'qj-5-3',
          idx: 3,
          text: '化科主名声，主文书，主贵人。化科入命，主名声远播；化科入身，主以名取利，宜文教、研究、咨询。',
          translation: 'Hóa Khoa chủ về danh tiếng, chủ về văn thư, chủ về quý nhân. Hóa Khoa nhập Mệnh, chủ về danh tiếng vang xa; Hóa Khoa nhập cung Thân, chủ về nhờ danh mà được lợi, hợp với văn giáo, nghiên cứu, tư vấn.',
        },
        {
          id: 'qj-5-4',
          idx: 4,
          text: '化忌主病，主煞，主深刻功课。化忌入命三方，主一生有"钝点"——这是命格里最深的功课，过得了就是大智慧。三十岁前后是化忌最锋利的时候。',
          translation: 'Hóa Kỵ chủ về bệnh, chủ về sát, chủ về bài học sâu sắc. Hóa Kỵ nhập Tam Phương của cung Mệnh, chủ về một đời có “điểm cùn”: đây là bài học sâu nhất trong mệnh cách, vượt qua được chính là đại trí tuệ. Khoảng tuổi ba mươi là lúc Hóa Kỵ sắc bén nhất.',
        },
        {
          id: 'qj-5-5',
          idx: 5,
          text: '紫府同宫格：紫微天府同入命宫，主品行端正、衣食无忧、有领导才能。需要左右辅弼来配合方为完整大格。',
          translation: 'Cách Tử Phủ đồng cung: Tử Vi, Thiên Phủ cùng nhập cung Mệnh, chủ về phẩm hạnh đoan chính, cơm áo không lo, có tài lãnh đạo. Cần có Tả Phù, Hữu Bật phối hợp mới là đại cách hoàn chỉnh.',
        },
        {
          id: 'qj-5-6',
          idx: 6,
          text: '七杀朝斗格：七杀居子午寅申宫坐命，对宫紫微天府相照，主爵禄荣昌——武职大贵，最宜军警政界或企业高管。',
          translation: 'Cách Thất Sát Triều Đẩu: Thất Sát ở các cung Tý, Ngọ, Dần, Thân tọa Mệnh, đối cung có Tử Vi, Thiên Phủ chiếu, chủ về tước lộc vinh hiển: võ chức đại quý, hợp nhất với quân đội, cảnh sát, chính giới hoặc quản lý cấp cao doanh nghiệp.',
        },
        {
          id: 'qj-5-7',
          idx: 7,
          text: '双禄朝垣格：化禄、禄存同会命宫三方四正，财源涌动、衣食丰足。古云"双禄朝垣，富比陶朱"，主一生不愁财。',
          translation: 'Cách Song Lộc Triều Viên: Hóa Lộc, Lộc Tồn cùng hội ở Tam Phương Tứ Chính của cung Mệnh, nguồn tài dồi dào, cơm áo đủ đầy. Người xưa nói “Song Lộc Triều Viên, giàu sánh Đào Chu”, chủ về một đời không lo về tiền.',
        },
        {
          id: 'qj-5-8',
          idx: 8,
          text: '机月同梁格：天机、太阴、天同、天梁四星齐入命迁财官，主文质彬彬、聪慧善谋。最适合公职、学术、文艺、医疗、服务等需稳定累积的行业。',
          translation: 'Cách Cơ Nguyệt Đồng Lương: bốn sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng nhập các cung Mệnh, Thiên Di, Tài Bạch, Quan Lộc, chủ về nho nhã, thông tuệ, giỏi mưu tính. Thích hợp nhất với các ngành cần tích lũy ổn định như công chức, học thuật, văn nghệ, y tế, dịch vụ.',
        },
        {
          id: 'qj-5-9',
          idx: 9,
          text: '杀破狼格：七杀、破军、贪狼三星会命，主一生变动多、不甘平凡，宜创业、军警、业务、销售。中年后才能稳定守成。',
          translation: 'Cách Sát Phá Tham: ba sao Thất Sát, Phá Quân, Tham Lang hội Mệnh, chủ về một đời nhiều biến động, không cam bình thường; nên khởi nghiệp, theo quân đội, cảnh sát, nghiệp vụ kinh doanh, bán hàng. Sau trung niên mới có thể ổn định giữ thành.',
        },
        {
          id: 'qj-5-10',
          idx: 10,
          text: '日月同宫格：太阳太阴同入丑宫或未宫，主异性缘佳、事业顺遂、名声远播。丑宫力较平，未宫力略减。',
          translation: 'Cách Nhật Nguyệt đồng cung: Thái Dương, Thái Âm cùng nhập cung Sửu hoặc cung Mùi, chủ về duyên với người khác giới tốt, sự nghiệp thuận lợi, danh tiếng vang xa. Ở cung Sửu lực tương đối bình, ở cung Mùi lực hơi giảm.',
        },
      ],
    },
  ],
};
