import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const location = useLocation()
    const isLanding = location.pathname === '/'
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-inner">
                    {/* Logo */}
                    <Link to="/" className="nav-logo">
                        <img src="/semit-landing-page/app-icon.png" alt="Semit" />
                        <span>Semit</span>
                    </Link>

                    {/* Desktop links */}
                    {isLanding && (
                        <ul className="nav-links">
                            <li><a href="#features">Tính năng</a></li>
                            <li><a href="#preview">Giao diện</a></li>
                            <li><a href="#widget">Widget</a></li>
                            <li><a href="#download">Tải xuống</a></li>
                        </ul>
                    )}

                    {/* CTA */}
                    <div className="nav-cta">
                        {isLanding ? (
                            <a href="#download" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
                                Tải xuống
                            </a>
                        ) : (
                            <Link to="/" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '14px' }}>
                                ← Trang chủ
                            </Link>
                        )}
                        <button
                            className="nav-mobile-btn"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileOpen && isLanding && (
                    <div style={{
                        padding: '16px 0 20px',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                    }}>
                        {[
                            { href: '#features', label: 'Tính năng' },
                            { href: '#preview', label: 'Giao diện' },
                            { href: '#widget', label: 'Widget' },
                            { href: '#download', label: 'Tải xuống' },
                        ].map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    padding: '12px 8px',
                                    fontSize: '15px',
                                    color: 'var(--text-secondary)',
                                    fontWeight: '500',
                                    transition: 'color 0.15s',
                                    display: 'block',
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
