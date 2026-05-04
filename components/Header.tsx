// export default function Header() {
//   return (
//     <header className="w-full bg-black text-light shadow-gold">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-gold tracking-widest">
//           MAVI GOLD
//         </h1>
//         <div className="bg-black text-gold p-4">تست رنگ‌ها</div>

//         {/* Menu */}
//         <nav className="hidden md:flex gap-8 text-lg">
//           <a className="hover:text-gold transition">خانه</a>
//           <a className="hover:text-gold transition">محصولات</a>
//           <a className="hover:text-gold transition">دسته‌بندی‌ها</a>
//           <a className="hover:text-gold transition">تماس با ما</a>
//         </nav>

//         {/* Cart */}
//         <div className="text-gold text-xl cursor-pointer hover:scale-110 transition">
//           🛒
//         </div>
//       </div>
//     </header>
//   );
// }


export default function Header() {
  return (
    <header className="w-full bg-black text-light shadow-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gold tracking-widest leading-none">
            MAVI GOLD
          </h1>
          <span className="text-[10px] text-gold/70 tracking-[0.2em]">GALLERY</span>
        </div>

        {/* Menu - Hidden on Mobile, Visible on Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-gold transition-colors">خانه</a>
          <a href="#" className="hover:text-gold transition-colors">محصولات</a>
          <a href="#" className="hover:text-gold transition-colors">دسته‌بندی‌ها</a>
          <a href="#" className="hover:text-gold transition-colors">تماس با ما</a>
        </nav>

        {/* Cart & Actions */}
        <div className="flex items-center gap-4">
          <div className="text-gold text-xl cursor-pointer hover:scale-110 transition-transform">
            🛒
          </div>
        </div>
      </div>
    </header>
  );
}