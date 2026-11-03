/**
 * Vietnamese display layer for lib/ziwei/patterns.ts.
 * patterns.ts is server-only and its Chinese output is asserted by regression tests, so it stays untouched:
 * its output is translated here at render time. Keys below must match its strings byte for byte.
 * A string with no entry is returned unchanged, so a gap stays visible instead of being half-translated.
 */
import type { Pattern, getMingGongSummary } from '../ziwei/patterns';
import { viBranch, viPalace, viStar } from './vi';

type MingGongSummary = ReturnType<typeof getMingGongSummary>;
type Rule = [RegExp, (...groups: string[]) => string];

function applyRules(s: string, dict: Record<string, string>, rules: Rule[]): string {
  const exact = dict[s];
  if (exact !== undefined) return exact;
  for (const [re, render] of rules) {
    const m = s.match(re);
    if (m) return render(...m.slice(1));
  }
  return s;
}

const viStarList = (list: string): string => list.split('、').map(viStar).join(', ');

const NAMES: Record<string, string> = {
  '君臣庆会': 'Quân Thần Khánh Hội',
  '紫府同宫': 'Tử Phủ Đồng Cung',
  '府相朝垣': 'Phủ Tướng Triều Viên',
  '阳梁昌禄': 'Dương Lương Xương Lộc',
  '火贪格': 'Cách Hỏa Tham',
  '铃贪格': 'Cách Linh Tham',
  '武贪格': 'Cách Vũ Tham',
  '杀破狼': 'Sát Phá Tham',
  '机月同梁': 'Cơ Nguyệt Đồng Lương',
  '廉贞天相格': 'Cách Liêm Trinh Thiên Tướng',
  '武曲七杀': 'Vũ Khúc Thất Sát',
  '天同天梁格': 'Cách Thiên Đồng Thiên Lương',
  '日月同宫': 'Nhật Nguyệt Đồng Cung',
  '日月夹命': 'Nhật Nguyệt Giáp Mệnh',
  '巨日同宫': 'Cự Nhật Đồng Cung',
  '石中隐玉': 'Thạch Trung Ẩn Ngọc',
  '明珠出海': 'Minh Châu Xuất Hải',
  '紫微入命': 'Tử Vi Nhập Mệnh',
  '辅弼夹命': 'Phù Bật Giáp Mệnh',
  '昌曲夹命': 'Xương Khúc Giáp Mệnh',
  '魁钺夹命': 'Khôi Việt Giáp Mệnh',
  '双禄朝垣': 'Song Lộc Triều Viên',
  '三奇加会': 'Tam Kỳ Gia Hội',
  '羊陀夹忌': 'Kình Đà Giáp Kỵ',
  '火铃夹命': 'Hỏa Linh Giáp Mệnh',
  '空劫夹命': 'Không Kiếp Giáp Mệnh',
  '廉杀羊': 'Liêm Sát Dương',
  '巨火羊': 'Cự Hỏa Dương',
  '铃昌陀武': 'Linh Xương Đà Vũ',
  '马头带箭': 'Mã Đầu Đới Tiễn',
  '禄存守命': 'Lộc Tồn Thủ Mệnh',
  '禄存守身': 'Lộc Tồn Thủ Thân',
  '天马入命': 'Thiên Mã Nhập Mệnh',
  '天马在迁': 'Thiên Mã Tại Thiên Di',
  '化禄入财': 'Hóa Lộc Nhập Tài',
  '化权入官': 'Hóa Quyền Nhập Quan',
  '化科入命': 'Hóa Khoa Nhập Mệnh',
  '化科入身': 'Hóa Khoa Nhập Thân',
  '机月同梁三星会': 'Cơ Nguyệt Đồng Lương (hội ba sao)',
  '昌曲坐命': 'Xương Khúc Tọa Mệnh',
  '昌曲同会': 'Xương Khúc Đồng Hội',
  '辅弼同会': 'Phù Bật Đồng Hội',
  '魁钺同会': 'Khôi Việt Đồng Hội',
  '科权双会': 'Khoa Quyền Song Hội',
};

const NAME_RULES: Rule[] = [
  [/^(.+)化禄入命$/, s => `${viStar(s)} Hóa Lộc Nhập Mệnh`],
  [/^(.+)化忌入(命|迁)$/, (s, p) => `${viStar(s)} Hóa Kỵ Nhập ${p === '命' ? 'Mệnh' : 'Thiên Di'}`],
];

