// Mock app UI components for the landing page preview

export function AppMockHome() {
    const today = new Date()
    const gradDate = new Date(today)
    gradDate.setDate(today.getDate() + 42)

    return (
        <div style={{
            background: '#0a0a0f',
            borderRadius: '32px',
            padding: '24px 16px',
            fontFamily: 'Inter, sans-serif',
            minHeight: '520px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(79,142,247,0.12) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            {/* Header */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '20px', position: 'relative', zIndex: 1
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/semit-landing-page/app-icon.png" alt="Semit"
                        style={{ width: '36px', height: '36px', borderRadius: '10px' }} />
                    <span style={{ fontWeight: '800', fontSize: '18px', color: '#f0f0f8' }}>Semit</span>
                </div>
                <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(79,142,247,0.15)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '16px'
                }}>
                    ⬛
                </div>
            </div>

            {/* Hero Card */}
            <div className="mock-hero-card" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="mock-badge">⭐ SỰ KIỆN CHÍNH</div>
                    <span style={{ fontSize: '22px' }}>🎓</span>
                </div>
                <div style={{ fontWeight: '800', fontSize: '15px', color: '#f0f0f8', marginBottom: '4px', marginTop: '4px' }}>
                    Tốt nghiệp Đại học
                </div>
                <div style={{ fontSize: '11px', color: '#9999bb', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    📅 {gradDate.toLocaleDateString('vi-VN', { dateStyle: 'full' })}
                </div>
                <div style={{ textAlign: 'center', padding: '8px 0' }}>
                    <div className="mock-countdown">42</div>
                    <div className="mock-countdown-label">Ngày còn lại</div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 0' }} />
                {/* Tasks */}
                {[
                    { label: 'Hoàn thành luận văn', done: true, type: 'check' },
                    { label: 'Bảo vệ đề tài', done: false, type: 'check' },
                    { label: 'Ôn tập học phần', done: false, type: 'progress', progress: 65 },
                ].map((task, i) => (
                    <div key={i} className="mock-task-item">
                        <div className={`mock-task-icon ${task.done ? 'checked' : ''}`}>
                            {task.done && <span style={{ color: '#fff', fontSize: '10px' }}>✓</span>}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                color: task.done ? 'rgba(153,153,187,0.6)' : 'var(--text-secondary)',
                                textDecoration: task.done ? 'line-through' : 'none',
                                fontSize: '12px'
                            }}>
                                {task.label}
                            </div>
                            {task.type === 'progress' && (
                                <div className="mock-progress-bar">
                                    <div className="mock-progress-fill" style={{ width: `${task.progress}%` }} />
                                </div>
                            )}
                        </div>
                        {task.type === 'progress' && (
                            <span style={{ fontSize: '10px', color: '#4f8ef7', fontWeight: 'bold' }}>65%</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Section header */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginTop: '20px', marginBottom: '10px', position: 'relative', zIndex: 1
            }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '14px' }}>📅</span>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#9999bb', textTransform: 'uppercase', letterSpacing: '1px' }}>SẮP TỚI</span>
            </div>

            {/* List items */}
            {[
                { emoji: '🎂', title: 'Sinh nhật Mẹ', days: 12, date: 'Th3 5' },
                { emoji: '🏆', title: 'Kỳ thi IELTS', days: 28, date: 'Th3 21' },
                { emoji: '💼', title: 'Phỏng vấn thực tập', days: 7, date: 'Th2 28' },
            ].map((item, i) => (
                <div key={i} className="mock-list-item" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="mock-emoji">{item.emoji}</div>
                    <div className="mock-item-info">
                        <div className="mock-item-title">{item.title}</div>
                        <div className="mock-item-date">{item.date}</div>
                    </div>
                    <div className="mock-days-badge">
                        <span className="mock-days-number">{item.days}</span>
                        <span className="mock-days-label">Ngày</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function AppMockDetail() {
    return (
        <div style={{
            background: '#0a0a0f',
            borderRadius: '32px',
            padding: '24px 16px',
            fontFamily: 'Inter, sans-serif',
            minHeight: '520px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            {/* Back header */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '20px', position: 'relative', zIndex: 1
            }}>
                <span style={{ color: '#4f8ef7', fontSize: '18px' }}>←</span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#f0f0f8' }}>Chi tiết cột mốc</span>
            </div>

            {/* Detail card */}
            <div style={{
                background: 'linear-gradient(145deg, rgba(79,142,247,0.12), rgba(99,102,241,0.06))',
                border: '1px solid rgba(79,142,247,0.25)',
                borderRadius: '24px',
                padding: '24px',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{ fontSize: '40px', textAlign: 'center', marginBottom: '8px' }}>🏆</div>
                <div style={{ fontWeight: '800', fontSize: '18px', color: '#f0f0f8', textAlign: 'center', marginBottom: '4px' }}>
                    Kỳ thi IELTS
                </div>
                <div style={{ fontSize: '12px', color: '#9999bb', textAlign: 'center', marginBottom: '20px' }}>
                    Thứ Sáu, ngày 21 tháng 3 năm 2025
                </div>

                {/* Progress circle mock */}
                <div style={{ textAlign: 'center', margin: '16px 0' }}>
                    <div style={{
                        width: '100px', height: '100px',
                        borderRadius: '50%',
                        border: '4px solid rgba(79,142,247,0.2)',
                        borderTopColor: '#4f8ef7',
                        borderRightColor: '#4f8ef7',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 30px rgba(79,142,247,0.2)',
                    }}>
                        <span style={{ fontSize: '26px', fontWeight: '900', color: '#4f8ef7', lineHeight: '1' }}>28</span>
                        <span style={{ fontSize: '9px', color: '#9999bb', textTransform: 'uppercase', letterSpacing: '1px' }}>ngày</span>
                    </div>
                </div>

                {/* Stats row */}
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px' }}>
                    {[
                        { label: 'Đã qua', value: '12 ngày' },
                        { label: 'Còn lại', value: '28 ngày' },
                        { label: 'Tiến độ', value: '30%' },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: '#f0f0f8' }}>{stat.value}</div>
                            <div style={{ fontSize: '10px', color: '#555577' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tasks section */}
            <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '16px',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#9999bb', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                    📋 Nhiệm vụ
                </div>
                {[
                    { label: 'Luyện Listening', progress: 80 },
                    { label: 'Ôn Writing Task 2', progress: 45 },
                    { label: 'Học từ vựng chủ đề', progress: 60 },
                ].map((task, i) => (
                    <div key={i} className="mock-task-item">
                        <span style={{ fontSize: '14px' }}>📊</span>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{task.label}</div>
                            <div className="mock-progress-bar">
                                <div className="mock-progress-fill" style={{ width: `${task.progress}%` }} />
                            </div>
                        </div>
                        <span style={{ fontSize: '10px', color: '#4f8ef7', fontWeight: 'bold' }}>{task.progress}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function AppMockWidget() {
    return (
        <div style={{
            background: '#0a0a0f',
            borderRadius: '32px',
            padding: '24px 16px',
            fontFamily: 'Inter, sans-serif',
            minHeight: '520px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(52,211,153,0.08) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '20px', position: 'relative', zIndex: 1
            }}>
                <span style={{ fontSize: '18px' }}>⬛</span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#f0f0f8' }}>Xem trước Widget</span>
            </div>

            {/* 4x3 Widget */}
            <div style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                border: '1px solid rgba(79,142,247,0.2)',
                borderRadius: '24px',
                padding: '20px',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{ fontSize: '10px', color: '#9999bb', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    WIDGET 4×3
                </div>
                {/* Main milestone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '28px' }}>🎓</span>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '14px', color: '#f0f0f8' }}>Tốt nghiệp</div>
                        <div style={{ fontSize: '10px', color: '#9999bb' }}>Còn 42 ngày</div>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontSize: '28px', fontWeight: '900', color: '#4f8ef7', lineHeight: '1' }}>42</div>
                        <div style={{ fontSize: '8px', color: '#9999bb', textTransform: 'uppercase' }}>ngày</div>
                    </div>
                </div>
                {/* Progress bars */}
                {[
                    { label: '🎂 Sinh nhật Mẹ', days: 12, progress: 72 },
                    { label: '🏆 Kỳ thi IELTS', days: 28, progress: 30 },
                    { label: '💼 Phỏng vấn', days: 7, progress: 85 },
                ].map((item, i) => (
                    <div key={i} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                            <span style={{ fontSize: '11px', color: '#9999bb' }}>{item.label}</span>
                            <span style={{ fontSize: '11px', color: '#4f8ef7', fontWeight: '600' }}>{item.days}d</span>
                        </div>
                        <div className="mock-progress-bar">
                            <div className="mock-progress-fill" style={{ width: `${item.progress}%` }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* 2x2 Widget */}
            <div style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
                <div style={{
                    width: '130px',
                    height: '130px',
                    background: 'linear-gradient(145deg, rgba(79,142,247,0.15), rgba(99,102,241,0.08))',
                    border: '1px solid rgba(79,142,247,0.25)',
                    borderRadius: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px',
                }}>
                    <span style={{ fontSize: '8px', color: '#9999bb', marginBottom: '4px', textAlign: 'center', lineHeight: 1.3 }}>Tốt nghiệp</span>
                    <span style={{ fontSize: '28px', marginBottom: '4px' }}>🎓</span>
                    <div style={{ fontSize: '28px', fontWeight: '900', color: '#4f8ef7', lineHeight: '1' }}>42</div>
                    <div style={{ fontSize: '8px', color: '#9999bb', textTransform: 'uppercase', letterSpacing: '1px' }}>ngày</div>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{
                        fontSize: '10px', color: '#9999bb',
                        marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px'
                    }}>WIDGET 2×2</div>
                    <p style={{ fontSize: '12px', color: '#555577', lineHeight: '1.6' }}>
                        Đặt widget nhỏ gọn trên màn hình chính và theo dõi đếm ngược cho một cột mốc cụ thể bất kỳ lúc nào.
                    </p>
                </div>
            </div>
        </div>
    )
}
