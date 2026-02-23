import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Telescope } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <div className="page-layout">
            <Navbar />
            <main className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '75vh', padding: '64px 0' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
                    <div style={{
                        width: '80px', height: '80px',
                        borderRadius: '24px',
                        background: 'rgba(79,142,247,0.1)',
                        border: '1px solid rgba(79,142,247,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 24px',
                        boxShadow: 'var(--shadow-glow)'
                    }}>
                        <Telescope size={40} color="var(--accent-primary)" />
                    </div>

                    <h1 className="gradient-text" style={{ fontSize: '96px', lineHeight: '1', marginBottom: '16px', letterSpacing: '-2px', fontWeight: '900' }}>
                        404
                    </h1>

                    <h2 style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '700' }}>
                        Có vẻ bạn đã bị lạc...
                    </h2>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '36px', lineHeight: '1.6' }}>
                        Trang bạn đang tìm kiếm không tồn tại, đã bị gỡ bỏ, đổi tên hoặc tạm thời không thể truy cập. Vui lòng kiểm tra lại đường dẫn.
                    </p>

                    <Link to="/" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', padding: '14px 36px', fontSize: '16px' }}>
                        Quay lại Trang chủ
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