const DESCRIPTIONS: Record<string, string> = {
  '紫微入命，左辅右弼同会，帝王得贤臣辅佐，主大富大贵、统御之命。一生贵人不绝，宜走政商高位、跨界领袖之途。':
    'Tử Vi nhập Mệnh, Tả Phù, Hữu Bật đồng hội, như đế vương được hiền thần phò tá, chủ đại phú đại quý, là mệnh thống ngự. Cả đời quý nhân không dứt, nên đi theo con đường địa vị cao trong chính trường, thương trường, làm lãnh đạo xuyên lĩnh vực.',
  '紫微天府同入命宫，帝相并临，尊贵之命。主品行端正、衣食无忧、有领导才能，宜担任要职。需要左右辅弼来配合方为完整大格。':
    'Tử Vi, Thiên Phủ cùng nhập cung Mệnh, đế và tướng cùng đến, là mệnh tôn quý. Chủ phẩm hạnh đoan chính, cơm áo không lo, có tài lãnh đạo, nên đảm nhiệm chức vụ trọng yếu. Cần có Tả Phù, Hữu Bật phối hợp mới là đại cách trọn vẹn.',
  '紫微天府同宫但未坐命，主一生有贵人贵气依托，但本身不一定大富贵，需看会照吉煞而定。':
    'Tử Vi, Thiên Phủ đồng cung nhưng không tọa Mệnh, chủ cả đời có quý nhân, quý khí để nương tựa, nhưng bản thân chưa chắc đại phú đại quý, phải xem các sao cát, sát hội chiếu mà định.',
  '天府天相分守命宫三方四正，文武并济、权印双辉，主一生衣食丰足、地位崇高。古书云"府相朝垣千钟食禄"，常见于政界、企业管理者。':
    'Thiên Phủ, Thiên Tướng chia nhau thủ Tam Phương Tứ Chính của cung Mệnh, văn võ kiêm toàn, quyền và ấn cùng rạng rỡ, chủ cả đời cơm áo đầy đủ, địa vị cao. Cổ thư có câu “Phủ Tướng triều viên, nghìn chung thực lộc”, thường thấy ở người trong chính giới và người quản lý doanh nghiệp.',
  '太阳、天梁、文昌、禄存四星齐会命宫三方，号称"科举之星"，主清贵显达、考运极佳，宜走学术、文教、研究、专业认证之路，一生功名易就。':
    'Thái Dương, Thiên Lương, Văn Xương, Lộc Tồn bốn sao cùng hội Tam Phương của cung Mệnh, được gọi là “sao khoa cử”, chủ thanh quý hiển đạt, vận thi cử cực tốt, nên đi theo con đường học thuật, văn giáo, nghiên cứu, chứng chỉ chuyên môn, cả đời công danh dễ thành.',
  '武曲贪狼会命，财星与桃花欲望星交辉，古书云"武贪不发少年人"——三十岁后方能厚积薄发。主中年以后大富大贵，财源由人脉、应酬、欲望管理而来，适合金融、投机、销售、娱乐业。':
    'Vũ Khúc, Tham Lang hội Mệnh, sao tài và sao Đào Hoa, dục vọng cùng giao huy, cổ thư có câu “Vũ Tham không phát thời thiếu niên” — sau ba mươi tuổi mới tích lũy dày mà phát dần. Chủ từ trung niên trở đi đại phú đại quý, nguồn tài đến từ nhân mạch, giao tế, quản trị dục vọng, thích hợp tài chính, đầu cơ, bán hàng, ngành giải trí.',
  '七杀、破军、贪狼三星会命，开创闯荡之命格。一生变动多、不甘平凡，宜创业、军警、业务、销售。中年后才能稳定守成，年轻时易因冲动失利。':
    'Thất Sát, Phá Quân, Tham Lang ba sao hội Mệnh, là mệnh cách khai sáng, xông pha. Cả đời nhiều biến động, không cam bình phàm, nên khởi nghiệp, vào quân đội, cảnh sát, làm kinh doanh, bán hàng. Từ trung niên về sau mới ổn định giữ thành, lúc trẻ dễ vì bốc đồng mà thất lợi.',
  '天机太阴天同天梁四星齐入命迁财官，文质彬彬、聪慧善谋。最适合公职、学术、文艺、医疗、服务等需稳定累积的行业，不宜大冒险大投机。':
    'Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương bốn sao cùng nhập Mệnh, Thiên Di, Tài Bạch, Quan Lộc, nho nhã, thông tuệ, giỏi mưu tính. Thích hợp nhất với công chức, học thuật, văn nghệ, y tế, dịch vụ và các ngành cần tích lũy ổn định, không nên đại mạo hiểm, đại đầu cơ.',
  '廉贞天相同宫，印绶格局，主秉公处事、清廉之名，宜任公职、行政管理、法务、企划。怕见擎羊化忌，则反主官非。':
    'Liêm Trinh, Thiên Tướng đồng cung, là Cách Cục ấn thụ, chủ xử sự công minh, có tiếng thanh liêm, nên làm công chức, quản lý hành chính, pháp vụ, hoạch định. Sợ gặp Kình Dương, Hóa Kỵ, khi đó trái lại chủ quan phi.',
  '武曲七杀同宫，将星配财星，主果决刚毅、理财能力强，适合金融、军警、创业。但忌见化忌煞星，否则凶险。一生奋斗、积财但操心。':
    'Vũ Khúc, Thất Sát đồng cung, sao tướng phối sao tài, chủ quả quyết cương nghị, khả năng quản lý tài chính mạnh, thích hợp tài chính, quân đội, cảnh sát, khởi nghiệp. Nhưng kỵ gặp Hóa Kỵ, Sát Tinh, nếu không sẽ hung hiểm. Cả đời phấn đấu, tích được của nhưng lao tâm.',
  '天同天梁同宫，福星与荫星共会，主宽厚和善、乐于助人，宜医疗、教育、宗教、社会公益。但偏温和保守，难成大富大贵之局。':
    'Thiên Đồng, Thiên Lương đồng cung, phúc tinh và ấm tinh cùng hội, chủ khoan hậu hòa nhã, vui lòng giúp người, nên làm y tế, giáo dục, tôn giáo, công ích xã hội. Nhưng thiên về ôn hòa, bảo thủ, khó thành cục đại phú đại quý.',
  '太阳太阴分居命宫两侧夹照，光明磊落，一生贵人相助，事业蓬勃。男主官贵，女主旺夫兴家。日月须不落陷方为真夹。':
    'Thái Dương, Thái Âm chia ở hai bên cung Mệnh giáp chiếu, quang minh lỗi lạc, cả đời có quý nhân giúp đỡ, sự nghiệp hưng thịnh. Nam chủ quan quý, nữ chủ vượng phu hưng gia. Nhật Nguyệt phải không rơi vào Hãm Địa mới là giáp thật.',
  '巨门坐命子午，外表平凡而内蕴才学。早年默默无闻、中年方显贵气，宜走专业、研究、口才、传媒。需有禄权或文昌相助方能"凿石见玉"。':
    'Cự Môn tọa Mệnh tại Tý, Ngọ, bề ngoài bình thường mà bên trong ẩn chứa tài học. Thời trẻ âm thầm không ai biết, trung niên mới hiển lộ quý khí, nên đi theo chuyên môn, nghiên cứu, tài ăn nói, truyền thông. Cần có Lộc, Quyền hoặc Văn Xương trợ giúp mới có thể “đục đá thấy ngọc”.',
  '命未空宫，对宫丑宫日月同辉拱照，号"明珠出海"。主出生平凡、后天努力出头，宜远赴他乡、学术研究或大公司高位，主大富大贵。':
    'Mệnh tại Mùi là Vô Chính Diệu, đối cung tại Sửu có Nhật Nguyệt cùng rạng rỡ củng chiếu, gọi là “Minh Châu Xuất Hải”. Chủ xuất thân bình thường, nhờ nỗ lực về sau mà vươn lên, nên đi xa đến xứ khác, nghiên cứu học thuật hoặc giữ vị trí cao ở công ty lớn, chủ đại phú đại quý.',
  '紫微独坐命宫，帝王之星，自尊心强、有领导魅力。但紫微最忌"在野孤君"——若无左右辅弼相会，反成孤高自傲、易招毁谤。':
    'Tử Vi độc tọa cung Mệnh, là sao đế vương, lòng tự tôn cao, có sức hút lãnh đạo. Nhưng Tử Vi kỵ nhất là “cô quân tại dã” — nếu không có Tả Phù, Hữu Bật tương hội, trái lại thành cô cao tự phụ, dễ chuốc phỉ báng.',
  '左辅右弼夹命，传统论述认为此格象征贵人相助与福厚特质。适合走仕途、大企业管理等能发挥组织才能的方向。古书云"左辅右弼，终身福厚"——强调此格在组织协调中的优势。':
    'Tả Phù, Hữu Bật giáp Mệnh, luận thuật truyền thống cho rằng cách này tượng trưng cho quý nhân giúp đỡ và phẩm chất phúc hậu. Thích hợp đi theo đường quan lộ, quản lý doanh nghiệp lớn và các hướng phát huy được tài tổ chức. Cổ thư có câu “Tả Phù, Hữu Bật, trọn đời phúc dày” — nhấn mạnh ưu thế của cách này trong tổ chức, điều phối.',
  '文昌文曲夹命宫，主聪明俊秀、文采斐然，宜走文教、学术、艺术、写作。古书云"昌曲夹命主科甲"，最利考运。':
    'Văn Xương, Văn Khúc giáp cung Mệnh, chủ thông minh tuấn tú, văn chương xuất sắc, nên đi theo văn giáo, học thuật, nghệ thuật, viết lách. Cổ thư có câu “Xương Khúc giáp Mệnh chủ khoa giáp”, lợi nhất cho vận thi cử.',
  '天魁天钺夹命，男称天乙、女称玉堂，一生贵人提携。考试、求职、关键时刻常有意外贵人相助。':
    'Thiên Khôi, Thiên Việt giáp Mệnh, nam gọi Thiên Ất, nữ gọi Ngọc Đường, cả đời có quý nhân nâng đỡ. Khi thi cử, tìm việc, lúc then chốt thường có quý nhân bất ngờ giúp đỡ.',
  '化禄、禄存同会命宫三方四正，财源涌动、衣食丰足。古书云"双禄朝垣，富比陶朱"，主一生不愁财，多有正财横财兼得。':
    'Hóa Lộc, Lộc Tồn đồng hội Tam Phương Tứ Chính của cung Mệnh, nguồn tài tuôn chảy, cơm áo đầy đủ. Cổ thư có câu “Song Lộc triều viên, giàu sánh Đào Chu”, chủ cả đời không lo về tiền, thường có cả chính tài lẫn hoạnh tài.',
  '化禄、化权、化科三吉化齐会命宫三方四正，号称"三奇加会"。主一生功名、财富、贵人三全，是紫微斗数最高吉格之一。':
    'Hóa Lộc, Hóa Quyền, Hóa Khoa ba cát hóa cùng hội Tam Phương Tứ Chính của cung Mệnh, được gọi là “Tam Kỳ Gia Hội”. Chủ cả đời công danh, tài phú, quý nhân đều trọn vẹn, là một trong những cát cách cao nhất của Tử Vi Đẩu Số.',
  '化忌坐命，左右擎羊陀罗夹命，古书云"羊陀夹忌为败局"，主一生劳碌奔波、坎坷不顺、身心俱疲。需以德行修养与积极做事化解，凡事谨慎为上。':
    'Hóa Kỵ tọa Mệnh, hai bên Kình Dương, Đà La giáp Mệnh, cổ thư có câu “Kình Đà giáp Kỵ là bại cục”, chủ cả đời lao lực bôn ba, gian truân không thuận, thân tâm đều mệt mỏi. Cần lấy tu dưỡng đức hạnh và tích cực làm việc để hóa giải, mọi việc cẩn trọng là trên hết.',
  '火星铃星分居命宫前后两宫夹命，主性急、易冲动、突发意外或纠纷。需培养耐性、避免冲动决策。':
    'Hỏa Tinh, Linh Tinh chia ở hai cung trước sau cung Mệnh giáp Mệnh, chủ tính nóng, dễ bốc đồng, đột ngột gặp sự cố hoặc tranh chấp. Cần rèn tính kiên nhẫn, tránh quyết định bốc đồng.',
  '地空地劫夹命，主财来财去、思想脱俗、易遁入宗教哲学。古书云"空劫夹命，财不聚"。宜技艺、宗教、研究等不重物质之业。':
    'Địa Không, Địa Kiếp giáp Mệnh, chủ tiền đến rồi đi, tư tưởng thoát tục, dễ đi vào tôn giáo, triết học. Cổ thư có câu “Không Kiếp giáp Mệnh, tài không tụ”. Nên làm kỹ nghệ, tôn giáo, nghiên cứu và các nghề không nặng về vật chất.',
  '廉贞、七杀、擎羊三星会照命宫三方，传统论述中标记为需要特别关注的组合。此格在大限流年触发时提醒保持谨慎态度：驾驶安全、人际和平、医疗决策需理性——强调主动管理而非消极宿命。':
    'Liêm Trinh, Thất Sát, Kình Dương ba sao hội chiếu Tam Phương của cung Mệnh, trong luận thuật truyền thống được đánh dấu là tổ hợp cần đặc biệt chú ý. Khi cách này bị kích hoạt ở Đại Hạn, Lưu Niên, nhắc nhở giữ thái độ thận trọng: an toàn khi lái xe, hòa hảo trong quan hệ, quyết định y tế cần lý trí — nhấn mạnh chủ động quản lý chứ không tiêu cực cam chịu số mệnh.',
  '巨门、火星、擎羊三星会照，传统古籍记载此格为需要警惕之组合（古文"终身缢死"为宿命论表述，今已不适用）。现代理解为：此组合象征直言易触发冲突、情绪激烈时需要自我觉察。修养方向是：练习温和表达、主动化解对立、培养情绪管理。':
    'Cự Môn, Hỏa Tinh, Kình Dương ba sao hội chiếu, cổ tịch truyền thống ghi đây là tổ hợp cần cảnh giác (câu cổ văn “suốt đời chết treo cổ” là cách nói định mệnh luận, nay không còn phù hợp). Cách hiểu hiện đại là: tổ hợp này tượng trưng cho việc nói thẳng dễ gây xung đột, khi cảm xúc dữ dội cần tự nhận biết. Hướng tu dưỡng là: tập cách diễn đạt ôn hòa, chủ động hóa giải đối lập, rèn luyện quản lý cảm xúc.',
  '铃星、文昌、陀罗、武曲四星齐会，传统古籍记载此为需要特别关注之组合（古文"限至投河"为宿命论表述，非现代理解）。现代建议为：此组合在大限流年触发时，提醒理性处理重大决策、关注情绪波动、维持生活的稳定性——强调主动管理而非消极等待。':
    'Linh Tinh, Văn Xương, Đà La, Vũ Khúc bốn sao cùng hội, cổ tịch truyền thống ghi đây là tổ hợp cần đặc biệt chú ý (câu cổ văn “hạn đến gieo mình xuống sông” là cách nói định mệnh luận, không phải cách hiểu hiện đại). Khuyến nghị hiện đại là: khi tổ hợp này bị kích hoạt ở Đại Hạn, Lưu Niên, nhắc nhở xử lý lý trí các quyết định trọng đại, chú ý dao động cảm xúc, duy trì sự ổn định của cuộc sống — nhấn mạnh chủ động quản lý chứ không tiêu cực chờ đợi.',
  '擎羊于午宫坐命，号"马头带箭"，古书云"威镇边疆"。此格象征果决行动力与竞争精神，适合需要执行力与果敢决策的职业方向。传统论述同时提醒此格需要配合吉利星曜才能最优发挥——强调组合影响而非单星独论。':
    'Kình Dương tọa Mệnh tại cung Ngọ, gọi là “Mã Đầu Đới Tiễn”, cổ thư có câu “uy trấn biên cương”. Cách này tượng trưng cho sức hành động quả quyết và tinh thần cạnh tranh, thích hợp với hướng nghề nghiệp cần năng lực thực thi và quyết định quả cảm. Luận thuật truyền thống đồng thời nhắc nhở cách này cần phối hợp với các sao cát lợi mới phát huy tối ưu — nhấn mạnh ảnh hưởng của tổ hợp chứ không luận riêng một sao.',
  '禄存坐命，主一生衣食无忧、财禄稳定。性格保守，善积累，但羊陀夹禄须防小人。最宜配化禄、左辅右弼方为大格。':
    'Lộc Tồn tọa Mệnh, chủ cả đời cơm áo không lo, tài lộc ổn định. Tính cách bảo thủ, giỏi tích lũy, nhưng Kình Đà giáp Lộc phải đề phòng tiểu nhân. Tốt nhất phối Hóa Lộc, Tả Phù, Hữu Bật mới là đại cách.',
  '禄存入身宫，主中年后财源稳定、得禄自享。倪师说「禄存入身，财气近身」——配偶或事业方向能带来稳定财禄。':
    'Lộc Tồn nhập cung Thân, chủ từ trung niên về sau nguồn tài ổn định, được lộc tự hưởng. Thầy Nghê nói “Lộc Tồn nhập Thân, tài khí gần thân” — phối ngẫu hoặc hướng sự nghiệp có thể mang lại tài lộc ổn định.',
  '天马坐命，主一生奔波、动中得财，宜走商旅、外勤、跨界发展。倪师说「天马入命，无禄不发」——若再会禄存或化禄即「禄马交驰」之富格。':
    'Thiên Mã tọa Mệnh, chủ cả đời bôn ba, trong động đắc tài, nên đi theo thương mại lữ hành, công việc bên ngoài, phát triển xuyên lĩnh vực. Thầy Nghê nói “Thiên Mã nhập Mệnh, không Lộc không phát” — nếu lại hội Lộc Tồn hoặc Hóa Lộc tức là cách giàu “Lộc Mã giao trì”.',
  '天马在迁移宫，主外出有利、远行得财，宜异乡发展。配化禄主异地生财，配煞星则旅途多波折。':
    'Thiên Mã ở cung Thiên Di, chủ ra ngoài có lợi, đi xa đắc tài, nên phát triển nơi đất khách. Phối Hóa Lộc chủ sinh tài nơi xa, phối Sát Tinh thì đường đi nhiều trắc trở.',
  '文昌文曲同入命宫，主聪明俊秀、文采斐然，宜文学、教育、写作、咨询。最忌化忌——昌曲化忌主文书契约暗亏。':
    'Văn Xương, Văn Khúc cùng nhập cung Mệnh, chủ thông minh tuấn tú, văn chương xuất sắc, nên theo văn học, giáo dục, viết lách, tư vấn. Kỵ nhất Hóa Kỵ — Xương Khúc Hóa Kỵ chủ chịu thiệt ngầm về văn thư, khế ước.',
  '文昌文曲同会三方四正，主才华横溢、口才文笔俱佳。宜走需要表达与文采的行业，化科加持则名声大显。':
    'Văn Xương, Văn Khúc đồng hội Tam Phương Tứ Chính, chủ tài hoa dồi dào, tài ăn nói và văn chương đều giỏi. Nên đi theo ngành cần diễn đạt và văn chương, có Hóa Khoa gia trì thì danh tiếng đại hiển.',
  '左辅右弼同会命宫三方四正，主一生贵人不绝、人缘极佳。最宜领导岗位与团队合作型工作。倪师说「辅弼夹命，平生贵人多」——你不是单打独斗的命，要善用人际网络。':
    'Tả Phù, Hữu Bật đồng hội Tam Phương Tứ Chính của cung Mệnh, chủ cả đời quý nhân không dứt, nhân duyên cực tốt. Hợp nhất với vị trí lãnh đạo và công việc theo kiểu hợp tác nhóm. Thầy Nghê nói “Phù Bật giáp Mệnh, bình sinh nhiều quý nhân” — bạn không phải mệnh đơn thương độc mã, phải biết tận dụng mạng lưới quan hệ.',
  '天魁天钺同会命宫三方四正，主"天乙贵人"加持，关键时刻总有贵人提携。倪师说「魁钺夹命，必为贵人」——遇到困难时身边会出现得力相助者，宜主动维护人脉。':
    'Thiên Khôi, Thiên Việt đồng hội Tam Phương Tứ Chính của cung Mệnh, chủ có “Thiên Ất quý nhân” gia trì, lúc then chốt luôn có quý nhân nâng đỡ. Thầy Nghê nói “Khôi Việt giáp Mệnh, ắt là quý nhân” — khi gặp khó khăn, bên cạnh sẽ xuất hiện người đắc lực giúp đỡ, nên chủ động duy trì nhân mạch.',
  '化科 + 化权 同会三方四正，主名权双美——既有学识/名声（科），又有掌控力（权），宜走"专业权威"路线（如医生、律师、教授、技术骨干），名利双收且根基扎实。':
    'Hóa Khoa + Hóa Quyền đồng hội Tam Phương Tứ Chính, chủ danh và quyền đều đẹp — vừa có học thức/danh tiếng (Khoa), vừa có sức kiểm soát (Quyền), nên đi theo hướng “quyền uy chuyên môn” (như bác sĩ, luật sư, giáo sư, nòng cốt kỹ thuật), danh lợi song thu và nền tảng vững chắc.',
};

