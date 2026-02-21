# Semit Landing Page

Trang landing page giới thiệu ứng dụng **Semit** - Milestone Tracker cho Android.

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **React Router DOM** v7
- **Framer Motion** (animations)
- **Lucide React** (icons)
- Vanilla CSS với dark theme glassmorphism

## Phát triển local

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## Deploy lên GitHub Pages

### Tự động (khuyến nghị)

1. Push code lên GitHub repository
2. Vào **Settings → Pages → Source** chọn **GitHub Actions**
3. Mỗi lần push lên nhánh `main`, GitHub Actions sẽ tự động build và deploy

### Thủ công

```bash
npm run build
# Upload thư mục dist/ lên nhánh gh-pages
```

## Cấu trúc

```
semit-landing-page/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   └── AppMocks.tsx     # App UI mockups
│   ├── pages/
│   │   ├── LandingPage.tsx  # Trang chủ
│   │   ├── PrivacyPage.tsx  # Chính sách bảo mật
│   │   └── TermsPage.tsx    # Điều khoản sử dụng
│   ├── App.tsx              # Router
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── app-icon.png
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions
└── vite.config.ts
```

## Lưu ý

- **`base` trong `vite.config.ts`**: Đặt là `/semit-landing-page/` - tên repository GitHub của bạn
- **`basename` trong `main.tsx`**: Phải khớp với base URL
- **Icon paths**: Dùng `/semit-landing-page/app-icon.png` (absolute path với base)

## Trang

| Route        | Nội dung                |
|-------------|------------------------|
| `/`         | Landing page chính      |
| `/privacy`  | Chính sách bảo mật      |
| `/terms`    | Điều khoản sử dụng      |
