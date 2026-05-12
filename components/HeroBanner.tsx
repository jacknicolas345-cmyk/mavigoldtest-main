import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-[#0f0f0f] overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#c5a059_0%,_transparent_70%)]" />
      <div className="relative z-10 text-center space-y-6 px-4">
        <span className="text-gold tracking-[0.4em] text-xs uppercase block">New Collection 2025</span>
        <h1 className="text-white text-5xl md:text-7xl font-extralight tracking-tight leading-tight">
          هنرِ درخشش در <br />
          <span className="italic text-gold/80">جزئیات</span>
        </h1>
        <p className="text-white/50 text-sm max-w-md mx-auto leading-7">
          کلکسیون جدید ماوی گلد — جواهراتی که داستان شما را روایت می‌کنند
        </p>
        <div className="pt-6 flex gap-4 justify-center">
          <Link
            href="/category/all"
            className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-500 tracking-[0.2em] text-xs uppercase"
          >
            مشاهده کلکسیون
          </Link>
          <Link
            href="/category/Necklaces"
            className="px-10 py-4 bg-white/5 text-white hover:bg-white/10 transition-all duration-500 tracking-[0.2em] text-xs uppercase border border-white/10"
          >
            گردنبندها
          </Link>
        </div>
      </div>
    </section>
  );
}