const DESCRIPTION_RULES: Rule[] = [
  [
    /^贪狼遇(火星|铃星)(同宫|三方会照)，主突发横财、突如其来的机遇。古书云“贪狼遇火铃，必发横财”，但来得快去得也快，宜见好就收。(本盘破格条件已触发，发力打折。)?$/,
    (sha, how, broken) =>
      `Tham Lang gặp ${viStar(sha)} ${how === '同宫' ? 'đồng cung' : 'hội chiếu trong Tam Phương'}, chủ hoạnh tài đột phát, cơ hội ập đến bất ngờ. Cổ thư có câu “Tham Lang gặp Hỏa Linh, ắt phát hoạnh tài”, nhưng đến nhanh đi cũng nhanh, nên biết dừng đúng lúc.${broken ? ' Lá số này đã kích hoạt điều kiện phá cách, sức phát bị giảm.' : ''}`,
  ],
  [
    /^太阳太阴于(.)宫同宫，阴阳平衡，文武兼备。主异性缘佳、事业顺遂、名声远播。(未宫日月双美尤佳。|丑宫日月同宫力量较平。)$/,
    (b, tail) =>
      `Thái Dương, Thái Âm đồng cung tại cung ${viBranch(b)}, Âm Dương cân bằng, văn võ kiêm toàn. Chủ có duyên với người khác giới, sự nghiệp thuận lợi, danh tiếng vang xa. ${tail.startsWith('未') ? 'Ở cung Mùi, Nhật Nguyệt song mỹ, càng tốt.' : 'Ở cung Sửu, Nhật Nguyệt đồng cung, lực khá bình.'}`,
  ],
  [
    /^巨门太阳同(.)宫，太阳化解巨门暗曜，主以口才、传媒、外语、专业立业。寅宫为佳，申宫力减。怕巨门化忌则官非。$/,
    b =>
      `Cự Môn, Thái Dương đồng cung tại cung ${viBranch(b)}, Thái Dương hóa giải ám diệu Cự Môn, chủ lập nghiệp bằng tài ăn nói, truyền thông, ngoại ngữ, chuyên môn. Ở cung Dần là tốt, ở cung Thân lực giảm. Sợ Cự Môn Hóa Kỵ thì mắc quan phi.`,
  ],
  [
    /^(.+)化禄坐命，主生财顺利、人缘佳、机缘多。(武曲化禄属正财，宜实业、金融。|太阴化禄属阴财、不动产。|贪狼化禄属人脉财、桃花财。)?$/,
    (s, extra) => {
      const tail = !extra ? ''
        : extra.startsWith('武曲') ? ' Vũ Khúc Hóa Lộc thuộc chính tài, nên làm thực nghiệp, tài chính.'
        : extra.startsWith('太阴') ? ' Thái Âm Hóa Lộc thuộc âm tài, bất động sản.'
        : ' Tham Lang Hóa Lộc thuộc tài từ nhân mạch, tài Đào Hoa.';
      return `${viStar(s)} Hóa Lộc tọa Mệnh, chủ sinh tài thuận lợi, nhân duyên tốt, nhiều cơ duyên.${tail}`;
    },
  ],
  [
    /^(.+)化忌坐命宫，需留意自身固执、心理障碍或健康隐患，凡事退一步思考。化忌不一定坏，代表此星能量需要特别关注。$/,
    s =>
      `${viStar(s)} Hóa Kỵ tọa cung Mệnh, cần lưu ý sự cố chấp của bản thân, trở ngại tâm lý hoặc nguy cơ tiềm ẩn về sức khỏe, mọi việc nên lùi một bước mà suy xét. Hóa Kỵ không nhất định là xấu, nó cho thấy năng lượng của sao này cần được đặc biệt chú ý.`,
  ],
  [
    /^(.+)化忌坐迁移宫，外出、远行、人际关系易有波折，宜守不宜动。$/,
    s => `${viStar(s)} Hóa Kỵ tọa cung Thiên Di, ra ngoài, đi xa, quan hệ giao tiếp dễ có trắc trở, nên giữ không nên động.`,
  ],
  [
    /^(.+)化禄入财帛宫，主财源畅通、收入稳定。倪师讲化禄是「正财」象征——这个化禄星所代表的能力（\1的核心特质）是你赚钱的主轴。配禄存或天马则财源更广。$/,
    s =>
      `${viStar(s)} Hóa Lộc nhập cung Tài Bạch, chủ nguồn tài thông suốt, thu nhập ổn định. Thầy Nghê giảng Hóa Lộc là biểu tượng của “chính tài” — năng lực mà sao Hóa Lộc này đại diện (đặc chất cốt lõi của ${viStar(s)}) là trục chính để bạn kiếm tiền. Phối Lộc Tồn hoặc Thiên Mã thì nguồn tài càng rộng.`,
  ],
  [
    /^(.+)化权入官禄宫，主事业有掌控力、能担当独当一面的职位。化权代表权力与执行力——\1化权说明你在事业上能成为决策者或核心执行者，宜走管理或技术权威路线。$/,
    s =>
      `${viStar(s)} Hóa Quyền nhập cung Quan Lộc, chủ sự nghiệp có sức kiểm soát, đảm đương được vị trí tự mình gánh vác một phương. Hóa Quyền đại diện cho quyền lực và năng lực thực thi — ${viStar(s)} Hóa Quyền cho thấy trên đường sự nghiệp bạn có thể trở thành người ra quyết định hoặc người thực thi cốt lõi, nên đi theo hướng quản lý hoặc quyền uy kỹ thuật.`,
  ],
  [
    /^(.+)化科入(命|身)宫，主名声、文书、学术运。倪师讲化科是「贵人星」——\1化科带来的是被人看重的特质，宜从事文书、教育、研究、咨询、文创等“以名取利”的方向。$/,
    (s, p) =>
      `${viStar(s)} Hóa Khoa nhập cung ${viPalace(p)}, chủ vận về danh tiếng, văn thư, học thuật. Thầy Nghê giảng Hóa Khoa là “sao quý nhân” — điều ${viStar(s)} Hóa Khoa mang lại là phẩm chất được người khác coi trọng, nên theo các hướng văn thư, giáo dục, nghiên cứu, tư vấn, sáng tạo văn hóa, tức “lấy danh cầu lợi”.`,
  ],
  [
    /^机月同梁需天机、太阴、天同、天梁四星齐会三方四正方为完整真格；本盘只会齐其中 3 颗（(.+)），缺(.+)未会，并非完整真格，力量减一档。文质带谋，宜公职、教研、医疗、服务等靠积累与稳定的行业，关键看缺位星与四化的配合。$/,
    (has, missing) =>
      `Cơ Nguyệt Đồng Lương cần đủ bốn sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng hội Tam Phương Tứ Chính mới là chân cách trọn vẹn; lá số này chỉ hội đủ 3 sao trong đó (${viStarList(has)}), thiếu ${viStarList(missing)} chưa hội, không phải chân cách trọn vẹn, lực giảm một bậc. Văn nhã có mưu, nên làm công chức, giảng dạy, nghiên cứu, y tế, dịch vụ và các ngành dựa vào tích lũy và ổn định; mấu chốt là xem sao còn thiếu phối hợp với Tứ Hóa ra sao.`,
  ],
];

