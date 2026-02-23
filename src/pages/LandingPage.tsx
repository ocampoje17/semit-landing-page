import { useEffect, useRef } from 'react'
import {
    Flag, CalendarClock, BarChart3, Smartphone,
    Layers, Settings, Star, CheckCircle2,
    Download, ChevronRight
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AppMockHome, AppMockDetail, AppMockWidget } from '../components/AppMocks'

// useReveal hook
function useReveal() {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    observer.disconnect()
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return ref
}

// Feature data
const features = [
    {
        icon: '🏆',
        color: 'rgba(79,142,247,0.15)',
        title: 'Cột mốc quan trọng',
        desc: 'Tạo và quản lý các cột mốc trong cuộc sống. Đặt ngày, biểu tượng và theo dõi từng mục tiêu một cách trực quan nhất.',
    },
    {
        icon: '⏳',
        color: 'rgba(99,102,241,0.15)',
        title: 'Đếm ngược thời gian',
        desc: 'Xem chính xác số ngày còn lại đến từng sự kiện. Không bao giờ bỏ lỡ những khoảnh khắc đặc biệt.',
    },
    {
        icon: '📊',
        color: 'rgba(52,211,153,0.15)',
        title: 'Theo dõi tiến độ',
        desc: 'Thêm nhiệm vụ check-list hoặc progress tracking cho mỗi cột mốc. Nắm rõ bạn đang ở đâu trong hành trình.',
    },
    {
        icon: '📱',
        color: 'rgba(251,191,36,0.15)',
        title: 'Widget Android',
        desc: 'Widget 4×3 hiển thị tất cả cột mốc với thanh tiến độ. Widget 2×2 nhỏ gọn cho từng sự kiện quan trọng.',
    },
    {
        icon: '🎨',
        color: 'rgba(239,68,68,0.15)',
        title: 'Hình nền cá nhân hóa',
        desc: 'Chọn ảnh từ thư viện để làm hình nền cho mỗi cột mốc. Tạo giao diện độc đáo và cảm hứng riêng.',
    },
    {
        icon: '🌙',
        color: 'rgba(167,139,250,0.15)',
        title: 'Dark & Light mode',
        desc: 'Hỗ trợ cả hai chế độ tối và sáng tự động theo hệ thống. Trải nghiệm thoải mái trong mọi điều kiện.',
    },
]

const highlights = [
    { icon: <CheckCircle2 size={16} />, text: 'Hoàn toàn miễn phí' },
    { icon: <CheckCircle2 size={16} />, text: 'Không cần đăng ký tài khoản' },
    { icon: <CheckCircle2 size={16} />, text: 'Dữ liệu lưu trên thiết bị' },
    { icon: <CheckCircle2 size={16} />, text: 'Không quảng cáo phiền phức' },
]

