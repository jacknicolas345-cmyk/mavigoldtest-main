"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/lib/context/CartContext";
import Link from "next/link";

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`/api/products/slug/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const handleAdd = () => {
    if (!product) return;
    addToCart({ _id: product._id, title: product.title, price: product.price, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gold text-2xl animate-pulse">در حال بارگذاری...</div>
    </div>
  );

  if (!product || product.error) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-gray-500">محصول یافت نشد</p>
      <Link href="/" className="text-gold text-sm border-b border-gold">بازگشت به خانه</Link>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* تصویر */}
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image || `https://placehold.co/600x600/1a1a1a/c5a059?text=${encodeURIComponent(product.title)}`}
            alt={product.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/600x600/1a1a1a/c5a059?text=${encodeURIComponent(product.title)}`;
            }}
          />
        </div>

        {/* اطلاعات */}
        <div className="flex flex-col justify-center space-y-6">
          {product.category && (
            <Link
              href={`/category/${product.category.slug}`}
              className="text-gold text-xs tracking-widest uppercase hover:opacity-70 transition"
            >
              {product.category.name}
            </Link>
          )}

          <h1 className="text-3xl font-light tracking-wide text-dark">{product.title}</h1>

          <div className="h-[1px] bg-gold/20" />

          <p className="text-2xl font-bold text-gold">
            {product.price?.toLocaleString("fa-IR")} تومان
          </p>

          {product.description && (
            <p className="text-gray-500 text-sm leading-8">{product.description}</p>
          )}

          {product.stock !== undefined && (
            <p className="text-xs text-gray-400">
              {product.stock > 0 ? `${product.stock} عدد در انبار` : "ناموجود"}
            </p>
          )}

          <button
            onClick={handleAdd}
            disabled={product.stock === 0}
            className={`w-full py-4 tracking-widest text-xs uppercase transition-all duration-300 ${
              added
                ? "bg-green-600 text-white"
                : product.stock === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "border border-gold text-gold hover:bg-gold hover:text-white"
            }`}
          >
            {added ? "✓ به سبد اضافه شد" : product.stock === 0 ? "ناموجود" : "افزودن به سبد خرید"}
          </button>

          <Link href="/cart" className="text-center text-xs text-gray-400 hover:text-gold transition">
            مشاهده سبد خرید →
          </Link>
        </div>
      </div>
    </div>
  );
}