// conditions.required / bonus / breaking
const CONDITIONS: Record<string, string> = {
  '紫微入命': 'Tử Vi nhập Mệnh',
  '左辅右弼同会三方四正': 'Tả Phù, Hữu Bật đồng hội Tam Phương Tứ Chính',
  '再会文昌或文曲': 'Lại hội Văn Xương hoặc Văn Khúc',
  '魁钺贵人加照': 'Khôi Việt quý nhân gia chiếu',
  '紫微化权': 'Tử Vi Hóa Quyền',
  '地空地劫双夹会照（紫微忌空劫）': 'Địa Không, Địa Kiếp song giáp hội chiếu (Tử Vi kỵ Không Kiếp)',
  '紫微天府同入命宫': 'Tử Vi, Thiên Phủ cùng nhập cung Mệnh',
  '紫微天府同宫（不在命宫，会照减力）': 'Tử Vi, Thiên Phủ đồng cung (không ở cung Mệnh, hội chiếu giảm lực)',
  '左辅右弼同会': 'Tả Phù, Hữu Bật đồng hội',
  '再会昌曲': 'Lại hội Xương Khúc',
  '紫府宫坐空劫（破紫府之贵气）': 'Cung Tử Phủ có Không Kiếp tọa (phá quý khí của Tử Phủ)',
  '紫府宫见双煞同坐': 'Cung Tử Phủ có hai Sát Tinh cùng tọa',
  '天府坐命三方': 'Thiên Phủ tọa Tam Phương của Mệnh',
  '天相坐命三方': 'Thiên Tướng tọa Tam Phương của Mệnh',
  '两星不同宫': 'Hai sao không đồng cung',
  '命宫见禄': 'Cung Mệnh gặp Lộc',
  '再会左辅': 'Lại hội Tả Phù',
  '命宫坐煞星': 'Cung Mệnh tọa Sát Tinh',
  '三方四正煞星过多': 'Tam Phương Tứ Chính có quá nhiều Sát Tinh',
  '太阳会命宫三方': 'Thái Dương hội Tam Phương của cung Mệnh',
  '天梁会命宫三方': 'Thiên Lương hội Tam Phương của cung Mệnh',
  '文昌会命宫三方': 'Văn Xương hội Tam Phương của cung Mệnh',
  '禄存会命宫三方': 'Lộc Tồn hội Tam Phương của cung Mệnh',
  '太阳庙旺': 'Thái Dương Miếu Vượng',
  '天梁庙旺': 'Thiên Lương Miếu Vượng',
  '再会化科': 'Lại hội Hóa Khoa',
  '太阳落陷（阳梁失辉）': 'Thái Dương Hãm Địa (Dương Lương mất sáng)',
  '三方煞重': 'Tam Phương nặng Sát Tinh',
  '贪狼会照命宫三方': 'Tham Lang hội chiếu Tam Phương của cung Mệnh',
  '贪狼庙旺': 'Tham Lang Miếu Vượng',
  '贪狼化禄/化权': 'Tham Lang Hóa Lộc/Hóa Quyền',
  '贪狼宫又见羊陀（破横发之力）': 'Cung Tham Lang lại gặp Kình Đà (phá sức hoạnh phát)',
  '贪狼遇空劫（财来财去）': 'Tham Lang gặp Không Kiếp (tiền đến rồi đi)',
  '武曲贪狼同宫（丑/未）': 'Vũ Khúc, Tham Lang đồng cung (Sửu/Mùi)',
  '武曲贪狼对宫拱照': 'Vũ Khúc, Tham Lang ở đối cung củng chiếu',
  '会照命宫三方': 'Hội chiếu Tam Phương của cung Mệnh',
  '再遇火星/铃星（火贪/铃贪叠加）': 'Lại gặp Hỏa Tinh/Linh Tinh (chồng thêm Hỏa Tham/Linh Tham)',
  '武曲化禄': 'Vũ Khúc Hóa Lộc',
  '武贪宫见羊陀': 'Cung Vũ Tham gặp Kình Đà',
  '武贪宫遇空劫': 'Cung Vũ Tham gặp Không Kiếp',
  '七杀、破军、贪狼三星齐入命宫三方四正': 'Thất Sát, Phá Quân, Tham Lang ba sao cùng nhập Tam Phương Tứ Chính của cung Mệnh',
  '三方有化禄或化权（动得有力）': 'Tam Phương có Hóa Lộc hoặc Hóa Quyền (động mà có lực)',
  '辅弼同会（变动中得贵人）': 'Phù Bật đồng hội (trong biến động được quý nhân)',
  '煞星过重（动而无成）': 'Sát Tinh quá nặng (động mà không thành)',
  '命坐空劫（动得辛苦）': 'Mệnh tọa Không Kiếp (động mà vất vả)',
  '天机、太阴、天同、天梁四星齐入命宫三方四正': 'Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương bốn sao cùng nhập Tam Phương Tứ Chính của cung Mệnh',
  '煞星过多（机月同梁忌煞）': 'Quá nhiều Sát Tinh (Cơ Nguyệt Đồng Lương kỵ Sát Tinh)',
  '命宫坐煞': 'Cung Mệnh tọa Sát Tinh',
  '廉贞天相同宫': 'Liêm Trinh, Thiên Tướng đồng cung',
  '见禄存或廉贞化禄': 'Gặp Lộc Tồn hoặc Liêm Trinh Hóa Lộc',
  '左辅会照': 'Tả Phù hội chiếu',
  '廉相宫坐擎羊（廉杀羊倾向）': 'Cung Liêm Tướng tọa Kình Dương (khuynh hướng Liêm Sát Dương)',
  '廉贞化忌': 'Liêm Trinh Hóa Kỵ',
  '武曲七杀同宫': 'Vũ Khúc, Thất Sát đồng cung',
  '武曲化权': 'Vũ Khúc Hóa Quyền',
  '武曲化忌（武曲化忌为财劫之兆）': 'Vũ Khúc Hóa Kỵ (Vũ Khúc Hóa Kỵ là điềm kiếp tài)',
  '武杀宫煞星过多': 'Cung Vũ Sát có quá nhiều Sát Tinh',
  '天同天梁同宫': 'Thiên Đồng, Thiên Lương đồng cung',
  '文昌会照': 'Văn Xương hội chiếu',
  '天同化禄': 'Thiên Đồng Hóa Lộc',
  '煞星同坐': 'Sát Tinh cùng tọa',
  '未宫日月同辉（古书云未宫日月双美）': 'Nhật Nguyệt cùng rạng rỡ ở cung Mùi (cổ thư nói Nhật Nguyệt ở cung Mùi song mỹ)',
  '昌曲会照': 'Xương Khúc hội chiếu',
  '日月宫煞星同坐': 'Cung Nhật Nguyệt có Sát Tinh cùng tọa',
  '太阳太阴分居命宫前后两宫': 'Thái Dương, Thái Âm chia ở hai cung trước sau cung Mệnh',
  '太阴庙旺': 'Thái Âm Miếu Vượng',
  '日月落陷（夹命无光）': 'Nhật Nguyệt Hãm Địa (giáp Mệnh mà không có ánh sáng)',
  '寅宫太阳庙旺，巨门得日光化解是非': 'Ở cung Dần Thái Dương Miếu Vượng, Cự Môn được ánh dương hóa giải thị phi',
  '巨门化禄/化权（口才生财）': 'Cự Môn Hóa Lộc/Hóa Quyền (tài ăn nói sinh tài)',
  '巨门化忌（口舌官非）': 'Cự Môn Hóa Kỵ (khẩu thiệt, quan phi)',
  '申宫太阳偏西，巨门暗曜更显': 'Ở cung Thân Thái Dương đã ngả về tây, ám diệu Cự Môn càng lộ',
  '巨门化禄/化权': 'Cự Môn Hóa Lộc/Hóa Quyền',
  '文昌会照（石中隐玉得明）': 'Văn Xương hội chiếu (Thạch Trung Ẩn Ngọc được sáng)',
  '巨门化忌（玉藏深泥）': 'Cự Môn Hóa Kỵ (ngọc vùi bùn sâu)',
  '命坐煞星': 'Mệnh tọa Sát Tinh',
  '命宫在未为空宫': 'Cung Mệnh tại Mùi là Vô Chính Diệu',
  '对宫丑宫为太阳太阴同度': 'Đối cung tại Sửu có Thái Dương, Thái Âm đồng độ',
  '辅弼相助': 'Phù Bật trợ giúp',
  '煞星会照（珠光黯淡）': 'Sát Tinh hội chiếu (ánh ngọc ảm đạm)',
  '紫微独坐命宫（无天府同坐）': 'Tử Vi độc tọa cung Mệnh (không có Thiên Phủ cùng tọa)',
  '文昌文曲同会': 'Văn Xương, Văn Khúc đồng hội',
  '无辅弼（孤君无臣）': 'Không có Phù Bật (cô quân không bề tôi)',
  '紫微遇空劫（古书最忌）': 'Tử Vi gặp Không Kiếp (cổ thư kỵ nhất)',
  '左辅右弼分居命宫前后两宫': 'Tả Phù, Hữu Bật chia ở hai cung trước sau cung Mệnh',
  '再会魁钺': 'Lại hội Khôi Việt',
  '文昌文曲分居命宫前后两宫': 'Văn Xương, Văn Khúc chia ở hai cung trước sau cung Mệnh',
  '天魁天钺分居命宫前后两宫': 'Thiên Khôi, Thiên Việt chia ở hai cung trước sau cung Mệnh',
  '化禄会照三方四正': 'Hóa Lộc hội chiếu Tam Phương Tứ Chính',
  '禄存会照三方四正': 'Lộc Tồn hội chiếu Tam Phương Tứ Chính',
  '命坐空劫（双禄遇空，财来财去）': 'Mệnh tọa Không Kiếp (Song Lộc gặp Không, tiền đến rồi đi)',
  '化禄、化权、化科三吉化齐会命宫三方四正': 'Hóa Lộc, Hóa Quyền, Hóa Khoa ba cát hóa cùng hội Tam Phương Tứ Chính của cung Mệnh',
  '化忌坐命': 'Hóa Kỵ tọa Mệnh',
  '擎羊陀罗分居命宫前后两宫': 'Kình Dương, Đà La chia ở hai cung trước sau cung Mệnh',
  '火星铃星分居命宫前后两宫': 'Hỏa Tinh, Linh Tinh chia ở hai cung trước sau cung Mệnh',
  '地空地劫分居命宫前后两宫': 'Địa Không, Địa Kiếp chia ở hai cung trước sau cung Mệnh',
  '廉贞、七杀、擎羊三星会照三方四正': 'Liêm Trinh, Thất Sát, Kình Dương ba sao hội chiếu Tam Phương Tứ Chính',
  '巨门、火星、擎羊三星会照三方四正': 'Cự Môn, Hỏa Tinh, Kình Dương ba sao hội chiếu Tam Phương Tứ Chính',
  '铃星、文昌、陀罗、武曲四星会照三方四正': 'Linh Tinh, Văn Xương, Đà La, Vũ Khúc bốn sao hội chiếu Tam Phương Tứ Chính',
  '擎羊于午宫坐命': 'Kình Dương tọa Mệnh tại cung Ngọ',
  '再会七杀或破军（武职大贵）': 'Lại hội Thất Sát hoặc Phá Quân (võ chức đại quý)',
  '魁钺加照': 'Khôi Việt gia chiếu',
  '禄存入命宫': 'Lộc Tồn nhập cung Mệnh',
  '禄存入身宫': 'Lộc Tồn nhập cung Thân',
  '天马入命宫': 'Thiên Mã nhập cung Mệnh',
  '天马入迁移宫': 'Thiên Mã nhập cung Thiên Di',
  '文昌、文曲同会命宫三方四正': 'Văn Xương, Văn Khúc đồng hội Tam Phương Tứ Chính của cung Mệnh',
  '左辅、右弼同会命宫三方四正': 'Tả Phù, Hữu Bật đồng hội Tam Phương Tứ Chính của cung Mệnh',
  '天魁、天钺同会命宫三方四正': 'Thiên Khôi, Thiên Việt đồng hội Tam Phương Tứ Chính của cung Mệnh',
  '化科、化权同会命宫三方四正': 'Hóa Khoa, Hóa Quyền đồng hội Tam Phương Tứ Chính của cung Mệnh',
};

