async function getProduct(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/slug/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          className="w-full rounded-lg shadow"
          alt={product.title}
        />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-xl text-amber-700 font-bold">
            {product.price.toLocaleString("fa-IR")} تومان
          </p>

          <p className="text-gray-700">{product.description}</p>

          <button className="bg-black text-white px-6 py-3 rounded">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
