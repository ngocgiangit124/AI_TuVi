'use client';
import { motion, AnimatePresence } from 'framer-motion';
import type { Star } from '@/lib/ziwei/types';
import { STAR_DESCRIPTIONS } from '@/lib/ziwei/constants';
import { viPalace, viSiHua, viStar } from '@/lib/i18n/vi';
import { viStarKeyword } from '@/lib/i18n/patterns-vi';

interface StarDetailPanelProps {
  star: Star | null;
  palaceName?: string;
  onClose: () => void;
}

// 倪海厦体系各星详细解读（参考顾祥弘《飞星紫微斗数全书》及南北山人《紫微斗数全书》）
const STAR_DETAIL: Record<string, {
  niHaixia: string;
  classical: string;
  bestPalace: string;
  worstPalace: string;
  career: string;
  relationship: string;
  wealth: string;
  health: string;
}> = {
  '紫微': {
    niHaixia: 'Thầy Nghê cho rằng Tử Vi là sao hoàng đế, người tọa cung Mệnh có khí chất cô ngạo, thích ở một mình, không thích bị người khác quản thúc. Tử Vi cần Tả Phù, Hữu Bật giáp hai bên mới phát huy được khí chất đế vương, nếu không chỉ là cô quân, giàu mà không quý. Tử Vi ở cung Thìn, Tuất là tốt nhất, cùng Thiên Phủ tạo thành Cách Cục song tinh, tài quan song mỹ, có thể xuất tướng nhập tướng. Tử Vi sợ nhất Hỏa Tinh, Linh Tinh, Kình Dương, Đà La đồng cung, thêm Sát Tinh thì cô quý, có quyền mà không có tài.',
    classical: 'Cổ quyết: “Tử Vi đế tọa lâm Mệnh chủ tôn quý, thống lĩnh chúng tinh, người tọa Mệnh chủ quyền uy hiển đạt.” Nam Bắc Sơn Nhân chú: “Tử Vi thủ Mệnh ở vị trí Thìn, tài quan song mỹ, xuất tướng nhập tướng, vị đến Tam Công; người an Mệnh ở cung Tý, phú quý không bền, về sau không đẹp.”',
    bestPalace: 'Cung Mệnh (Thìn, Tuất), cung Quan Lộc',
    worstPalace: 'Cung Tật Ách, cung Phu Thê',
    career: 'Chính giới, cấp quản lý, khởi nghiệp độc lập; trời sinh khí chất đế vương, thích hợp vị trí lãnh đạo tự mình gánh vác một phương',
    relationship: 'Tình cảm thụ động, lòng tự tôn cao, cần đối phương chủ động, có khuynh hướng cô độc, kết hôn muộn thì tốt',
    wealth: 'Tài vận ổn định, giữ thành giỏi hơn tiến thủ; ở vị trí Thìn, Tuất tài quan song mỹ, hợp nhất với đầu tư kiểu tích lũy',
    health: 'Thuộc Thổ, chú ý tỳ vị, hệ tiêu hóa. Kỵ làm việc quá sức, nên giữ sinh hoạt điều độ',
  },
  '天机': {
    niHaixia: 'Thầy Nghê nói Thiên Cơ là sao tham mưu, sao thông minh nhất, nhưng thông minh lộ ra ngoài thì hại thân. Thiên Cơ Hóa Kỵ phiền phức nhất, đại diện cho thông minh lại bị thông minh làm hại. Thiên Cơ thuộc Mộc, hay biến đổi, linh hoạt, người ở cung Mệnh tư duy nhanh nhạy, nhưng thường nhiều mưu ít quyết, cần rời quê đi xa mới phát triển được; ứng sự cơ biến, tùy cơ ứng biến là đặc chất lớn nhất.',
    classical: 'Cổ quyết: “Làm người sinh ra tinh ranh, tự thích kinh doanh; sao Thiên Cơ thuộc Mộc, buôn bán đều nhiều kiến giải cơ xảo, rời tông tộc ắt xa người thân, cơ mưu ắt xa lìa thân thuộc.” Nam Bắc Sơn Nhân chú: “Thiên Cơ ở đất Miếu Vượng, chủ người sinh ra tinh minh, giỏi sách hoạch; ở đất hãm thì ảm đạm, người người đều lấy buôn bán làm nghề.”',
    bestPalace: 'Cung Mệnh (vị trí Mão), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê',
    career: 'Chuyên gia kỹ thuật, quân sư, nhà nghiên cứu, IT, hoạch định; dùng đầu óc hơn dùng tay chân, thích hợp rời quê phát triển',
    relationship: 'Tình cảm hay thay đổi, suy nghĩ quá nhiều, khó chuyên nhất, nên kết hôn muộn, sau hôn nhân cần học cách buông bớt lo nghĩ',
    wealth: 'Kiếm tiền nhờ trí tuệ và kỹ năng, không giỏi giữ của; lấy chuyên môn kỹ thuật làm nghề thì tài vận ổn định',
    health: 'Thuộc Mộc, chú ý gan mật, hệ thần kinh. Suy nghĩ quá nặng dễ mất ngủ, nên tập tĩnh tâm, thiền định',
  },
  '太阳': {
    niHaixia: 'Thầy Nghê cho rằng Thái Dương là sao đại nam tử chủ nghĩa, từ vị trí Mão đến Ngọ thì nhập Miếu, quang minh chính đại; sau Ngọ dần Hãm Địa. Người Thái Dương tọa Mệnh hào phóng, trọng thể diện, hợp với nam mệnh, nữ mệnh thì quá lấn lướt. Thái Dương đại diện cho cha và bề trên, ở cung Mệnh chủ tính cách hướng ngoại, cởi mở, thích được mọi người nhìn thấy, hợp nhất với công chức hoặc sự nghiệp công chúng. Người Hãm Địa trước siêng sau lười, cô quả lao lực.',
    classical: 'Cổ quyết: “Thái Dương ở Ngọ là nhập Miếu, quang huy rực rỡ, chủ quý hiển, nam mệnh tốt nhất; Hãm Địa thì cô quả lao lực, trước siêng sau lười.” Nam Bắc Sơn Nhân chú: “Thái Dương ở cung Ngọ thủ Mệnh, tài quan song mỹ, xuất tướng nhập tướng; an Mệnh ở vị trí Thìn, trung niên tài quan trở nên đẹp, người sinh năm Ất gặp hung cũng đại lợi.”',
    bestPalace: 'Cung Mệnh (Mão đến Ngọ), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê (nữ mệnh), cung Tật Ách',
    career: 'Công chức, chính giới, quản lý, quan hệ công chúng, giáo dục, truyền thông; thích đứng trước đám đông, hợp với sự nghiệp công chúng',
    relationship: 'Nam mệnh có duyên nhưng trăng hoa, nữ mệnh độc lập, lấn lướt; hôn nhân cần mài giũa, nên tìm bạn đời dịu dàng, chu đáo',
    wealth: 'Tài vận dựa vào nỗ lực, hào phóng hay cho, không giỏi tích lũy; nhập Miếu tài vận vượng, Hãm Địa tài vận thăng trầm',
    health: 'Thuộc Hỏa, chú ý tim, mắt. Ở vị trí Hãm Địa dễ làm việc quá sức, cần chú ý nghỉ ngơi đầy đủ',
  },
  '武曲': {
    niHaixia: 'Thầy Nghê xem Vũ Khúc là chính tinh chủ về tài bạch, cứng rắn không khuất phục, sợ nhất cô khắc. Người Vũ Khúc tọa Mệnh ý chí kiên định, thích hợp tài chính, quản lý tài sản, nhưng trong tình cảm quá thẳng, dễ làm tổn thương người khác. Vũ Khúc Hóa Kỵ phải cẩn thận tai nạn bất ngờ, đổ máu. Vũ Khúc ở Thìn, Tuất, Sửu, Mùi là đất vượng, đồng cung với Thất Sát có thể thành cách Tướng Tài, là Cách Cục tài phú cực tốt.',
    classical: 'Cổ quyết: “Vũ Khúc thuộc Kim, tính cương cường, một đời nhiều hình khắc; thủ Mệnh ở đất vượng, xuất tướng nhập tướng.” Nam Bắc Sơn Nhân chú: “Vũ Khúc thủ Mệnh, Tam Phương Tứ Chính đều cát, tài quan song mỹ, võ chức thêm Phù Bật, Xương Khúc cũng chủ đại quý; đồng cung với Thất Sát là cách Tướng Tài, chủ đại phú.”',
    bestPalace: 'Cung Mệnh (Thìn, Tuất, Sửu, Mùi), cung Tài Bạch, cung Quan Lộc',
    worstPalace: 'Cung Phu Thê',
    career: 'Tài chính, quân đội, cảnh sát, kế toán, kỹ thuật công trình; năng lực thực thi cực mạnh, thích hợp lĩnh vực cần bản lĩnh và quyết đoán',
    relationship: 'Tình cảm thẳng thắn, thiếu lãng mạn, cần bạn đời dịu dàng bổ khuyết, kỵ cô khắc trong tình cảm',
    wealth: 'Bản mệnh là sao tài, tài vận cực mạnh, khả năng quản lý tài chính vượt trội, ở vị trí Thìn, Tuất tài quan song mỹ',
    health: 'Thuộc Kim, chú ý phổi, hệ hô hấp, răng. Khi Hóa Kỵ cần phòng tai nạn bất ngờ, họa đổ máu',
  },
  '天同': {
    niHaixia: 'Thầy Nghê nói Thiên Đồng là phúc tinh, sao lười nhất. Thiên Đồng tọa Mệnh thích hưởng phúc, không thích cạnh tranh, hợp với công việc ổn định. Thiên Đồng đồng cung với Thiên Lương là tốt nhất, vừa hưởng phúc vừa có bảo đảm. Thiên Đồng Hóa Lộc là Hóa Lộc đẹp nhất, chủ cả đời cơm áo không lo, vui vẻ thảnh thơi. Thiên Đồng kỵ Hãm Địa, Hãm Địa thì phúc giảm, cần hóa giải với hung tinh.',
    classical: 'Cổ quyết: “Thiên Đồng là sao phúc đức, người tọa Mệnh hưởng phúc có dư, chủ cả đời tiêu dao tự tại, không phải lao khổ.” Nam Bắc Sơn Nhân chú: “Thiên Đồng thủ Mệnh, Tam Phương không có Sát Tinh, cả đời vui vẻ, cơm áo đầy đủ; thêm Cát Tinh thì phú quý song toàn, người ôn hòa, có nhiều nhân duyên.”',
    bestPalace: 'Cung Mệnh, cung Phúc Đức',
    worstPalace: 'Cung Quan Lộc',
    career: 'Ngành dịch vụ, giải trí, ẩm thực, văn nghệ; hợp nhất với môi trường nhẹ nhàng vui vẻ, kỵ cạnh tranh áp lực cao',
    relationship: 'Tình cảm ôn hòa, không chủ động, dễ thụ động chấp nhận; hôn nhân khá ổn định, tính tình dễ gần',
    wealth: 'Tài vận không nổi bật, dựa vào lương ổn định, không giỏi đầu cơ; cơm áo không lo nhưng khó đại phú',
    health: 'Thuộc Thủy, chú ý thận, bàng quang. Thể chất khá yếu, nên vận động vừa phải, giữ tâm thái thoải mái',
  },
  '廉贞': {
    niHaixia: 'Thầy Nghê cho rằng Liêm Trinh là thứ Đào Hoa, tài hoa dồi dào nhưng tình cảm phức tạp. Liêm Trinh Hóa Kỵ rất hung, đại diện cho kiện tụng, lao ngục, tai nạn. Liêm Trinh đồng cung với Thiên Tướng thì hóa hung thành cát, trở thành cách ấn thụ hành chính. Liêm Trinh Ngũ Hành thuộc Hỏa, tính cách cương liệt, một đời nhiều thăng trầm, tài nghệ xuất chúng; nếu giữ được chính đạo không tà vạy, có thể thành đại khí.',
    classical: 'Cổ quyết: “Liêm Trinh là thứ Đào Hoa, tài hoa dồi dào, tình cảm nhiều trắc trở; Liêm Tướng đồng cung, hóa hung thành cát, thành cách ấn thụ hành chính, có thể nắm quyền bính.” Nam Bắc Sơn Nhân chú: “Liêm Trinh thủ Mệnh, gặp Cát Tinh thì tài hoa xuất chúng, Hóa Kỵ thì kiện tụng đeo đẳng, chủ họa đổ máu, phải đề phòng.”',
    bestPalace: 'Cung Quan Lộc (phối Thiên Tướng), cung Mệnh (khi Hóa Lộc)',
    worstPalace: 'Cung Mệnh (khi Hóa Kỵ), cung Phu Thê',
    career: 'Nghệ thuật, giải trí, pháp luật, công chức (phối Thiên Tướng); tài nghệ xuất chúng, nên giữ nghề chân chính mới lâu bền',
    relationship: 'Nhiều Đào Hoa, tình cảm phức tạp, dễ gặp tranh chấp tình cảm; nên kết hôn muộn, chọn bạn đời chín chắn',
    wealth: 'Tài vận thăng trầm, kiếm tiền nhờ tài nghệ; khi Hóa Kỵ phòng tranh chấp tài chính và rủi ro pháp lý',
    health: 'Thuộc Hỏa, chú ý tim, máu, gan. Khi Hóa Kỵ phòng tai nạn và phẫu thuật, lưu ý họa đổ máu',
  },
  '天府': {
    niHaixia: 'Thầy Nghê nói Thiên Phủ là sao tài khố, sao giữ thành, không chủ động phát tài nhưng giữ được của cải. Người Thiên Phủ tọa Mệnh vững vàng, bảo thủ, nữ mệnh tốt nhất, có thể vượng phu hưng gia. Thiên Phủ thích nhất Tử Vi đồng cung hoặc đối chiếu, tạo thành Cách Cục song tinh, tài quan song mỹ. Thiên Phủ sợ Không Kiếp giáp, gặp Không Kiếp thì tài khố cạn đáy, không giữ được của.',
    classical: 'Cổ quyết: “Thiên Phủ là sao tài khố, người thủ Mệnh vững vàng bảo thủ, chủ tích của vượng nhà; nữ mệnh gặp được, có thể vượng phu ích tử, gia đạo hưng long.” Nam Bắc Sơn Nhân chú: “Thiên Phủ thủ Mệnh, Tam Phương cát tụ, tài quan song mỹ, phú quý an khang; gặp Không Kiếp thì tài khố phá thủng, khó tích của.”',
    bestPalace: 'Cung Mệnh, cung Tài Bạch, cung Điền Trạch',
    worstPalace: 'Cung Thiên Di',
    career: 'Quản lý hành chính, tài vụ, bảo hiểm, bất động sản; cầu ổn định không mạo hiểm, hợp với nghề nghiệp kiểu giữ thành',
    relationship: 'Tình cảm ổn định, chăm lo gia đình, là người bạn đời tốt, coi trọng cảm giác an toàn của gia đình và bảo đảm kinh tế',
    wealth: 'Tài vận cực tốt, khả năng giữ của mạnh, hợp nhất với đầu tư kiểu tích lũy và mua bất động sản',
    health: 'Thuộc Thổ, chú ý tỳ vị, tiêu hóa. Thể chất vững vàng, nên giữ ăn uống và sinh hoạt điều độ',
  },
  '太阴': {
    niHaixia: 'Thầy Nghê cho rằng Thái Âm là sao tài, lợi cho nữ mệnh, cũng là sao đại diện cho mẹ và vợ trong nam mệnh. Thái Âm nhập Miếu thì tài vận cực tốt, ở đất hãm thì tài vận bị cản trở. Thái Âm Hóa Kỵ cần chú ý vấn đề của người thân là nữ giới. Thái Âm ở vị trí Hợi, Tý nhập Miếu, quang huy chiếu trọn, đại diện cho sự tao nhã tinh tế, tình cảm phong phú, coi trọng thế giới nội tâm và đời sống tinh thần.',
    classical: 'Cổ quyết: “Thái Âm là sao tài, lợi nữ mệnh; Hợi, Tý nhập Miếu, quang huy chiếu trọn, tài vận cực vượng; vị trí Ngọ Hãm Địa, u uất đa tình, tài vận bình thường.” Nam Bắc Sơn Nhân chú: “Thái Âm thủ Mệnh, người nhập Miếu tài phú dồi dào, nữ mệnh càng tốt; người Hãm Địa cần nỗ lực mới làm giàu được, tình cảm tinh tế.”',
    bestPalace: 'Cung Mệnh (Hợi, Tý), cung Tài Bạch',
    worstPalace: 'Cung Mệnh (vị trí Ngọ, đất hãm)',
    career: 'Tài vụ, tài chính, bất động sản, nghệ thuật, giáo dục; tinh tế kiên nhẫn, hợp với nghề cần thẩm mỹ và sự dịu dàng',
    relationship: 'Tình cảm dịu dàng tinh tế, coi trọng cảm nhận nội tâm, cần mối quan hệ ổn định có cảm giác an toàn',
    wealth: 'Nhập Miếu tài vận cực vượng, Hãm Địa thì cần nỗ lực; quản lý tiền cẩn thận, giỏi tích lũy, không giỏi mạo hiểm',
    health: 'Thuộc Thủy, chú ý thận, tử cung (nữ mệnh). Dao động cảm xúc ảnh hưởng sức khỏe, nên giữ tâm trạng thư thái',
  },
  '贪狼': {
    niHaixia: 'Thầy Nghê nói Tham Lang là sao đa tài đa nghệ nhất, Đào Hoa nặng nhất. Tham Lang Hóa Lộc nhập Mệnh thì sức hút tỏa khắp, ai gặp cũng mến. Tham Lang thuộc sao phát muộn, từ trung niên về sau mới thật sự phát đạt. Tham Lang ở vị trí Dần, Thân nhập Miếu là tốt nhất, Đào Hoa vượng, tài nghệ vượt trội; sau khi Hóa Lộc tài vận đại phát, nhưng nếu gặp Không Kiếp thì cả đời nhiều trắc trở, khó tụ tài.',
    classical: 'Cổ quyết: “Tham Lang phát phúc hanh thông, đa tài đa nghệ, Đào Hoa nặng nhất; nhưng khó qua tuổi ba mươi, người phát muộn nhiều. Hãm Địa gặp Sát Tinh trái lại thành cát, đó là lý của Tham Lang Hãm Địa.” Nam Bắc Sơn Nhân chú: “Tham Lang thủ Mệnh, gặp cát thì phúc lộc thọ nhiều, phát phúc hanh thông; nhưng lâu về sau không được chết lành, nên phải tu thân dưỡng đức mới có thể chết lành.”',
    bestPalace: 'Cung Mệnh (Hóa Lộc), cung Phúc Đức, cung Thiên Di',
    worstPalace: 'Cung Tật Ách',
    career: 'Nghệ thuật, giải trí, quan hệ công chúng, bán hàng, Phong Thủy và Ngũ Thuật; dựa vào nhân mạch và tài nghệ, thuộc kiểu đa tài đa nghệ',
    relationship: 'Đào Hoa cực vượng, tình cảm đa dạng, nên kết hôn muộn, sau hôn nhân cần kiềm chế Đào Hoa mới bạc đầu bên nhau',
    wealth: 'Kiếm tiền nhờ nhân mạch và tài nghệ, tài vận từ trung vãn niên mới ổn định, sau khi Hóa Lộc nguồn tài rộng mở, thời trẻ nên giữ vững',
    health: 'Thuộc Mộc (kèm Thủy), chú ý gan, thận. Đào Hoa quá vượng dễ hao tổn tinh lực, nên tiết chế, điều dưỡng',
  },
  '巨门': {
    niHaixia: 'Thầy Nghê cho rằng Cự Môn là sao khẩu thiệt thị phi, nhưng sau khi Hóa Lộc, Hóa Quyền thì chuyển cát, trở thành Cách Cục kiếm tiền bằng tài ăn nói. Cự Môn tọa Mệnh đa nghi, giỏi biện luận, thích hợp làm luật sư, giáo viên, bán hàng. Cự Môn kỵ nhất Hóa Kỵ, chủ khẩu thiệt thị phi không dứt, thậm chí dẫn đến kiện tụng. Cự Môn ở vị trí Tý, Ngọ khá tốt, tài ăn nói giỏi, chủ lập thân bằng lời nói.',
    classical: 'Cổ quyết: “Cự Môn là ám diệu, chủ khẩu thiệt thị phi; Hóa Lộc, Quyền thì chuyển thành mưu sinh bằng tài ăn nói, chủ phú quý.” Nam Bắc Sơn Nhân chú: “Cự Môn thủ Mệnh, gặp Hóa Lộc, Quyền, người lấy miệng lưỡi làm nghề đại cát; Hóa Kỵ thì khẩu thiệt liên lụy, kiện tụng đeo đẳng, cần cẩn trọng lời nói.”',
    bestPalace: 'Cung Quan Lộc (Hóa Lộc, Quyền), cung Mệnh (Tý, Ngọ)',
    worstPalace: 'Cung Phu Thê, cung Tật Ách (Hóa Kỵ)',
    career: 'Luật sư, giáo viên, bán hàng, người dẫn chương trình, chuyên gia đàm phán; tài ăn nói là năng lực cạnh tranh cốt lõi',
    relationship: 'Đa nghi đa lự, dễ nghĩ quá nhiều; giao tiếp là chìa khóa của hôn nhân, cần chọn bạn đời kiên nhẫn',
    wealth: 'Kiếm tiền nhờ tài ăn nói và kỹ năng chuyên môn, sau khi Hóa Lộc tài vận khá tốt, Hóa Kỵ phòng tranh chấp tài chính, khẩu thiệt liên lụy',
    health: 'Thuộc Thủy, chú ý thận, tai, khoang miệng. Lo nghĩ nhiều dễ hại thân, nên học cách thư giãn, giảm áp lực',
  },
  '天相': {
    niHaixia: 'Thầy Nghê nói Thiên Tướng là sao ấn thụ, phụ trách hành chính, thứ vụ. Người Thiên Tướng tọa Mệnh khuôn phép đúng mực, thích hợp công chức, hành chính. Thiên Tướng cần nhất có sao mạnh phối hợp mới phát huy được, một mình tọa Mệnh thì khá bình đạm. Thiên Tướng thích nhất có Liêm Trinh bên cạnh, tạo thành cách Liêm Tướng, có thể chủ đại quyền hành chính; sợ nhất Phá Quân đồng cung, tạo thành cách Hình Kỵ Giáp Ấn, chủ hung hiểm.',
    classical: 'Cổ quyết: “Thiên Tướng là sao ấn thụ, chủ hành chính, thứ vụ; Liêm Tướng đồng cung, hóa hung thành cát, nắm đại quyền hành chính.” Nam Bắc Sơn Nhân chú: “Thiên Tướng thủ Mệnh, khuôn phép đúng mực, thích hợp công chức; được Liêm Trinh phối hợp, có thể thành rường cột quốc gia; Phá Quân cùng thủ thì khó tránh hình khắc.”',
    bestPalace: 'Cung Quan Lộc, cung Mệnh (phối Liêm Trinh)',
    worstPalace: 'Cung Tài Bạch, cung Mệnh (phối Phá Quân thì thành Hình Kỵ Giáp Ấn)',
    career: 'Công chức, quản lý hành chính, thư ký, trợ lý; giỏi vai trò phụ trợ, hỗ trợ, cần có sao mạnh dẫn đường',
    relationship: 'Tình cảm ổn định, trung hậu thật thà, là người bạn đời tốt, nhưng cần đối phương định hướng',
    wealth: 'Tài vận bình ổn, tích lũy từ lương, không thích hợp đầu tư mạo hiểm, hợp nhất với quản lý tài chính kiểu giữ thành',
    health: 'Thuộc Thủy, chú ý thận, hệ bạch huyết. Thể chất trung bình, nên giữ thói quen sinh hoạt điều độ',
  },
  '天梁': {
    niHaixia: 'Thầy Nghê cho rằng Thiên Lương là ấm tinh, có thể che chở người khác, cũng đại diện cho y dược, tôn giáo. Người Thiên Lương tọa Mệnh có duyên với bề trên, thời trẻ nhiều gian nan, về già hưởng phúc. Thiên Lương sợ nhất Hóa Kỵ, đại diện cho bề trên hoặc sức khỏe có vấn đề. Thiên Lương đồng cung với Thái Dương là tốt nhất, Nhật Nguyệt tịnh minh, quý nhân che chở, cả đời có quý nhân giúp đỡ, cuối cùng được bình an.',
    classical: 'Cổ quyết: “Thiên Lương là ấm tinh, chủ che chở bảo hộ; người tọa Mệnh có duyên với bề trên, thời trẻ chịu rèn luyện, về già hưởng thanh phúc.” Nam Bắc Sơn Nhân chú: “Thiên Lương thủ Mệnh, phải gặp Cát Tinh mới phát đạt; gặp Thái Dương đồng cung, Nhật Nguyệt tịnh minh, chủ quý hiển, cả đời nhiều quý nhân giúp đỡ.”',
    bestPalace: 'Cung Mệnh, cung Phụ Mẫu, cung Phúc Đức',
    worstPalace: 'Cung Mệnh (khi Hóa Kỵ), cung Tài Bạch',
    career: 'Y tế, tôn giáo, pháp luật, công tác xã hội, từ thiện; thích giúp người, có tấm lòng che chở mọi người',
    relationship: 'Tình cảm thường với người chênh lệch tuổi khá lớn, hoặc duyên đến muộn, cần kiên nhẫn chờ đợi mới có lương duyên',
    wealth: 'Tài vận nhờ quý nhân giúp đỡ, thời trẻ tài vận không tốt, về già tài vận mới vững, nên giữ không nên xông',
    health: 'Thuộc Thổ, chú ý tỳ vị, xương cốt. Cần coi trọng chăm sóc sức khỏe tuổi già, nên sớm dự phòng, điều dưỡng',
  },
  '七杀': {
    niHaixia: 'Thầy Nghê nói Thất Sát là sao tướng quân, quả quyết, xung lực mạnh, nhưng có tính cô khắc. Thất Sát tọa Mệnh phải có Phụ Tinh hóa giải tính cô, nếu không lục thân duyên mỏng. Thất Sát đồng cung với Vũ Khúc là cách Tướng Tài, cực tốt. Thất Sát sợ nhất Trúc La Tam Hạn (Kình Đà, Hỏa Linh cùng chiếu), chủ đại hung, phải phòng tai nạn bất ngờ. Thất Sát sau khi Hóa Lộc trái lại thành cát, có thể thành bậc đại tướng.',
    classical: 'Cổ quyết: “Thất Sát là sao tướng quân, quả quyết, xung lực mạnh; người thủ Mệnh tính cô khắc nặng, lục thân duyên mỏng.” Nam Bắc Sơn Nhân chú: “Thất Sát thủ Mệnh, tam hợp cát tụ thì đại quý; gặp Trúc La Tam Hạn (Kình Đà, Hỏa Linh), chủ đại hung, phòng tai họa bất ngờ, phòng hình khắc.”',
    bestPalace: 'Cung Mệnh (có Phụ Tinh), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê, cung Phụ Mẫu',
    career: 'Quân đội, cảnh sát, khởi nghiệp, giao dịch tài chính, các lĩnh vực tự gánh vác một phương; cần quyết đoán nhanh và bản lĩnh',
    relationship: 'Tình cảm cô khắc, khó tìm bạn đời phù hợp, cần người bao dung được cá tính mạnh, nên kết hôn muộn',
    wealth: 'Tài vận dao động lớn, có cơ hội đại phú, cũng có đại thăng đại trầm; Vũ Khúc đồng cung có thể thành cách Tướng Tài đại quý',
    health: 'Thuộc Kim, chú ý phổi, đại tràng. Tính nóng nảy dễ hại thân, nên học cách kiểm soát cảm xúc và tu thân',
  },
  '破军': {
    niHaixia: 'Thầy Nghê nói Phá Quân là sao giỏi phá cũ lập mới nhất, cũng là một trong những sao cô khắc nhất. Phá Quân sau khi Hóa Lộc mới trở nên tốt, đại diện cho việc có thể phá rồi lập. Phá Quân tọa Mệnh lục thân duyên mỏng, nhưng năng lực khai sáng cực mạnh. Phá Quân thích hợp nhất với cải cách, đổi mới; khi Hóa Lộc tài vận chuyển vượng, một phá một lập, cuối cùng có thể thành tựu sự nghiệp.',
    classical: 'Cổ quyết: “Phá Quân là sao giỏi phá cũ lập mới nhất, người tọa Mệnh cô khắc, lục thân duyên mỏng, nhưng năng lực khai sáng siêu mạnh; sau khi Hóa Lộc phá rồi lập, có thể thành đại nghiệp.” Nam Bắc Sơn Nhân chú: “Phá Quân thủ Mệnh, một đời nhiều trắc trở; người Hóa Lộc, sau khi phá tài mới có thể gây dựng lại, tài vận cuối cùng chuyển tốt, chủ thành tựu về già.”',
    bestPalace: 'Cung Quan Lộc (Hóa Lộc), cung Thiên Di',
    worstPalace: 'Cung Phu Thê, cung Phụ Mẫu',
    career: 'Sự nghiệp kiểu khai sáng, quân đội, cảnh sát, cải cách, quản trị thay đổi; hợp với công việc tiên phong không ngừng mở lĩnh vực mới',
    relationship: 'Tình cảm nhiều trắc trở, hợp tan bất định, lục thân duyên mỏng, cần chọn bạn đời độc lập và bao dung',
    wealth: 'Tài vận thăng trầm lớn, sau khi Hóa Lộc tài vận chuyển tốt; giữ thành thì tài lui, cần không ngừng mở cục diện mới mới tích được của',
    health: 'Thuộc Thủy, chú ý thận, bàng quang, hệ sinh dục. Thể chất lên xuống, nên giữ thói quen vận động đều đặn',
  },
};

