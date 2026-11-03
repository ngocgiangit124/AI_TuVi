'use client';
import { motion } from 'framer-motion';
import type { FamousPerson } from '@/lib/ziwei/famous';

const CATEGORY_COLORS: Record<string, string> = {
  '商业': '#4ade80',
  '文艺': '#c084fc',
  '科技': '#60a5fa',
  '体育': '#fb923c',
  '历史': '#facc15',
};

const CATEGORY_LABELS_VI: Record<string, string> = {
  '商业': 'Kinh doanh',
  '文艺': 'Văn nghệ',
  '科技': 'Công nghệ',
  '体育': 'Thể thao',
  '历史': 'Lịch sử',
};

const FAMOUS_VI: Record<string, { name: string; description: string; notable: string }> = {
  'ma-yun': { name: 'Jack Ma', description: 'Người sáng lập Alibaba', notable: 'Lá số cho thấy năng lực phá cách và tái thiết cực mạnh, các sao ở cung Quan Lộc tương ứng rất rõ với đế chế kinh doanh Internet' },
  'li-jiacheng': { name: 'Lý Gia Thành', description: 'Siêu tỷ phú Hồng Kông, người sáng lập tập đoàn CK Hutchison', notable: 'Tứ Hóa ở cung Tài Bạch là trường hợp tuyệt vời để nghiên cứu lá số của người giàu nhất phương Đông; Lộc Tồn giữ của, càng tích càng dày' },
  'ren-zhengfei': { name: 'Nhậm Chính Phi', description: 'Người sáng lập Huawei', notable: 'Cách Cục Thất Sát nhập Mệnh, cả đời đi ngược gió, càng bị chèn ép càng mạnh mẽ; là giáo trình sống cho lý thuyết Thất Sát của Thầy Nghê' },
  'zhang-ailing': { name: 'Trương Ái Linh', description: 'Bậc thầy văn học hiện đại Trung Quốc', notable: 'Tổ hợp sao cô độc trong lá số tạo nên sự đối chiếu kỳ lạ với đời tình cảm huyền thoại và thành tựu văn học của bà' },
  'jay-chou': { name: 'Châu Kiệt Luân', description: 'Thiên vương nhạc pop Hoa ngữ', notable: 'Tổ hợp sao Văn Khúc và Tham Lang, mệnh trời sinh đa tài; lá số lý giải vì sao anh có thể trải rộng qua nhiều phong cách âm nhạc' },
  'wang-fei': { name: 'Vương Phi', description: 'Nữ ca sĩ mang màu sắc huyền thoại nhất làng nhạc Hoa ngữ', notable: 'Các sao ở cung Phu Thê tương ứng rất rõ với hai cuộc hôn nhân huyền thoại của cô; Cách Cục tình cảm có giá trị nghiên cứu rất cao' },
  'lin-zhiling': { name: 'Lâm Chí Linh', description: 'Người mẫu nổi tiếng, diễn viên Đài Loan', notable: 'Hình mẫu sắc đẹp nữ giới với Thái Âm thủ Mệnh; lá số ấn chứng hoàn hảo luận điểm của Thầy Nghê: "Thái Âm nhập Mệnh, con gái đẹp nhất"' },
  'steve-jobs': { name: 'Steve Jobs', description: 'Đồng sáng lập Apple', notable: 'Cách Cục Phá Quân nhập Mệnh, bị cha mẹ ruột bỏ rơi rồi lại lập nên đế chế Apple; lá số điển hình của phá rồi mới lập' },
  'elon-musk': { name: 'Elon Musk', description: 'Người sáng lập Tesla, SpaceX', notable: 'Biểu hiện tột cùng của Cách Cục Sát Phá Tham, sao Dịch Mã trong lá số vượng thịnh, cả đời thay đổi ranh giới tương lai của nhân loại' },
  'yao-ming': { name: 'Diêu Minh', description: 'Trung phong huyền thoại NBA, người đại diện cho bóng rổ Trung Quốc', notable: 'Thiên Lương thủ Mệnh, cao lớn uy nghiêm; tinh tượng cung Quan Lộc rất khớp với thành tựu nghề nghiệp của ông' },
  'li-na': { name: 'Lý Na', description: 'Nhà vô địch Grand Slam quần vợt Trung Quốc', notable: 'Thất Sát hóa khí, số mệnh định sẵn phải cạnh tranh với người; Đại Hạn, Lưu Niên tương ứng chính xác với thời điểm vô địch Pháp mở rộng' },
};

export default function FamousPersonCard({ person }: { person: FamousPerson }) {
  const catColor = CATEGORY_COLORS[person.category] ?? '#d4a843';
  const vi = FAMOUS_VI[person.id];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="card-glass rounded-xl p-4 mb-4"
      style={{
        border: `1px solid ${catColor}40`,
        background: `linear-gradient(135deg, ${catColor}06, transparent 60%)`,
      }}
    >
      <div className="text-[10px] tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--t-faint)' }}>
        <span style={{ color: catColor, opacity: 0.9, fontSize: '12px' }}>★</span>
        Lá số người nổi tiếng
        <span className="text-[9px] px-2 py-0.5 rounded-full ml-auto"
          style={{ color: catColor, background: catColor + '18', border: `1px solid ${catColor}40` }}>
          {CATEGORY_LABELS_VI[person.category] ?? person.category}
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-base font-semibold" style={{ color: 'var(--t-text1)', letterSpacing: '0.02em' }}>
            {vi?.name ?? person.name}
          </span>
          <span className="text-[11px]" style={{ color: 'var(--t-faint)' }}>
            Năm {person.year} · {person.gender === 'male' ? 'Nam mệnh' : 'Nữ mệnh'}
          </span>
        </div>

        <div className="text-[11px]" style={{ color: 'var(--t-text2)', opacity: 0.85 }}>
          {vi?.description ?? person.description}
        </div>

        <div className="text-[11px] leading-relaxed px-3 py-2.5 rounded-md"
          style={{
            color: 'var(--t-text2)',
            background: catColor + '0c',
            border: `1px solid ${catColor}25`,
          }}>
          <span style={{ color: catColor, fontWeight: 600, marginRight: '4px' }}>Điểm nổi bật của lá số:</span>
          {vi?.notable ?? person.notable}
        </div>

        <div className="text-[10px] mt-2" style={{ color: 'var(--t-faint)', opacity: 0.6, lineHeight: 1.5 }}>
          ⚠️ Giờ sinh là giá trị ước tính từ tài liệu công khai, chỉ để tham khảo nghiên cứu. Phần luận giải AI bên dưới được tạo tự động dựa trên lá số này, không liên quan đến bản thân người này.
        </div>
      </div>
    </motion.div>
  );
}
