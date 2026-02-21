import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-brand-name">
                            <img src="/semit-landing-page/app-icon.png" alt="Semit" />
                            <span>Semit</span>
                        </div>
                        <p className="footer-brand-desc">
                            Ứng dụng theo dõi cột mốc và đếm ngược thời gian. Luôn ghi nhớ những khoảnh khắc quan trọng nhất trong cuộc sống của bạn.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Ứng dụng</h4>
                            <ul>
                                <li><a href="#features">Tính năng</a></li>
                                <li><a href="#preview">Giao diện</a></li>
                                <li><a href="#widget">Widget</a></li>
                                <li><a href="#download">Tải xuống</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Pháp lý</h4>
                            <ul>
                                <li><Link to="/terms">Điều khoản sử dụng</Link></li>
                                <li><Link to="/privacy">Chính sách bảo mật</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Semit. Được làm với ❤️</span>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to="/terms" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                            Điều khoản
                        </Link>
                        <Link to="/privacy" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                            Bảo mật
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