const levelConfig = {
  major: { label: 'Chính Tinh', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
  lucky: { label: 'Cát Tinh', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
  sha:   { label: 'Sát Tinh', color: 'text-red-400 border-red-500/30 bg-red-500/10' },
  minor: { label: 'Tạp Tinh', color: 'text-slate-400 border-slate-500/25 bg-slate-500/10' },
};

const siHuaColors: Record<string, string> = {
  '禄': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  '权': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  '科': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  '忌': 'text-red-400 bg-red-500/10 border-red-500/30',
};

const ELEMENT_VI: Record<string, string> = { '金': 'Kim', '木': 'Mộc', '水': 'Thủy', '火': 'Hỏa', '土': 'Thổ' };
const NATURE_VI: Record<string, string> = {
  '吉星': 'Cát Tinh',
  '凶星': 'Hung Tinh',
  '中性': 'Trung tính',
  '中性偏吉': 'Trung tính thiên cát',
  '凶中带吉': 'Trong hung có cát',
};
const BRIGHTNESS_TAG_VI: Record<string, string> = { '庙旺': 'Miếu Vượng', '落陷': 'Hãm Địa', '平和': 'Bình Hòa' };

export default function StarDetailPanel({ star, palaceName, onClose }: StarDetailPanelProps) {
  const desc = star ? STAR_DESCRIPTIONS[star.name] : null;
  const detail = star ? STAR_DETAIL[star.name] : null;
  const typeConfig = star ? levelConfig[star.type] : null;

  return (
    <AnimatePresence>
      {star && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
          className="card-glass rounded-xl overflow-hidden"
        >
          {/* 标题栏 */}
          <div className="flex items-center justify-between gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl font-bold" style={{ color: 'var(--t-gold)' }}>{viStar(star.name)}</span>
              {typeConfig && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border whitespace-nowrap ${typeConfig.color}`}>
                  {typeConfig.label}
                </span>
              )}
              {star.siHua && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium whitespace-nowrap ${siHuaColors[star.siHua] || ''}`}>
                  Hóa {viSiHua(star.siHua)}
                </span>
              )}
            </div>
            <button onClick={onClose} className="transition-colors text-lg leading-none" style={{ color: 'var(--t-faint)' }}>×</button>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto max-h-[560px]">
            {/* 基本信息 */}
            {desc && (
              <div className="flex flex-wrap gap-1.5">
                {[
                  `Ngũ Hành · ${ELEMENT_VI[desc.element] ?? desc.element}`,
                  `Tính chất · ${NATURE_VI[desc.nature] ?? desc.nature}`,
                  ...(palaceName ? [`Vị trí · ${viPalace(palaceName)}`] : []),
                  ...(star.brightness ? [star.brightness === 'bright' ? '庙旺' : star.brightness === 'dim' ? '落陷' : '平和'] : []),
                ].map(tag => (
                  <div key={tag} className="text-[10px] px-2 py-1 rounded-full"
                    style={{
                      border: '1px solid var(--t-border)',
                      color: tag.includes('庙旺') ? '#eab308' : tag.includes('落陷') ? '#ef4444' : 'var(--t-text2)',
                    }}>
                    {BRIGHTNESS_TAG_VI[tag] ?? tag}
                  </div>
                ))}
              </div>
            )}

            {/* 关键词 */}
            {desc && (
              <div>
                <div className="text-[10px] tracking-widest mb-1.5" style={{ color: 'var(--t-faint)' }}>Đặc điểm của sao</div>
                <div className="flex flex-wrap gap-1.5">
                  {desc.keywords.split('·').map(k => (
                    <span key={k} className="text-[11px] px-2 py-0.5 rounded-full"
                      style={{ color: 'var(--t-gold)', border: '1px solid rgba(212,168,67,0.2)', background: 'rgba(212,168,67,0.06)' }}>
                      {viStarKeyword(k.trim())}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 古书原文 */}
            {detail && (
              <div className="rounded-xl p-3" style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.12)' }}>
                <div className="text-[10px] tracking-widest mb-1.5 flex items-center gap-1" style={{ color: 'var(--t-gold)', opacity: 0.7 }}>
                  Nguyên văn cổ thư
                </div>
                <p className="text-[11px] leading-relaxed italic" style={{ color: 'var(--t-gold)', opacity: 0.8 }}>{detail.classical}</p>
              </div>
            )}

            {/* 倪海厦解读 */}
            {detail && (
              <>
                <div>
                  <div className="text-[10px] tracking-widest mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--t-faint)' }}>
                    <span className="w-3 h-px inline-block" style={{ background: 'var(--t-border-acc)' }} />
                    Luận giải của thầy Nghê Hải Hạ
                    <span className="w-3 h-px inline-block" style={{ background: 'var(--t-border-acc)' }} />
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--t-text2)' }}>{detail.niHaixia}</p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    { label: 'Hướng sự nghiệp', value: detail.career, icon: '◈' },
                    { label: 'Đặc điểm tình cảm', value: detail.relationship, icon: '♡' },
                    { label: 'Phân tích tài vận', value: detail.wealth, icon: '◆' },
                    { label: 'Lưu ý sức khỏe', value: detail.health, icon: '☯' },
                  ].map(item => (
                    <div key={item.label} className="card-inner rounded-lg p-3">
                      <div className="text-[10px] mb-1 flex items-center gap-1" style={{ color: 'var(--t-faint)' }}>
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: 'var(--t-text2)' }}>{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="text-[10px] p-2.5 rounded-lg" style={{ border: '1px solid rgba(74,222,128,0.15)', background: 'rgba(74,222,128,0.05)' }}>
                    <div className="text-emerald-500 mb-0.5 font-medium">Cung vị tốt nhất</div>
                    <div className="text-emerald-500/70">{detail.bestPalace}</div>
                  </div>
                  <div className="text-[10px] p-2.5 rounded-lg" style={{ border: '1px solid rgba(248,113,113,0.15)', background: 'rgba(248,113,113,0.05)' }}>
                    <div className="text-red-500 mb-0.5 font-medium">Cung vị cần lưu ý</div>
                    <div className="text-red-500/70">{detail.worstPalace}</div>
                  </div>
                </div>
              </>
            )}

            {/* 辅星/煞星说明 */}
            {!detail && star.type !== 'major' && (
              <div className="text-xs leading-relaxed" style={{ color: 'var(--t-text2)' }}>
                {star.type === 'lucky' && (
                  <>
                    {star.name === '文昌' && 'Văn Xương nhập cung, chủ học hành thi cử thuận lợi, văn thư ấn giám có lợi, nên làm công việc liên quan đến chữ nghĩa. Cổ quyết: “Văn Xương khoa giáp, chủ văn chương hiển đạt, gặp thi ắt đỗ.”'}
                    {star.name === '文曲' && 'Văn Khúc nhập cung, chủ tài nghệ xuất chúng, ăn nói giỏi, khéo diễn đạt, thiên phú nghệ thuật mạnh. Cổ quyết: “Văn Khúc là sao tài nghệ, văn võ đều giỏi, tài ăn nói hơn người.”'}
                    {star.name === '左辅' && 'Tả Phù nhập cung, chủ quý nhân giúp đỡ, có người nâng đỡ, các việc thuộc cung vị này được ủng hộ thiện ý. Cổ quyết: “Tả Phù là sao trợ lực, tọa Mệnh thì nhiều quý nhân, gặp hung hóa cát.”'}
                    {star.name === '右弼' && 'Hữu Bật nhập cung, chủ quý nhân giúp đỡ, nhiều quý nhân nữ giới, các việc thuộc cung vị này có người hỗ trợ. Cổ quyết: “Hữu Bật là sao âm trợ, nhiều quý nhân nữ giới, hóa hiểm thành an.”'}
                    {star.name === '天魁' && 'Thiên Khôi nhập cung, chủ quý nhân sinh ban ngày, nhiều quý nhân nam giới, có sức gặp hung hóa cát. Cổ quyết: “Thiên Khôi là Thiên Ất quý nhân, gặp được ắt có quý nhân nâng đỡ.”'}
                    {star.name === '天钺' && 'Thiên Việt nhập cung, chủ quý nhân sinh ban đêm, nhiều quý nhân nữ giới, tăng thêm khí cát tường. Cổ quyết: “Thiên Việt là Ngọc Đường quý nhân, chủ âm trợ, nhiều quý nhân nữ.”'}
                    {star.name === '禄存' && 'Lộc Tồn nhập cung, chủ giữ thành tài lộc, cung vị này có tài khí, nhưng thuộc tài vận kiểu bảo thủ. Cổ quyết: “Lộc Tồn là sao tài lộc, chủ giữ của có dư, tiến tài vững chắc.”'}
                    {star.name === '天马' && 'Thiên Mã nhập cung, chủ bôn ba dao động, trong động cầu tài, nên chủ động ra tay, không nên ôm cây đợi thỏ. Cổ quyết: “Thiên Mã chủ động, gặp Lộc thì tài lộc song toàn, trong động sinh tài.”'}
                  </>
                )}
                {star.type === 'sha' && (
                  <>
                    {star.name === '地空' && 'Địa Không nhập cung, chủ các việc thuộc cung vị này có cảm giác hụt hẫng, tinh thần hao tán, nên chú ý sức khỏe tâm lý. Cổ quyết: “Địa Không chủ hư hao, nhập cung Mệnh thì thường tinh thần mơ hồ, phải phòng mơ tưởng viển vông.”'}
                    {star.name === '地劫' && 'Địa Kiếp nhập cung, chủ các việc thuộc cung vị này có tổn thất bất ngờ, tài vật cần thận trọng, phòng tiểu nhân. Cổ quyết: “Địa Kiếp chủ kiếp tài, nhập cung Mệnh thì tài vận bị tổn, phòng mất mát bất ngờ.”'}
                    {star.name === '火星' && 'Hỏa Tinh nhập cung, chủ các việc thuộc cung vị này nóng vội bốc đồng, cảm xúc dao động, nhưng nếu gặp Tham Lang trái lại thành cát. Cổ quyết: “Hỏa Tinh chủ nóng nảy, nhưng gặp Tham Lang đồng cung, trái lại thành cách Hỏa Tham, chủ bạo phát.”'}
                    {star.name === '铃星' && 'Linh Tinh nhập cung, chủ các việc thuộc cung vị này có trở ngại ngầm, phòng tiểu nhân sau lưng, mọi việc nên kín đáo. Cổ quyết: “Linh Tinh chủ sát khí ngầm, người nhập Mệnh thường bị địch ngầm, phải phòng thị phi sau lưng.”'}
                    {star.name === '擎羊' && 'Kình Dương nhập cung, chủ hình khắc, các việc thuộc cung vị này nhiều trắc trở, có họa đổ máu hoặc tai nạn. Cổ quyết: “Kình Dương là sao hình khắc, nhập cung Mệnh thì nhiều hình khắc, phải phòng tai nạn, đổ máu.”'}
                    {star.name === '陀罗' && 'Đà La nhập cung, chủ thị phi đeo bám, các việc thuộc cung vị này kéo dài không dứt, mọi việc nên chuẩn bị sớm. Cổ quyết: “Đà La chủ thị phi trì trệ, nhập cung Mệnh thì làm việc chậm chạp, phải phòng dây dưa không rõ ràng.”'}
                  </>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