const CONDITION_RULES: Rule[] = [
  [/^贪狼(同宫|会照)(火星|铃星)$/, (how, sha) => `Tham Lang ${how === '同宫' ? 'đồng cung với' : 'hội chiếu'} ${viStar(sha)}`],
  [/^太阳太阴同入(.)宫$/, b => `Thái Dương, Thái Âm cùng nhập cung ${viBranch(b)}`],
  [/^巨门太阳同入(.)宫$/, b => `Cự Môn, Thái Dương cùng nhập cung ${viBranch(b)}`],
  [/^巨门入命于(.)宫$/, b => `Cự Môn nhập Mệnh tại cung ${viBranch(b)}`],
  [/^(.+)化禄坐命宫$/, s => `${viStar(s)} Hóa Lộc tọa cung Mệnh`],
  [/^(.+)化忌坐(命|迁)宫$/, (s, p) => `${viStar(s)} Hóa Kỵ tọa cung ${p === '命' ? 'Mệnh' : 'Thiên Di'}`],
  [/^(.+)化禄入财帛宫$/, s => `${viStar(s)} Hóa Lộc nhập cung Tài Bạch`],
  [/^(.+)化权入官禄宫$/, s => `${viStar(s)} Hóa Quyền nhập cung Quan Lộc`],
  [/^(.+)化科入(命|身)宫$/, (s, p) => `${viStar(s)} Hóa Khoa nhập cung ${viPalace(p)}`],
  [
    /^三方四正会(.+)（机月同梁缺(.+)）$/,
    (has, missing) => `Tam Phương Tứ Chính hội ${viStarList(has)} (Cơ Nguyệt Đồng Lương thiếu ${viStarList(missing)})`,
  ],
];

