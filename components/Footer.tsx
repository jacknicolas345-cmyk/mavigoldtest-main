import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-gold font-serif tracking-widest text-xl mb-4">MAVI GOLD</h3>
          <p className="text-sm leading-7 text-white/50">
            جواهرات لوکس و منحصربه‌فرد برای لحظه‌های خاص زندگی شما.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-4">دسترسی سریع</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-gold transition">خانه</Link></li>
            <li><Link href="/category/all" className="hover:text-gold transition">همه محصولات</Link></li>
            <li><Link href="/cart" className="hover:text-gold transition">سبد خرید</Link></li>
            <li><Link href="/login" className="hover:text-gold transition">ورود / ثبت‌نام</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-4">تماس با ما</h4>
          <ul className="space-y-3 text-sm">
            <li>📞 021-12345678</li>
            <li>📧 info@mavigold.ir</li>
            <li>📍 تهران، خیابان ولیعصر</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/30">
        © {new Date().getFullYear()} Mavi Gold — تمامی حقوق محفوظ است
      </div>
    </footer>
  );
}
