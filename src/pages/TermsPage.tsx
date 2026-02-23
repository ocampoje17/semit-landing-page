import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FileText } from 'lucide-react'

export default function TermsPage() {
    return (
        <div className="page-layout">
            <Navbar />
            <main className="page-content">
                <div className="container" style={{ maxWidth: '760px' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <div style={{
                            width: '64px', height: '64px',
                            borderRadius: '16px',
                            background: 'rgba(99,102,241,0.15)',
                            border: '1px solid rgba(99,102,241,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 20px',
                        }}>
                            <FileText size={28} color="#6366f1" />
                        </div>
                        <h1>Điều khoản sử dụng</h1>
                        <p className="last-updated">Cập nhật lần cuối: 21 tháng 2, 2026</p>
                    </div>

                    <div className="content-card">
                        <p>
                            Vui lòng đọc kỹ Điều khoản sử dụng này trước khi sử dụng ứng dụng <strong>Semit</strong>. Bằng cách tải xuống hoặc sử dụng ứng dụng, bạn đồng ý bị ràng buộc bởi các điều khoản này.
                        </p>

                        <h2>1. Chấp nhận điều khoản</h2>
                        <p>
                            Khi tải xuống, cài đặt hoặc sử dụng ứng dụng Semit, bạn đồng ý tuân theo các Điều khoản sử dụng này. Nếu bạn không đồng ý với bất kỳ phần nào, vui lòng không sử dụng ứng dụng.
                        </p>

                        <h2>2. Mô tả dịch vụ</h2>
                        <p>
                            Semit là ứng dụng theo dõi cột mốc và đếm ngược thời gian dành cho Android. Ứng dụng cho phép bạn:
                        </p>
                        <ul>
                            <li>Tạo mới, quản lý và lên lịch các sự kiện quan trọng trong cuộc sống.</li>
                            <li>Theo dõi tiến độ bằng danh sách nhiệm vụ (Checklist và Thanh phần trăm tiến độ).</li>
                            <li>Đếm ngược / đếm xuôi số ngày tới sự kiện cực kỳ chính xác.</li>
                            <li>Khả năng tuỳ biến linh hoạt: màu sắc chủ đề, chế độ hiển thị Sáng/Tối.</li>
                            <li>Thay đổi hình nền từ bộ sưu tập ảnh cá nhân (kèm hiệu ứng làm mờ, tối ảnh, thu phóng).</li>
                            <li>Cài đặt Widget đếm ngày (hỗ trợ size 4x3 và 2x2) hiển thị độc lập ngay trên màn hình chính của Android.</li>
                            <li>Xuất nội dung sự kiện thành hình ảnh đẹp mắt để lưu lại hoặc chia sẻ lên mọi nền tảng mạng xã hội.</li>
                        </ul>

                        <h2>3. Sử dụng ứng dụng</h2>
                        <h3>3.1. Giấy phép sử dụng</h3>
                        <p>
                            Chúng tôi cấp cho bạn giấy phép cá nhân, không độc quyền, không thể chuyển nhượng để sử dụng ứng dụng Semit cho mục đích cá nhân, phi thương mại.
                        </p>

                        <h3>3.2. Hạn chế sử dụng</h3>
                        <p>Bạn đồng ý <strong>không</strong>:</p>
                        <ul>
                            <li>Sao chép, sửa đổi, phân phối hoặc bán ứng dụng hoặc bất kỳ phần nào của nó</li>
                            <li>Dịch ngược, dịch ngược mã nguồn hoặc cố gắng trích xuất mã nguồn</li>
                            <li>Sử dụng ứng dụng cho bất kỳ mục đích bất hợp pháp nào</li>
                            <li>Cố gắng can thiệp hoặc phá vỡ hoạt động bình thường của ứng dụng</li>
                        </ul>

                        <h2>4. Quyền sở hữu trí tuệ</h2>
                        <p>
                            Ứng dụng Semit và toàn bộ nội dung liên quan, bao gồm nhưng không giới hạn ở mã nguồn, thiết kế, đồ họa, biểu tượng và tên thương hiệu, là tài sản của nhà phát triển và được bảo vệ bởi luật sở hữu trí tuệ.
                        </p>

                        <h2>5. Dữ liệu người dùng</h2>
                        <p>
                            Tất cả dữ liệu bạn tạo trong ứng dụng (cột mốc, nhiệm vụ, v.v.) được lưu trữ cục bộ trên thiết bị của bạn. Chúng tôi không có quyền truy cập vào dữ liệu này. Bạn hoàn toàn chịu trách nhiệm về việc sao lưu và bảo vệ dữ liệu của mình.
                        </p>

                        <h2>6. Miễn trừ trách nhiệm</h2>
                        <p>
                            Ứng dụng được cung cấp "<strong>nguyên trạng</strong>" (as-is) mà không có bất kỳ bảo đảm nào, rõ ràng hay ngụ ý. Chúng tôi không đảm bảo rằng:
                        </p>
                        <ul>
                            <li>Ứng dụng sẽ hoạt động liên tục, không lỗi hoặc không bị gián đoạn</li>
                            <li>Tất cả lỗi trong ứng dụng sẽ được sửa chữa</li>
                            <li>Dữ liệu của bạn sẽ không bao giờ bị mất (luôn sao lưu dữ liệu quan trọng)</li>
                        </ul>

                        <h2>7. Giới hạn trách nhiệm</h2>
                        <p>
                            Trong phạm vi tối đa được pháp luật cho phép, nhà phát triển không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng ứng dụng.
                        </p>

                        <h2>8. Ứng dụng của bên thứ ba</h2>
                        <p>
                            Ứng dụng có thể liên kết hoặc tích hợp với các dịch vụ bên thứ ba (ví dụ: thư viện mã nguồn mở). Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung hoặc chính sách của các dịch vụ này.
                        </p>

                        <h2>9. Thay đổi điều khoản</h2>
                        <p>
                            Chúng tôi có thể cập nhật Điều khoản sử dụng này theo thời gian. Chúng tôi sẽ thông báo về các thay đổi quan trọng qua bản cập nhật ứng dụng. Việc tiếp tục sử dụng ứng dụng sau khi có thay đổi được coi là chấp nhận điều khoản mới.
                        </p>

                        <h2>10. Chấm dứt</h2>
                        <p>
                            Giấy phép sử dụng của bạn sẽ tự động chấm dứt nếu bạn vi phạm bất kỳ điều khoản nào trong tài liệu này. Khi chấm dứt, bạn phải gỡ cài đặt và xóa tất cả bản sao của ứng dụng.
                        </p>

                        <h2>11. Luật áp dụng</h2>
                        <p>
                            Điều khoản sử dụng này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh từ hoặc liên quan đến các điều khoản này sẽ được giải quyết theo thủ tục pháp lý tại Việt Nam.
                        </p>

                        <h2>12. Liên hệ</h2>
                        <p>
                            Nếu bạn có câu hỏi về Điều khoản sử dụng này, vui lòng liên hệ với chúng tôi qua các thông tin được cung cấp ở phần cuối (footer) của trang web này.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
