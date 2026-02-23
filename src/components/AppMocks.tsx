import {
    LayoutGrid,
    CheckSquare,
    Square,
    CircleDashed,
    Star,
    Clock,
    ArrowLeft,
    MoreVertical,
    Pin,
    Pencil
} from 'lucide-react';

// Mock app UI components for the landing page preview

export function AppMockHome() {
    const today = new Date()
    const gradDate = new Date(today)
    gradDate.setDate(today.getDate() + 42)

    return (
        <div style={{
            background: '#121212',
            borderRadius: '32px',
            padding: '24px 16px',
            fontFamily: 'Inter, sans-serif',
            minHeight: '520px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Header */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '20px', position: 'relative', zIndex: 1
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/app-icon.png" alt="Semit"
                        style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
                    <span style={{ fontWeight: '800', fontSize: '18px', color: '#E6E1E5' }}>Semit</span>
                </div>
                <div style={{
                    width: '32px', height: '32px', borderRadius: '10px',
                    background: 'rgba(208,188,255,0.15)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: '#D0BCFF'
                }}>
                    <LayoutGrid size={18} />
                </div>
            </div>

            {/* Hero Card */}
            <div className="mock-hero-card" style={{ position: 'relative', zIndex: 1, padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div className="mock-badge" style={{ background: 'rgba(208,188,255,0.15)', color: '#D0BCFF', border: 'none', padding: '6px 12px', letterSpacing: '0.3px', fontSize: '10px' }}>SỰ KIỆN CHÍNH</div>
                    <span style={{ fontSize: '24px' }}>🎓</span>
                </div>
                <div style={{ fontWeight: '800', fontSize: '18px', color: '#E6E1E5', marginBottom: '8px' }}>
                    Tốt nghiệp Đại học
                </div>
                <div style={{ fontSize: '13px', color: '#938F99', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} /> {gradDate.toLocaleDateString('vi-VN', { dateStyle: 'full' })}
                </div>
                <div style={{ textAlign: 'center', padding: '8px 0', marginTop: '16px', marginBottom: '12px' }}>
                    <div className="mock-countdown" style={{ color: '#D0BCFF', background: 'none', fontSize: '64px', fontWeight: '900', WebkitTextFillColor: '#D0BCFF' }}>42</div>
                    <div className="mock-countdown-label" style={{ letterSpacing: '4px', opacity: 0.8, color: '#E6E1E5', marginTop: '8px' }}>NGÀY CÒN LẠI</div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '12px 0' }} />
                {/* Tasks */}
                {[
                    { label: 'Hoàn thành luận văn', done: true, type: 'check' },
                    { label: 'Bảo vệ đề tài', done: false, type: 'check' },
                    { label: 'Ôn tập học phần', done: false, type: 'progress', progress: 65 },
                ].map((task, i) => (
                    <div key={i} className="mock-task-item" style={{ borderTop: 'none', padding: '6px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ color: task.done ? '#D0BCFF' : '#938F99', display: 'flex' }}>
                            {task.type === 'check' ? (task.done ? <CheckSquare size={18} /> : <Square size={18} />) : <CircleDashed size={18} />}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                color: task.done ? 'rgba(230,225,229,0.6)' : '#E6E1E5',
                                textDecoration: task.done ? 'line-through' : 'none',
                                fontSize: '13px',
                                fontWeight: '500'
                            }}>
                                {task.label}
                            </div>
                            {task.type === 'progress' && (
                                <div style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden', marginTop: '4px' }}>
                                    <div style={{ height: '100%', width: `${task.progress}%`, background: '#D0BCFF', borderRadius: '2px' }} />
                                </div>
                            )}
                        </div>
                        {task.type === 'progress' && (
                            <span style={{ fontSize: '11px', color: '#D0BCFF', fontWeight: 'bold' }}>65%</span>
                        )}
                    </div>
                ))}
            </div>

            {/* QUAN TRỌNG Section */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginTop: '24px', marginBottom: '12px', position: 'relative', zIndex: 1
            }}>
                <Star size={16} color="#D0BCFF" />
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#D0BCFF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>QUAN TRỌNG</span>
            </div>

            {/* List items */}
            {[
                { emoji: '🎂', title: 'Sinh nhật Mẹ', days: 12, date: '15 thg 3' },
            ].map((item, i) => (
                <div key={i} className="mock-list-item" style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', border: 'none', borderRadius: '20px', padding: '16px' }}>
                    <div className="mock-emoji" style={{ fontSize: '24px', marginRight: '16px', width: 'auto' }}>{item.emoji}</div>
                    <div className="mock-item-info">
                        <div className="mock-item-title" style={{ fontSize: '15px', color: '#D0BCFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {item.title}
                            <Star size={12} fill="#D0BCFF" color="#D0BCFF" />
                        </div>
                        <div className="mock-item-date" style={{ fontSize: '12px', color: '#938F99' }}>{item.date}</div>
                    </div>
                    <div className="mock-days-badge" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #D0BCFF', borderRadius: '16px', minWidth: '60px', padding: '6px 12px' }}>
                        <span className="mock-days-number" style={{ color: '#D0BCFF', fontSize: '20px' }}>{item.days}</span>
                        <span className="mock-days-label" style={{ color: '#D0BCFF', fontSize: '8px', textTransform: 'uppercase' }}>Ngày</span>
                    </div>
                </div>
            ))}

            {/* SẮP TỚI Section */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginTop: '16px', marginBottom: '12px', position: 'relative', zIndex: 1
            }}>
                <Clock size={16} color="#938F99" />
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#938F99', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SẮP TỚI</span>
            </div>
            {[
                { emoji: '💼', title: 'Phỏng vấn', days: 7, date: '28 thg 2' },
            ].map((item, i) => (
                <div key={i} className="mock-list-item" style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.02)', border: 'none', borderRadius: '20px', padding: '16px', marginBottom: '16px' }}>
                    <div className="mock-emoji" style={{ fontSize: '24px', marginRight: '16px', width: 'auto' }}>{item.emoji}</div>
                    <div className="mock-item-info">
                        <div className="mock-item-title" style={{ fontSize: '15px', color: '#E6E1E5' }}>{item.title}</div>
                        <div className="mock-item-date" style={{ fontSize: '12px', color: '#938F99' }}>{item.date}</div>
                    </div>
                    <div className="mock-days-badge" style={{ background: 'transparent', border: '1px solid #444', borderRadius: '16px', minWidth: '60px', padding: '6px 12px' }}>
                        <span className="mock-days-number" style={{ color: '#E6E1E5', fontSize: '20px' }}>{item.days}</span>
                        <span className="mock-days-label" style={{ color: '#938F99', fontSize: '8px', textTransform: 'uppercase' }}>Ngày</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function AppMockDetail() {
    return (
        <div style={{
            background: '#121212',
            borderRadius: '32px',
            padding: '24px 16px',
            fontFamily: 'Inter, sans-serif',
            minHeight: '520px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Header */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '20px', position: 'relative', zIndex: 1, padding: '0 4px'
            }}>
                <ArrowLeft size={24} color="#D0BCFF" />
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#E6E1E5' }}>Chi tiết cột mốc</span>
                <MoreVertical size={24} color="#E6E1E5" />
            </div>

            {/* Info Card */}
            <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '24px',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '64px', height: '64px', borderRadius: '32px',
                    background: 'rgba(255,193,7,0.15)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    marginBottom: '12px'
                }}>
                    <span style={{ fontSize: '32px' }}>🏆</span>
                </div>
                <div style={{ fontWeight: '700', fontSize: '20px', color: '#E6E1E5', textAlign: 'center', marginBottom: '6px' }}>
                    Kỳ thi IELTS
                </div>
                <div style={{ fontSize: '13px', color: '#938F99', textAlign: 'center', marginBottom: '20px' }}>
                    Thứ Sáu, 21 tháng 3 năm 2025
                </div>

                {/* Countdown Circle */}
                <div style={{
                    width: '110px', height: '110px', borderRadius: '55px',
                    border: '8px solid #333', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px'
                }}>
                    <div style={{
                        width: '86px', height: '86px', borderRadius: '43px',
                        border: '4px solid #D0BCFF', display: 'flex',
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ fontSize: '30px', fontWeight: '800', color: '#D0BCFF', lineHeight: '1.2' }}>28</span>
                        <span style={{ fontSize: '10px', fontWeight: '600', color: '#938F99', letterSpacing: '1px' }}>NGÀY</span>
                    </div>
                </div>

                {/* Stats row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 8px' }}>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '15px', fontWeight: '700', color: '#E6E1E5', marginBottom: '2px' }}>12 ngày</div>
                        <div style={{ fontSize: '11px', color: '#938F99' }}>Đã qua</div>
                    </div>
                    <div style={{ width: '1px', background: '#444', height: '24px', alignSelf: 'center' }} />
                    <div style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '15px', fontWeight: '700', color: '#E6E1E5', marginBottom: '2px' }}>28 ngày</div>
                        <div style={{ fontSize: '11px', color: '#938F99' }}>Còn lại</div>
                    </div>
                    <div style={{ width: '1px', background: '#444', height: '24px', alignSelf: 'center' }} />
                    <div style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '15px', fontWeight: '700', color: '#E6E1E5', marginBottom: '2px' }}>30%</div>
                        <div style={{ fontSize: '11px', color: '#938F99' }}>Tiến độ</div>
                    </div>
                </div>
            </div>

            {/* Tasks section */}
            <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '16px',
                position: 'relative',
                zIndex: 1,
                marginBottom: '8px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'center' }}>
                    <div style={{ fontWeight: '600', fontSize: '15px', color: '#E6E1E5' }}>Luyện Listening</div>
                    <div style={{ display: 'flex', gap: '8px', color: '#938F99', alignItems: 'center' }}>
                        <Pin size={16} color="#D0BCFF" fill="#D0BCFF" />
                        <Pencil size={18} color="#938F99" />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', color: '#E6E1E5' }}>Tiến độ: 80/100</span>
                    <span style={{ fontSize: '11px', color: '#E6E1E5' }}>80%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                    <div style={{ height: '100%', width: '80%', background: '#D0BCFF', borderRadius: '3px' }} />
                </div>
                <div style={{ textAlign: 'center', fontSize: '10px', color: '#938F99', marginTop: '6px' }}>Chạm để cập nhật</div>
            </div>

            <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '16px',
                position: 'relative',
                zIndex: 1,
                marginBottom: '16px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'center' }}>
                    <div style={{ fontWeight: '600', fontSize: '15px', color: '#E6E1E5' }}>Ôn Writing Task 2</div>
                    <div style={{ display: 'flex', gap: '8px', color: '#938F99', alignItems: 'center' }}>
                        <Pencil size={18} color="#938F99" />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Square size={18} color="#938F99" />
                    <span style={{ fontSize: '13px', color: '#E6E1E5' }}>Chưa hoàn thành</span>
                </div>
            </div>
        </div>
    )
}

export function AppMockWidget() {
    return (
        <div style={{
            background: '#121212',
            borderRadius: '32px',
            padding: '24px 16px',
            fontFamily: 'Inter, sans-serif',
            minHeight: '520px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '20px', position: 'relative', zIndex: 1
            }}>
                <LayoutGrid size={20} color="#D0BCFF" />
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#E6E1E5' }}>Xem trước Widget</span>
            </div>

            <div style={{ fontSize: '12px', color: '#D0BCFF', marginBottom: '8px', fontWeight: '600' }}>Widget 4x3</div>

            {/* 4x3 Widget */}
            <div style={{
                background: 'linear-gradient(to bottom right, #2C2B30, #141317)',
                border: '1.5px solid #444',
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '24px',
                position: 'relative',
                zIndex: 1,
            }}>
                {/* Top Row */}
                <div style={{ display: 'flex', marginBottom: '12px' }}>
                    {/* Left Col */}
                    <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ background: '#49454F', borderRadius: '14px', padding: '10px 12px', textAlign: 'center' }}>
                            <div style={{ color: '#CAC4D0', fontSize: '15px', fontWeight: 'bold' }}>03/2025</div>
                            <div style={{ color: '#E6E1E5', fontSize: '36px', fontWeight: 'bold', lineHeight: '1.1' }}>21</div>
                        </div>
                    </div>
                    {/* Right Col */}
                    <div style={{ flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ color: '#E6E1E5', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
                            🎓 Tốt nghiệp
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '24px', border: '2px solid #CF6679', background: '#2D191D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '6px' }}>
                                <span style={{ color: '#FFB3B9', fontSize: '20px', fontWeight: 'bold' }}>42</span>
                            </div>
                            <span style={{ color: '#CAC4D0', fontSize: '14px', fontWeight: '500' }}>ngày</span>
                        </div>
                    </div>
                </div>

                {/* Tasks row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#938F99', fontSize: '10px', fontWeight: 'bold' }}>Nhiệm vụ</span>
                    <span style={{ color: '#E6E1E5', fontSize: '10px', fontWeight: 'bold' }}>1/3 đã hoàn thành</span>
                </div>
                <div style={{ background: '#2b2930', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <Square size={14} color="#938F99" style={{ marginRight: '6px' }} />
                    <span style={{ color: '#E6E1E5', fontSize: '11px', fontWeight: '500', flex: 1 }}>Hoàn thành luận văn...</span>
                    <span style={{ color: '#938F99', fontSize: '10px', marginLeft: '8px' }}>| +1 NV khác</span>
                </div>

                <div style={{ height: '1px', background: '#3A3740', marginBottom: '8px' }} />

                {/* Progress bars */}
                {[
                    { label: '🎂 Sinh nhật Mẹ', date: '05/03', progress: 14 },
                    { label: '🏆 Kỳ thi IELTS', date: '21/03', progress: 6 },
                ].map((item, i) => (
                    <div key={i} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                            <span style={{ fontSize: '12px', color: '#E6E1E5', fontWeight: '500' }}>{item.label}</span>
                            <span style={{ fontSize: '11px', color: '#938F99' }}>{item.date}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '2px' }}>
                            {Array.from({ length: 20 }).map((_, j) => (
                                <div key={j} style={{ flex: 1, height: '6px', borderRadius: '2px', background: j < item.progress ? '#D0BCFF' : '#3A3740' }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ fontSize: '12px', color: '#D0BCFF', marginBottom: '8px', fontWeight: '600' }}>Widget 2x2</div>

            {/* 2x2 Widget */}
            <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
                <div style={{
                    width: '140px',
                    height: '140px',
                    background: 'linear-gradient(to bottom right, #2C2B30, #141317)',
                    border: '1.5px solid #444',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '24px', marginRight: '8px' }}>🎓</span>
                        <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#E6E1E5', maxWidth: '80px', textAlign: 'center' }}>Tốt nghiệp</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '28px', borderWidth: '3px',
                            borderColor: '#CF6679', backgroundColor: '#2D191D',
                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <span style={{ color: '#FFB3B9', fontSize: '22px', fontWeight: 'bold' }}>42</span>
                        </div>
                        <span style={{ color: '#938F99', fontSize: '14px', fontWeight: '500', marginLeft: '6px', marginBottom: '6px' }}>
                            ngày
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
