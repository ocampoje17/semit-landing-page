import { Link, useLocation } from 'react-router-dom'
import { Mail, Send } from 'lucide-react'

export default function Footer() {
    const location = useLocation()
    const isLanding = location.pathname === '/'
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-brand-name">
                            <img src="/app-icon.png" alt="Semit" />
                            <span>Semit</span>
                        </div>
                        <p className="footer-brand-desc">
                            Ứng dụng để tạo nên những cột mốc vĩ đại của riêng bạn.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Ứng dụng</h4>
                            {isLanding ? (
                                <ul>
                                    <li><a href="#features">Tính năng</a></li>
                                    <li><a href="#preview">Giao diện</a></li>
                                    <li><a href="#widget">Widget</a></li>
                                    <li><a href="#download">Tải xuống</a></li>
                                </ul>
                            ) : (
                                <ul>
                                    <li><Link to="/#features">Tính năng</Link></li>
                                    <li><Link to="/#preview">Giao diện</Link></li>
                                    <li><Link to="/#widget">Widget</Link></li>
                                    <li><Link to="/#download">Tải xuống</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="footer-col">
                            <h4>Pháp lý</h4>
                            <ul>
                                <li><Link to="/terms">Điều khoản sử dụng</Link></li>
                                <li><Link to="/privacy">Chính sách bảo mật</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col" style={{ flex: 1.5 }}>
                            <h4>Liên hệ</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li>
                                    <a href="mailto:namqhong@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Mail size={16} color="var(--accent-primary)" />
                                        <span>namqhong@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/namhnz" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Send size={16} color="#34d399" />
                                        <span>@namhnz (Telegram)</span>
                                    </a>
                                </li>
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
