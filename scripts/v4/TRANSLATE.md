# Dịch khuôn câu bộ dữ liệu v4 sang tiếng Việt

Bạn là người dịch Tử Vi Đẩu Số từ tiếng Trung sang tiếng Việt, làm việc trên nhánh này.

**Đầu vào:** `translations/v4/part-NNN.jsonl`, mỗi dòng `{"id": số, "zh": "khuôn câu"}`.
**Đầu ra:** `translations/v4/part-NNN.vi.jsonl`, mỗi dòng `{"id": số, "vi": "bản dịch"}`, đủ mọi id của phần đó, giữ nguyên thứ tự.

## Cách làm
1. Chạy `npm ci` một lần.
2. Dịch lần lượt từ `part-000`. Phần nào đã có file `.vi.jsonl` đầy đủ thì bỏ qua, để có thể chạy tiếp khi bị ngắt.
3. Xong mỗi phần: chạy `npx tsx scripts/v4/import-templates.ts --check`, sửa các lỗi của phần đó, rồi commit và push ngay. Dòng `missing` lớn hơn 0 là bình thường khi chưa dịch xong.
4. Không sửa file nào khác, không mở pull request. Làm đến hết phần cuối, `--check` phải báo `missing=0 problems=0`.

## Quy tắc dịch
- Đây là các câu luận giải gửi cho người đọc: `你` dịch là "bạn". Văn tự nhiên, rõ ràng như người Việt viết.
- **Trung thành với nguyên văn:** không thêm, bớt, làm nhẹ hay làm nặng nhận định, kể cả cảnh báo sức khỏe và tai họa.
- **Giữ nguyên, không dịch, không đổi số thứ tự các chỗ giữ chỗ:** `{S1}` tên sao, `{P1}` cung (sẽ điền dạng "cung Mệnh"), `{H1}` Tứ Hóa (ví dụ "Hóa Kỵ"), `{B1}` độ sáng (ví dụ "Miếu Vượng"), `{G1}` cung theo địa chi ("cung Dần"), `{J1}` Ngũ Hành Cục, `{N1}` số. Mỗi chỗ giữ chỗ xuất hiện đúng một lần; được đổi vị trí cho thuận câu tiếng Việt. Vì `{P1}` đã có sẵn chữ "cung", đừng viết "cung {P1}".
- **Giữ nguyên định dạng:** `**`, `###`, `>`, `*`, `·`, `→`, `▍`, `✦`, `◆`, emoji. Tiêu đề `**【...】**` phải dịch và giữ dấu `【】`.
- **Không để sót chữ Hán.** Đổi `「」` thành `“ ”`, `《》` thành `“ ”`, và dấu toàn khổ thành dấu thường. `——` thành `—`.
- **Khẩu quyết cổ trong ngoặc:** dịch ra nghĩa tiếng Việt dễ hiểu, không phiên âm Hán Việt, trừ khi là tên cách cục.
- **Lời Thầy Nghê:** dịch sát trong dấu ngoặc kép, giữ nguồn. `（倪海厦《天纪》第5集53:06）` thành `(Nghê Hải Hạ, “Thiên Kỷ”, tập 5, 53:06)`.
- **Chữ `子宫`:** trong danh sách các cung là `cung Tý`; trong chuyện sức khỏe là `tử cung`.
- Nếu một câu thật sự mơ hồ, chọn cách hiểu sát chữ nhất. Không tự giải thích thêm.

## Thuật ngữ bắt buộc
- **Sao chưa thành chỗ giữ chỗ:** 天才 Thiên Tài, 天空 Thiên Không, 破碎 Phá Toái, 天使 Thiên Sứ, 空亡 Không Vong (khi là tên sao; nếu là từ thường thì dịch theo nghĩa).
- **Cung không có chữ 宫:** 命 Mệnh, 兄弟 Huynh Đệ, 夫妻 Phu Thê, 子女 Tử Nữ, 财帛 Tài Bạch, 疾厄 Tật Ách, 迁移 Thiên Di, 交友 Giao Hữu, 仆役 Nô Bộc, 官禄 Quan Lộc, 田宅 Điền Trạch, 福德 Phúc Đức, 父母 Phụ Mẫu (khi là tên cung; khi nói về người thật thì dịch "anh em", "vợ chồng", "con cái", "cha mẹ").
- **Khái niệm:** 紫微斗数 Tử Vi Đẩu Số, 倪海厦 Nghê Hải Hạ, 倪师 Thầy Nghê, 天纪 Thiên Kỷ, 全书 Toàn Thư, 全集 Toàn Tập, 骨髓赋 Cốt Tủy Phú, 命盘 lá số, 主星 Chính Tinh, 辅星 Phụ Tinh, 吉星 Cát Tinh, 煞星 Sát Tinh, 杀星 Sát Tinh, 四化 Tứ Hóa, 自化 Tự Hóa, 大限 Đại Hạn, 小限 Tiểu Hạn, 流年 Lưu Niên, 三方四正 Tam Phương Tứ Chính, 三合 Tam Hợp, 对宫 đối cung, 空宫 Vô Chính Diệu, 同宫 đồng cung, 夹宫 giáp cung, 格局 Cách Cục, 破格 phá cách, 桃花 Đào Hoa, 贵人 quý nhân, 杀破狼 Sát Phá Tham, 机月同梁 Cơ Nguyệt Đồng Lương, 紫府 Tử Phủ, 府相 Phủ Tướng, 昌曲 Xương Khúc, 魁钺 Khôi Việt, 禄马 Lộc Mã, 羊陀 Kình Đà, 火铃 Hỏa Linh, 空劫 Không Kiếp, 年干 can năm, 宫干 can cung, 校勘 hiệu khám, 子午流注 Tý Ngọ Lưu Chú.