const SOURCES: Record<string, string> = {
  '《紫微斗数全书》': 'Tử Vi Đẩu Số Toàn Thư',
  '《紫微斗数全书·君臣庆会格》': 'Tử Vi Đẩu Số Toàn Thư · Cách Quân Thần Khánh Hội',
  '《紫微斗数全书·紫府同宫格》': 'Tử Vi Đẩu Số Toàn Thư · Cách Tử Phủ Đồng Cung',
  '《紫微斗数全书·府相朝垣格》': 'Tử Vi Đẩu Số Toàn Thư · Cách Phủ Tướng Triều Viên',
  '《紫微斗数全书·阳梁昌禄格》': 'Tử Vi Đẩu Số Toàn Thư · Cách Dương Lương Xương Lộc',
  '《紫微斗数全书·杀破狼》': 'Tử Vi Đẩu Số Toàn Thư · Sát Phá Tham',
  '《紫微斗数全书·机月同梁格》': 'Tử Vi Đẩu Số Toàn Thư · Cách Cơ Nguyệt Đồng Lương',
  '《紫微斗数全书·日月夹命》': 'Tử Vi Đẩu Số Toàn Thư · Nhật Nguyệt Giáp Mệnh',
  '《紫微斗数全书·巨日同宫》': 'Tử Vi Đẩu Số Toàn Thư · Cự Nhật Đồng Cung',
  '《紫微斗数全书·辅弼夹命》': 'Tử Vi Đẩu Số Toàn Thư · Phù Bật Giáp Mệnh',
  '《紫微斗数全书·双禄朝垣》': 'Tử Vi Đẩu Số Toàn Thư · Song Lộc Triều Viên',
  '《紫微斗数全书·三奇加会》': 'Tử Vi Đẩu Số Toàn Thư · Tam Kỳ Gia Hội',
  '《紫微斗数全书·廉杀羊》': 'Tử Vi Đẩu Số Toàn Thư · Liêm Sát Dương',
  '《紫微斗数全书·禄存星》': 'Tử Vi Đẩu Số Toàn Thư · Sao Lộc Tồn',
  '《紫微斗数全书·天马星》': 'Tử Vi Đẩu Số Toàn Thư · Sao Thiên Mã',
  '《紫微斗数全书·四化论》': 'Tử Vi Đẩu Số Toàn Thư · Luận Tứ Hóa',
  '《紫微斗数全书·文星论》': 'Tử Vi Đẩu Số Toàn Thư · Luận Văn Tinh',
  '《紫微斗数全书·辅弼论》': 'Tử Vi Đẩu Số Toàn Thư · Luận Phù Bật',
  '《紫微斗数全书·魁钺论》': 'Tử Vi Đẩu Số Toàn Thư · Luận Khôi Việt',
  '《紫微斗数全书·四化会照》': 'Tử Vi Đẩu Số Toàn Thư · Tứ Hóa Hội Chiếu',
  '《紫微斗数全集·明珠出海》': 'Tử Vi Đẩu Số Toàn Tập · Minh Châu Xuất Hải',
  '《紫微斗数骨髓赋》': 'Tử Vi Đẩu Số Cốt Tủy Phú',
  '《紫微斗数骨髓赋·石中隐玉》': 'Tử Vi Đẩu Số Cốt Tủy Phú · Thạch Trung Ẩn Ngọc',
  '《紫微斗数骨髓赋·羊陀夹忌》': 'Tử Vi Đẩu Số Cốt Tủy Phú · Kình Đà Giáp Kỵ',
  '《紫微斗数骨髓赋·巨火羊》': 'Tử Vi Đẩu Số Cốt Tủy Phú · Cự Hỏa Dương',
  '《紫微斗数骨髓赋·铃昌陀武》': 'Tử Vi Đẩu Số Cốt Tủy Phú · Linh Xương Đà Vũ',
  '《紫微斗数骨髓赋·马头带箭》': 'Tử Vi Đẩu Số Cốt Tủy Phú · Mã Đầu Đới Tiễn',
};

