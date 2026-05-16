import ProductCard from "@/components/ProductCard";

async function getProducts(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
      cache: "no-store",
    });
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    if (slug === "all") return data;
    return data.filter((p: any) => 
      p.category?.slug === slug || 
      p.category?.name === slug
    );
  } catch {
    return [];
  }
}

const categoryNames: Record<string, string> = {
  all: "همه محصولات",
  Necklaces: "گردنبند",
  Rings: "انگشتر",
  Bracelets: "دستبند",
  Earrings: "گوشواره",
};

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await getProducts(params.slug);
  const title = categoryNames[params.slug] || params.slug;

  return (
    <div className="min-h-screen">
      <div className="bg-dark text-white py-16 text-center">
        <p className="text-gold text-xs tracking-widest uppercase mb-3">کلکسیون</p>
        <h1 className="text-4xl font-light tracking-widest">{title}</h1>
        <p className="text-white/40 text-sm mt-3">{products.length} محصول</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">محصولی در این دسته‌بندی یافت نشد</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p: any) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
