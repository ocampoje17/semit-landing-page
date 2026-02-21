import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
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
                            background: 'rgba(79,142,247,0.15)',
                            border: '1px solid rgba(79,142,247,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 20px',
                        }}>
                            <Shield size={28} color="#4f8ef7" />
                        </div>
                        <h1>Chính sách bảo mật</h1>
                        <p className="last-updated">Cập nhật lần cuối: 21 tháng 2, 2026</p>
                    </div>

                    <div className="content-card">
                        <p>
                            Chúng tôi tôn trọng quyền riêng tư của bạn. Chính sách bảo mật này giải thích cách ứng dụng <strong>Semit</strong> thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn sử dụng ứng dụng của chúng tôi.
                        </p>

                        <h2>1. Thông tin chúng tôi thu thập</h2>
                        <h3>1.1. Thông tin bạn cung cấp</h3>
                        <p>
                            Semit cho phép bạn tạo và quản lý các cột mốc cá nhân. Ứng dụng lưu trữ các thông tin sau <strong>trực tiếp trên thiết bị của bạn</strong>:
                        </p>
                        <ul>
                            <li>Tên và mô tả cột mốc bạn tạo</li>
                            <li>Ngày tháng và thời gian của các sự kiện</li>
                            <li>Biểu tượng emoji bạn chọn</li>
                            <li>Danh sách nhiệm vụ và tiến độ hoàn thành</li>
                            <li>Hình ảnh nền bạn chọn từ thư viện (chỉ lưu đường dẫn tham chiếu)</li>
                        </ul>

                        <h3>1.2. Thông tin kỹ thuật</h3>
                        <p>
                            Ứng dụng <strong>không thu thập</strong> bất kỳ thông tin cá nhân nào như tên, email, số điện thoại hay vị trí địa lý của bạn. Chúng tôi không có máy chủ để lưu trữ dữ liệu của bạn.
                        </p>

                        <h2>2. Cách chúng tôi sử dụng thông tin</h2>
                        <p>Tất cả dữ liệu được lưu trữ cục bộ trên thiết bị của bạn và chỉ được sử dụng để:</p>
                        <ul>
                            <li>Hiển thị danh sách cột mốc và đếm ngược thời gian</li>
                            <li>Cập nhật widget trên màn hình chính Android</li>
                            <li>Theo dõi tiến độ nhiệm vụ và cột mốc</li>
                        </ul>

                        <h2>3. Chia sẻ thông tin</h2>
                        <p>
                            Chúng tôi <strong>không chia sẻ, bán, cho thuê hay tiết lộ</strong> thông tin của bạn với bất kỳ bên thứ ba nào. Dữ liệu của bạn hoàn toàn thuộc về bạn và chỉ tồn tại trên thiết bị của bạn.
                        </p>

                        <h2>4. Quyền truy cập thiết bị</h2>
                        <p>Ứng dụng yêu cầu một số quyền hệ thống để hoạt động:</p>
                        <ul>
                            <li><strong>Quyền thư viện ảnh:</strong> Để bạn chọn hình nền tùy chỉnh cho cột mốc. Ứng dụng chỉ đọc ảnh bạn chủ động chọn, không quét toàn bộ thư viện.</li>
                            <li><strong>Quyền widget:</strong> Để hiển thị thông tin cột mốc trên màn hình chính khi bạn thêm widget.</li>
                        </ul>

                        <h2>5. Bảo mật dữ liệu</h2>
                        <p>
                            Vì dữ liệu được lưu trữ cục bộ trên thiết bị, mức độ bảo mật phụ thuộc vào bảo mật thiết bị của bạn (mã PIN, vân tay, mã hóa thiết bị). Chúng tôi khuyến nghị bạn bảo vệ thiết bị của mình bằng các biện pháp bảo mật phù hợp.
                        </p>

                        <h2>6. Xóa dữ liệu</h2>
                        <p>
                            Bạn có thể xóa toàn bộ dữ liệu của mình bằng cách:
                        </p>
                        <ul>
                            <li>Xóa từng cột mốc trong ứng dụng</li>
                            <li>Gỡ cài đặt ứng dụng để xóa toàn bộ dữ liệu</li>
                            <li>Xóa dữ liệu ứng dụng trong Cài đặt &gt; Ứng dụng &gt; Semit &gt; Xóa dữ liệu</li>
                        </ul>

                        <h2>7. Thay đổi chính sách</h2>
                        <p>
                            Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Mọi thay đổi sẽ được thông báo qua bản cập nhật ứng dụng. Việc tiếp tục sử dụng ứng dụng sau khi cập nhật được xem là chấp nhận chính sách mới.
                        </p>

                        <h2>8. Liên hệ</h2>
                        <p>
                            Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua trang GitHub của dự án.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
