import HeroBanner from "@/components/HeroBanner";
import CategorySlider from "@/components/CategorySlider";
import ProductCard from "@/components/ProductCard";

async function getFeaturedProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
      cache: "no-store",
    });
    const data = await res.json();
    return Array.isArray(data) ? data.slice(0, 8) : [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="flex flex-col">
      <HeroBanner />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-8 mb-12">
            <h3 className="text-2xl font-light tracking-wider">دسته‌بندی‌های خاص</h3>
          </div>
          <CategorySlider />
        </div>
      </section>

      {products.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-light tracking-widest text-dark uppercase">
                محصولات ویژه
              </h2>
              <a href="/category/all" className="text-xs border-b border-gold pb-1 text-gold hover:opacity-70 transition">
                مشاهده همه
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((p: any) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {products.length === 0 && (
        <section className="py-20 bg-gray-50 text-center">
          <div className="max-w-md mx-auto">
            <p className="text-gray-400 text-sm mb-4">هنوز محصولی اضافه نشده</p>
            <p className="text-gray-300 text-xs">برای شروع، از پنل ادمین محصول اضافه کنید</p>
          </div>
        </section>
      )}

      {/* بخش ویژگی‌ها */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-gold text-3xl mb-4">✦</div>
            <h4 className="tracking-widest text-sm uppercase mb-2">ارسال رایگان</h4>
            <p className="text-white/40 text-xs">برای سفارش‌های بالای ۵۰۰ هزار تومان</p>
          </div>
          <div>
            <div className="text-gold text-3xl mb-4">◈</div>
            <h4 className="tracking-widest text-sm uppercase mb-2">ضمانت اصالت</h4>
            <p className="text-white/40 text-xs">تمامی محصولات دارای گواهی اصالت</p>
          </div>
          <div>
            <div className="text-gold text-3xl mb-4">◇</div>
            <h4 className="tracking-widest text-sm uppercase mb-2">پشتیبانی ۲۴/۷</h4>
            <p className="text-white/40 text-xs">همیشه در کنار شما هستیم</p>
          </div>
        </div>
      </section>
    </div>
  );
}
