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


// export default function Header() {
//   return (
//     <header className="w-full bg-black text-light shadow-gold sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
//         {/* Logo */}
//         <div className="flex flex-col">
//           <h1 className="text-2xl font-bold text-gold tracking-widest leading-none">
//             MAVI GOLD
//           </h1>
//           <span className="text-[10px] text-gold/70 tracking-[0.2em]">GALLERY</span>
//         </div>

//         {/* Menu - Hidden on Mobile, Visible on Desktop */}
//         <nav className="hidden md:flex gap-8 text-sm font-medium">
//           <a href="#" className="hover:text-gold transition-colors">خانه</a>
//           <a href="#" className="hover:text-gold transition-colors">محصولات</a>
//           <a href="#" className="hover:text-gold transition-colors">دسته‌بندی‌ها</a>
//           <a href="#" className="hover:text-gold transition-colors">تماس با ما</a>
//         </nav>

//         {/* Cart & Actions */}
//         <div className="flex items-center gap-4">
//           <div className="text-gold text-xl cursor-pointer hover:scale-110 transition-transform">
//             🛒
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gold/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
        
        {/* جستجو یا منوی جانبی */}
        <div className="hidden md:block text-sm tracking-widest text-gray-500 uppercase cursor-pointer hover:text-gold transition">
          جستجو
        </div>

        {/* Logo - مرکز سایت */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-serif tracking-[0.3em] text-dark font-light">
            MAVI GOLD
          </h1>
          <span className="text-[9px] text-gold tracking-[0.5em] mt-1 uppercase">High Jewelry</span>
        </div>

        {/* Cart & Menu */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.2em] text-gray-600">
            <a href="#" className="hover:text-gold transition">مجموعه‌ها</a>
            <a href="#" className="hover:text-gold transition">هدیه‌ها</a>
          </nav>
          <div className="relative cursor-pointer">
            <span className="text-xl text-dark">👜</span>
            <span className="absolute -top-2 -right-2 bg-gold text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </header>
  );
}