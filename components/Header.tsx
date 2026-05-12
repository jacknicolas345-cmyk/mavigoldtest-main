"use client";

import Link from "next/link";
import { useCart } from "@/lib/context/CartContext";
import { useAuth } from "@/lib/context/AuthContext";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gold/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">

        {/* منوی موبایل */}
        <button
          className="md:hidden text-gray-600 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* لوگو */}
        <Link href="/" className="flex flex-col items-center">
          <span className="text-2xl font-serif tracking-[0.3em] text-dark font-light">MAVI GOLD</span>
          <span className="text-[9px] text-gold tracking-[0.5em] uppercase">High Jewelry</span>
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] text-gray-600">
          <Link href="/" className="hover:text-gold transition">خانه</Link>
          <Link href="/category/all" className="hover:text-gold transition">محصولات</Link>
          <Link href="/category/Necklaces" className="hover:text-gold transition">گردنبند</Link>
          <Link href="/category/Rings" className="hover:text-gold transition">انگشتر</Link>
        </nav>

        {/* سبد و اکانت */}
        <div className="flex items-center gap-5">
          {user ? (
            <div className="hidden md:flex items-center gap-4 text-xs text-gray-600">
              <Link href="/profile" className="hover:text-gold transition">پروفایل</Link>
              <button onClick={logout} className="hover:text-red-500 transition">خروج</button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4 text-xs text-gray-600">
              <Link href="/login" className="hover:text-gold transition">ورود</Link>
              <Link href="/register" className="hover:text-gold transition border border-gold/40 px-3 py-1 rounded">ثبت‌نام</Link>
            </div>
          )}

          <Link href="/cart" className="relative cursor-pointer">
            <span className="text-xl text-dark">👜</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* منوی موبایل باز شده */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>خانه</Link>
          <Link href="/category/all" onClick={() => setMenuOpen(false)}>همه محصولات</Link>
          <Link href="/category/Necklaces" onClick={() => setMenuOpen(false)}>گردنبند</Link>
          <Link href="/category/Rings" onClick={() => setMenuOpen(false)}>انگشتر</Link>
          {user ? (
            <>
              <Link href="/profile" onClick={() => setMenuOpen(false)}>پروفایل</Link>
              <button onClick={() => { logout(); setMenuOpen(false); }} className="text-right text-red-500">خروج</button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)}>ورود</Link>
              <Link href="/register" onClick={() => setMenuOpen(false)}>ثبت‌نام</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
