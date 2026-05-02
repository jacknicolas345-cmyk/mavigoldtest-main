import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Mavi Gold
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/">خانه</Link>
          <Link href="/category/rings">انگشتر</Link>
          <Link href="/category/necklaces">گردنبند</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
          <Link href="/cart">سبد خرید</Link>
        </nav>
      </div>
    </header>
  );
}
