export default function Header() {
  return (
    <header className="w-full bg-black text-light shadow-gold">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gold tracking-widest">
          MAVI GOLD
        </h1>
        <div className="bg-black text-gold p-4">تست رنگ‌ها</div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
          <a className="hover:text-gold transition">خانه</a>
          <a className="hover:text-gold transition">محصولات</a>
          <a className="hover:text-gold transition">دسته‌بندی‌ها</a>
          <a className="hover:text-gold transition">تماس با ما</a>
        </nav>

        {/* Cart */}
        <div className="text-gold text-xl cursor-pointer hover:scale-110 transition">
          🛒
        </div>
      </div>
    </header>
  );
}
