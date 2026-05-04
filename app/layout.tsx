import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mavi Gold Gallery',
  description: 'A jewelry shop website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-50 text-slate-900 overflow-x-hidden antialiased">
        <Header />
        {/* اضافه کردن کلاس container برای وسط‌چین کردن کل محتوا */}
        {/* <main className="container mx-auto min-h-screen px-4 py-8">
          {children}
        </main> */}
        {<main className="container mx-auto px-4 py-8">
          {children}
        </main>}
        <Footer />
      </body>
    </html>
  );
}