async function getCategoryProducts(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-store",
  });
  const all = await res.json();
  return all.filter((p) => p.category?.slug === slug);
}

export default async function CategoryPage({ params }) {
  const products = await getCategoryProducts(params.slug);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">دسته: {params.slug}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
