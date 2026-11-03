export const metadata = { title: 'Điều khoản dịch vụ · Lá Số Tử Vi', description: 'Điều khoản dịch vụ và thỏa thuận người dùng của Lá Số Tử Vi' };

export default function TermsPage() {
  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-0)', borderBottom: '1px solid var(--bdr)', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--tx-3)', textDecoration: 'none' }}>
          <span style={{ fontSize: '16px' }}>‹</span>
          <span>Về trang chủ</span>
        </a>
        <div style={{ width: '1px', height: '20px', background: 'var(--bdr-med)' }} />
        <span style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.02em' }}>Lá Số Tử Vi</span>
      </header>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px', color: 'var(--tx-1)', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Điều khoản dịch vụ</h1>
        <p style={{ fontSize: 12, color: 'var(--tx-3)', marginBottom: 32 }}>Cập nhật lần cuối: tháng 4 năm 2026</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>1. Tổng quan dịch vụ</h2>
      <p>Lá Số Tử Vi (sau đây gọi là “Nền tảng này”) cung cấp dịch vụ lập lá số và luận giải dựa trên hệ thống Tử Vi Đẩu Số “Thiên Kỷ” của Nghê Hải Hạ. Mọi nội dung mệnh lý của Nền tảng này chỉ để tham khảo, <strong>không cấu thành bất kỳ lời khuyên nào về y tế, đầu tư, pháp luật, tư vấn tâm lý hoặc các quyết định quan trọng trong đời</strong>.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>2. Quy tắc ứng xử của người dùng</h2>
      <p>Việc sử dụng Nền tảng này đồng nghĩa với việc bạn đồng ý:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li>Chỉ sử dụng Nền tảng này cho mục đích hợp pháp và tham khảo cá nhân</li>
        <li>Không phát tán nội dung của Nền tảng này để bán thương mại, đăng lại hoặc công bố công khai</li>
        <li>Không thực hiện hành vi làm gián đoạn hoạt động bình thường của Nền tảng</li>
        <li>Thông tin sinh được cung cấp phải chân thực và hợp lệ; Nền tảng này không chịu trách nhiệm về sai lệch luận giải do thông tin sai</li>
      </ul>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>3. Sở hữu trí tuệ và điều khoản cấm · Chống thu thập dữ liệu, chống huấn luyện</h2>
      <p style={{ background: 'rgba(168,50,40,0.06)', border: '1px solid rgba(168,50,40,0.2)', padding: 16, borderRadius: 8 }}>
        <strong>Mọi nội dung mệnh lý, kho kiến thức (bao gồm toàn bộ văn bản luận giải của 14 Chính Tinh × 12 cung × nam nữ × Tứ Hóa × Đại Hạn, Lưu Niên), thiết kế giao diện, phương án tích hợp thuật toán, kho tình huống của Nền tảng này đều là bản gốc của Nền tảng này hoặc được chỉnh lý hợp pháp.</strong><br/><br/>
        Nghiêm cấm các hành vi sau; đối với người vi phạm, Nền tảng này bảo lưu quyền truy cứu trách nhiệm bồi thường dân sự và trách nhiệm hình sự:<br/>
        ① Thu thập nội dung của Nền tảng này bằng bất kỳ phương tiện kỹ thuật nào như trình thu thập dữ liệu (crawler), kịch bản tự động, gọi API hàng loạt;<br/>
        ② Sử dụng nội dung luận giải lá số, văn bản, dữ liệu phản hồi API do Nền tảng này tạo ra **để huấn luyện bất kỳ mô hình học máy nào** (bao gồm nhưng không giới hạn ở mô hình ngôn ngữ lớn, mô hình tạo sinh mệnh lý, mô hình tạo sinh văn bản, v.v.);<br/>
        ③ Bán lại hoặc đăng nội dung do Nền tảng này tạo ra lên các trang web, ứng dụng, tài khoản truyền thông cá nhân khác;<br/>
        ④ Dịch ngược, sao chép, sửa đổi mã nguồn phía giao diện hoặc phía máy chủ của Nền tảng này và cung cấp dịch vụ tương tự theo hình thức “tự vận hành”.<br/><br/>
        Văn bản đầu ra của Nền tảng này có nhúng thủy vân truy vết dấu vân tay, đầu ra phát sinh từ việc sao chép / huấn luyện trái phép có thể bị phát hiện và truy vết. Khi phát hiện vi phạm, Nền tảng này có quyền yêu cầu <strong>bồi thường vi phạm 1.000.000 nhân dân tệ cho mỗi trường hợp</strong>, đồng thời bảo lưu quyền khởi kiện ra tòa án và phối hợp điều tra với cơ quan công an.
      </p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>4. Tuyên bố miễn trừ trách nhiệm</h2>
      <p>Nội dung mệnh lý của Nền tảng này được chỉnh lý từ kiến thức Tử Vi Đẩu Số truyền thống và hệ thống Nghê Hải Hạ, <strong>không bảo đảm chính xác 100%</strong>. Vận mệnh chịu ảnh hưởng chung của tam tài Thiên, Địa, Nhân; đầu ra của Nền tảng này chỉ là tài liệu tham khảo để hiểu về bản thân, người sử dụng nên nhìn nhận một cách lý trí, không nên phụ thuộc quá mức vào bất kỳ nhận định mệnh lý đơn lẻ nào.</p>
      <p>Đối với mọi hậu quả phát sinh từ việc sử dụng nội dung của Nền tảng này (bao gồm nhưng không giới hạn ở sai lầm trong quyết định, ảnh hưởng tâm lý, thay đổi trong các mối quan hệ, v.v.), Nền tảng này không chịu trách nhiệm pháp lý.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>5. Thay đổi và chấm dứt dịch vụ</h2>
      <p>Nền tảng này bảo lưu quyền điều chỉnh, tạm ngừng hoặc chấm dứt một phần hoặc toàn bộ dịch vụ vào bất kỳ lúc nào. Những thay đổi quan trọng sẽ được thông báo cho người dùng qua thông báo trên trang hoặc qua email.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>6. Luật áp dụng và giải quyết tranh chấp</h2>
      <p>Các điều khoản này áp dụng pháp luật nước Cộng hòa Nhân dân Trung Hoa. Nếu phát sinh tranh chấp, hai bên nên thương lượng thiện chí; nếu thương lượng không thành, tranh chấp sẽ được đưa ra giải quyết bằng con đường tố tụng tại tòa án nhân dân có thẩm quyền nơi đơn vị vận hành Nền tảng này đặt trụ sở.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>7. Thông tin liên hệ</h2>
      <p>Nếu có thắc mắc, vui lòng liên hệ qua WeChat / email chăm sóc khách hàng được Nền tảng này công bố.</p>

        <p style={{ marginTop: 48, fontSize: 12, color: 'var(--tx-3)' }}>
          <a href="/privacy" style={{ color: 'var(--ac)' }}>Chính sách bảo mật</a> · <a href="/" style={{ color: 'var(--ac)' }}>Về trang chủ</a>
        </p>
      </main>
    </>
  );
}