const localizeCondition = (s: string): string => applyRules(s, CONDITIONS, CONDITION_RULES);

export function localizePattern(p: Pattern): Pattern {
  return {
    ...p,
    name: applyRules(p.name, NAMES, NAME_RULES),
    description: applyRules(p.description, DESCRIPTIONS, DESCRIPTION_RULES),
    palaces: p.palaces.map(viPalace),
    conditions: p.conditions && {
      required: p.conditions.required.map(localizeCondition),
      bonus: p.conditions.bonus?.map(localizeCondition),
      breaking: p.conditions.breaking?.map(localizeCondition),
    },
    source: p.source && (SOURCES[p.source] ?? p.source),
  };
}

// Shared by getMingGongSummary keywords and STAR_DESCRIPTIONS keywords (StarDetailPanel)
const STAR_KEYWORDS: Record<string, string> = {
  '帝王': 'đế vương',
  '尊贵': 'tôn quý',
  '独立': 'độc lập',
  '领导': 'lãnh đạo',
  '智慧': 'trí tuệ',
  '机变': 'cơ biến',
  '善谋': 'giỏi mưu tính',
  '谋略': 'mưu lược',
  '阳刚': 'dương cương',
  '官贵': 'quan quý',
  '慷慨': 'hào phóng',
  '财富': 'tài phú',
  '刚毅': 'cương nghị',
  '果断': 'quả đoán',
  '温和': 'ôn hòa',
  '享福': 'hưởng phúc',
  '随缘': 'tùy duyên',
  '才艺': 'tài nghệ',
  '刑囚': 'hình tù',
  '桃花': 'Đào Hoa',
  '多变': 'hay biến đổi',
  '财库': 'tài khố',
  '稳重': 'vững vàng',
  '保守': 'bảo thủ',
  '柔美': 'nhu mỹ',
  '阴柔': 'âm nhu',
  '细腻': 'tinh tế',
  '欲望': 'dục vọng',
  '多才': 'đa tài',
  '口舌': 'khẩu thiệt',
  '是非': 'thị phi',
  '善辩': 'giỏi biện luận',
  '多思': 'hay suy nghĩ',
  '口才': 'tài ăn nói',
  '辅佐': 'phò tá',
  '行政': 'hành chính',
  '印绶': 'ấn thụ',
  '稳健': 'vững chắc',
  '荫护': 'che chở',
  '医药': 'y dược',
  '长辈': 'bề trên',
  '将星': 'sao tướng',
  '果决': 'quả quyết',
  '孤克': 'cô khắc',
  '开创': 'khai sáng',
  '变动': 'biến động',
  '破旧': 'phá cũ',
  '破坏': 'phá hoại',
};

const STAR_NATURES: Record<string, string> = {
  '帝王星': 'sao đế vương',
  '智慧星': 'sao trí tuệ',
  '贵人星': 'sao quý nhân',
  '财帛星': 'sao tài bạch',
  '福德星': 'sao phúc đức',
  '桃花星': 'sao Đào Hoa',
  '财库星': 'sao tài khố',
  '财富星': 'sao tài phú',
  '是非星': 'sao thị phi',
  '印绶星': 'sao ấn thụ',
  '荫庇星': 'ấm tinh',
  '将帅星': 'sao tướng soái',
  '变动星': 'sao biến động',
  '空宫': 'Vô Chính Diệu',
};

export const viStarKeyword = (k: string): string => STAR_KEYWORDS[k] ?? k;

export function localizeMingGongSummary(s: MingGongSummary): MingGongSummary {
  return {
    stars: s.stars.map(viStar),
    keywords: s.keywords.map(viStarKeyword),
    nature: STAR_NATURES[s.nature] ?? s.nature,
  };
}