export default function LandingPage() {
    const heroRef = useReveal()
    const featuresRef = useReveal()
    const previewRef = useReveal()
    const widgetRef = useReveal()
    const ctaRef = useReveal()

    return (
        <div className="page-layout">
            <Navbar />

            {/* ========================
          HERO SECTION
          ======================== */}
            <section className="hero">
                <div className="container">
                    <div ref={heroRef} className="reveal">
                        {/* Eyebrow */}
                        <div className="hero-eyebrow">
                            <span className="badge badge-primary">
                                <Flag size={12} />
                                Quản lý cột mốc thông minh
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="hero-title">
                            Ghi nhớ mọi{' '}
                            <span className="gradient-text">khoảnh khắc</span>
                            <br />
                            quan trọng
                        </h1>

                        {/* Subtitle */}
                        <p className="hero-subtitle">
                            <strong style={{ color: 'var(--text-primary)' }}>Semit</strong> giúp bạn theo dõi những cột mốc quan trọng trong cuộc sống —
                            từ sinh nhật, kỳ thi, đến những ngày đặc biệt — với đếm ngược trực quan và widget tiện lợi.
                        </p>

                        {/* CTA */}
                        <div className="hero-cta">
                            <a
                                href="#download"
                                className="btn btn-primary btn-lg"
                                id="hero-download-btn"
                            >
                                <Download size={20} />
                                Tải về miễn phí
                            </a>
                            <a href="#preview" className="btn btn-outline btn-lg">
                                Xem giao diện
                                <ChevronRight size={18} />
                            </a>
                        </div>

                        {/* Highlights */}
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', gap: '16px',
                            justifyContent: 'center', margin: '24px 0 0'
                        }}>
                            {highlights.map((h, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    fontSize: '13px', color: 'var(--text-secondary)'
                                }}>
                                    <span style={{ color: '#34d399' }}>{h.icon}</span>
                                    {h.text}
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="hero-stats">
                            {[
                                { number: '100%', label: 'Miễn phí' },
                                { number: '0', label: 'Quảng cáo' },
                                { number: '∞', label: 'Cột mốc' },
                                { number: '2', label: 'Loại Widget' },
                            ].map((stat, i) => (
                                <div key={i} className="hero-stat">
                                    <div className="hero-stat-number">{stat.number}</div>
                                    <div className="hero-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* App Preview */}
                    <div className="app-preview">
                        <div className="phone-frame phone-side animate-float-delay" style={{ display: 'flex' }}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <div className="phone-notch" />
                                <div style={{ padding: '16px 8px 0' }}>
                                    <AppMockDetail />
                                </div>
                            </div>
                        </div>

                        <div className="phone-frame phone-main animate-float animate-pulse-glow" style={{
                            background: '#0a0a0f'
                        }}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <div className="phone-notch" />
                                <div style={{ padding: '20px 12px 0' }}>
                                    <AppMockHome />
                                </div>
                            </div>
                        </div>

                        <div className="phone-frame phone-side animate-float-delay" style={{ display: 'flex' }}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <div className="phone-notch" />
                                <div style={{ padding: '16px 8px 0' }}>
                                    <AppMockWidget />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* ========================
          FEATURES SECTION
          ======================== */}
            <section className="section" id="features">
                <div className="container">
                    <div ref={featuresRef} className="reveal">
                        <div className="section-header">
                            <div className="section-label">
                                <Star size={14} />
                                Tính năng
                            </div>
                            <h2 className="section-title">
                                Mọi thứ bạn cần để{' '}
                                <span className="gradient-text">không bỏ lỡ</span>
                            </h2>
                            <p className="section-subtitle">
                                Semit được thiết kế đơn giản nhưng đầy đủ chức năng, giúp bạn luôn ý thức về thời gian và tiến độ.
                            </p>
                        </div>

                        <div className="grid-3">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="glass-card feature-card"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className="feature-icon" style={{ background: feature.color }}>
                                        <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                                    </div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-desc">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* ========================
          APP PREVIEW SECTION
          ======================== */}
            <section className="section" id="preview">
                <div className="container">
                    <div ref={previewRef} className="reveal">
                        <div className="section-header">
                            <div className="section-label">
                                <Smartphone size={14} />
                                Giao diện
                            </div>
                            <h2 className="section-title">
                                Đẹp. Đơn giản.{' '}
                                <span className="gradient-text">Hiệu quả.</span>
                            </h2>
                            <p className="section-subtitle">
                                Thiết kế tối giản với glassmorphism hiện đại, hỗ trợ dark/light mode, mang lại trải nghiệm premium.
                            </p>
                        </div>

                        {/* Two-column layout: left text, right mock */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '48px',
                            alignItems: 'center',
                            marginBottom: '64px',
                        }}
                            className="preview-grid"
                        >
                            <div>
                                <div style={{ marginBottom: '40px' }}>
                                    <div className="badge badge-primary" style={{ marginBottom: '16px' }}>
                                        <Flag size={12} /> Màn hình chính
                                    </div>
                                    <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '12px' }}>
                                        Tổng quan mọi cột mốc trong một màn hình
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
                                        Hero card hiển thị sự kiện quan trọng nhất với đếm ngược lớn và tiến độ nhiệm vụ. Danh sách bên dưới hiển thị tất cả cột mốc sắp tới.
                                    </p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {[
                                        { icon: <CalendarClock size={18} />, title: 'Đếm ngược chính xác', desc: 'Hiển thị số ngày chính xác còn lại đến từng sự kiện' },
                                        { icon: <BarChart3 size={18} />, title: 'Thanh tiến độ', desc: 'Progress bar trực quan cho nhiệm vụ dạng số' },
                                        { icon: <Layers size={18} />, title: 'Phân loại thông minh', desc: 'Sự kiện chính, quan trọng và sắp tới được phân nhóm rõ ràng' },
                                    ].map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex', gap: '14px', alignItems: 'flex-start',
                                            padding: '16px', borderRadius: '12px',
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border-subtle)',
                                        }}>
                                            <span style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                                            <div>
                                                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>{item.title}</div>
                                                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', inset: '-20px', borderRadius: '40px',
                                    background: 'radial-gradient(ellipse at center, rgba(79,142,247,0.08), transparent 70%)',
                                    pointerEvents: 'none',
                                }} />
                                <div className="phone-frame" style={{
                                    width: '100%', maxWidth: '300px',
                                    margin: '0 auto',
                                    background: '#0a0a0f',
                                }}>
                                    <div style={{ position: 'relative', padding: '20px 12px' }}>
                                        <div className="phone-notch" style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }} />
                                        <div style={{ marginTop: '12px' }}>
                                            <AppMockHome />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: right text, left mock */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '48px',
                            alignItems: 'center',
                        }}
                            className="preview-grid"
                        >
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', inset: '-20px', borderRadius: '40px',
                                    background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08), transparent 70%)',
                                    pointerEvents: 'none',
                                }} />
                                <div className="phone-frame" style={{
                                    width: '100%', maxWidth: '300px',
                                    margin: '0 auto',
                                    background: '#0a0a0f',
                                }}>
                                    <div style={{ position: 'relative', padding: '20px 12px' }}>
                                        <div className="phone-notch" style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }} />
                                        <div style={{ marginTop: '12px' }}>
                                            <AppMockDetail />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="badge badge-success" style={{ marginBottom: '16px' }}>
                                    <BarChart3 size={12} /> Chi tiết cột mốc
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '12px' }}>
                                    Đi sâu vào từng mục tiêu của bạn
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px', marginBottom: '24px' }}>
                                    Màn hình chi tiết hiển thị vòng tròn tiến độ đẹp mắt, thống kê ngày đã qua và còn lại, cùng danh sách nhiệm vụ đầy đủ.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {[
                                        'Vòng tròn đếm ngược trực quan',
                                        'Thêm nhiệm vụ check-list hoặc progress',
                                        'Hình nền tùy chỉnh từ thư viện ảnh',
                                        'Ghim nhiệm vụ quan trọng lên đầu',
                                    ].map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            fontSize: '14px', color: 'var(--text-secondary)'
                                        }}>
                                            <span style={{ color: '#34d399', flexShrink: 0 }}>✓</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* ========================
          WIDGET SECTION
          ======================== */}
            <section className="section" id="widget">
                <div className="container">
                    <div ref={widgetRef} className="reveal">
                        <div className="section-header">
                            <div className="section-label">
                                <Layers size={14} />
                                Widget Android
                            </div>
                            <h2 className="section-title">
                                Luôn theo dõi{' '}
                                <span className="gradient-text">ngay trên màn hình</span>
                            </h2>
                            <p className="section-subtitle">
                                Hai loại widget cho phép bạn xem đếm ngược ngay trên màn hình chính Android mà không cần mở ứng dụng.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '32px',
                            alignItems: 'center',
                        }}
                            className="preview-grid"
                        >
                            {/* Widget preview mock */}
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', inset: '-20px', borderRadius: '40px',
                                    background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.06), transparent 70%)',
                                    pointerEvents: 'none',
                                }} />
                                <div className="phone-frame" style={{
                                    width: '100%', maxWidth: '300px',
                                    margin: '0 auto',
                                    background: '#0a0a0f',
                                }}>
                                    <div style={{ position: 'relative', padding: '20px 12px' }}>
                                        <div className="phone-notch" style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }} />
                                        <div style={{ marginTop: '12px' }}>
                                            <AppMockWidget />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Widget info */}
                            <div>
                                {[
                                    {
                                        title: 'Widget 4×3 — Milestones',
                                        icon: '🗓️',
                                        color: 'rgba(79,142,247,0.15)',
                                        features: [
                                            'Hiển thị cột mốc chính với đếm ngược lớn',
                                            'Danh sách 3 cột mốc phụ với thanh tiến độ',
                                            'Cập nhật tự động mỗi 30 phút',
                                            'Bấm để mở ứng dụng',
                                        ]
                                    },
                                    {
                                        title: 'Widget 2×2 — Countdown',
                                        icon: '⏱️',
                                        color: 'rgba(99,102,241,0.15)',
                                        features: [
                                            'Tên cột mốc và biểu tượng emoji',
                                            'Đếm ngược ngày còn lại nổi bật',
                                            'Có thể cấu hình cho từng instance',
                                            'Đặt nhiều widget cho nhiều cột mốc khác nhau',
                                        ]
                                    }
                                ].map((widget, i) => (
                                    <div key={i} className="glass-card" style={{
                                        padding: '24px',
                                        marginBottom: '20px',
                                        background: widget.color,
                                        border: `1px solid ${i === 0 ? 'rgba(79,142,247,0.25)' : 'rgba(99,102,241,0.25)'}`,
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                            <span style={{ fontSize: '24px' }}>{widget.icon}</span>
                                            <h3 style={{ fontSize: '16px', fontWeight: '700' }}>{widget.title}</h3>
                                        </div>
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {widget.features.map((f, j) => (
                                                <li key={j} style={{
                                                    display: 'flex', alignItems: 'center', gap: '8px',
                                                    fontSize: '13px', color: 'var(--text-secondary)'
                                                }}>
                                                    <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>→</span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* ========================
          HOW IT WORKS
          ======================== */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">
                            <Settings size={14} />
                            Cách sử dụng
                        </div>
                        <h2 className="section-title">
                            Bắt đầu trong{' '}
                            <span className="gradient-text">vài giây</span>
                        </h2>
                        <p className="section-subtitle">
                            Không cần đăng ký hay cấu hình phức tạp. Chỉ cần tải về và bắt đầu thêm cột mốc của bạn.
                        </p>
                    </div>

                    <div className="grid-4">
                        {[
                            { step: '01', icon: '📥', title: 'Tải ứng dụng', desc: 'Tải Semit miễn phí từ Google Play Store' },
                            { step: '02', icon: '➕', title: 'Thêm cột mốc', desc: 'Nhấn nút + và điền tên, ngày, emoji cho sự kiện' },
                            { step: '03', icon: '📋', title: 'Thêm nhiệm vụ', desc: 'Thêm check-list hoặc mục tiêu progress cho từng cột mốc' },
                            { step: '04', icon: '📱', title: 'Đặt Widget', desc: 'Thêm widget vào màn hình chính để theo dõi mọi lúc' },
                        ].map((step, i) => (
                            <div key={i} className="glass-card" style={{ padding: '24px', textAlign: 'center', position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', top: '-12px', left: '24px',
                                    background: 'var(--accent-gradient)',
                                    color: 'white', fontSize: '11px', fontWeight: '700',
                                    padding: '4px 10px', borderRadius: '100px', letterSpacing: '1px'
                                }}>
                                    {step.step}
                                </div>
                                <div style={{ fontSize: '40px', marginBottom: '12px', marginTop: '8px' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{step.title}</h3>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* ========================
          DOWNLOAD SECTION
          ======================== */}
            <section className="cta-section" id="download">
                <div className="container">
                    <div ref={ctaRef} className="reveal">
                        <div className="cta-box">
                            {/* Decorative glow */}
                            <div style={{
                                position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)',
                                width: '200px', height: '200px',
                                background: 'radial-gradient(circle, rgba(79,142,247,0.2), transparent 70%)',
                                pointerEvents: 'none',
                            }} />

                            <img
                                src="/app-icon.png"
                                alt="Semit"
                                style={{
                                    width: '80px', height: '80px',
                                    borderRadius: '20px',
                                    marginBottom: '24px',
                                    boxShadow: '0 8px 32px rgba(79,142,247,0.3)',
                                }}
                            />
                            <h2 className="cta-title">
                                Sẵn sàng bắt đầu?
                            </h2>
                            <p className="cta-subtitle">
                                Tải Semit miễn phí ngay hôm nay và bắt đầu theo dõi những cột mốc quan trọng trong cuộc sống của bạn.
                            </p>

                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {/* GitHub/APK download */}
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="store-badge"
                                    id="github-download-btn"
                                >
                                    <span className="store-badge-icon">🤖</span>
                                    <div className="store-badge-text">
                                        <span className="store-badge-sub">Tải về cho</span>
                                        <span className="store-badge-name">Android (APK)</span>
                                    </div>
                                </a>

                                {/* Google Play */}
                                <a
                                    href="https://play.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="store-badge"
                                    id="play-store-btn"
                                    style={{ opacity: 0.6, cursor: 'not-allowed' }}
                                    onClick={e => e.preventDefault()}
                                >
                                    <span className="store-badge-icon">▶️</span>
                                    <div className="store-badge-text">
                                        <span className="store-badge-sub">Sắp có trên</span>
                                        <span className="store-badge-name">Google Play</span>
                                    </div>
                                </a>
                            </div>

                            <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                                Chỉ dành cho Android • Miễn phí hoàn toàn
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
