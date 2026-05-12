"use client";

import Link from "next/link";
import { useCart } from "@/lib/context/CartContext";

type Product = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  description?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white border border-gray-100 hover:border-gold/30 transition-all duration-300 hover:shadow-lg">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image || `https://placehold.co/400x400/1a1a1a/c5a059?text=${encodeURIComponent(product.title)}`}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/400x400/1a1a1a/c5a059?text=${encodeURIComponent(product.title)}`;
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-dark tracking-wide line-clamp-2 group-hover:text-gold transition">
            {product.title}
          </h3>
          <p className="text-gold font-bold mt-2 text-base">
            {product.price.toLocaleString("fa-IR")} تومان
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={() => addToCart({ _id: product._id, title: product.title, price: product.price, image: product.image })}
          className="w-full border border-gold text-gold text-xs py-2 tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
        >
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}
