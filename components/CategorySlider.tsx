"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Category = {
  _id: string;
  name: string;
  slug: string;
  image?: string;
};

const fallbackCategories = [
  { _id: "1", name: "گردنبند", slug: "Necklaces" },
  { _id: "2", name: "انگشتر", slug: "Rings" },
  { _id: "3", name: "دستبند", slug: "Bracelets" },
  { _id: "4", name: "گوشواره", slug: "Earrings" },
];

export default function CategorySlider() {
  const [categories, setCategories] = useState<Category[]>(fallbackCategories);

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setCategories(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl font-light tracking-widest text-dark uppercase">
            دسته‌بندی‌های خاص
          </h2>
          <Link href="/category/all" className="text-xs border-b border-gold pb-1 text-gold hover:opacity-70 transition">
            مشاهده همه
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/category/${cat.slug}`}
              className="group min-w-[220px] cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 border border-gold/10">
                <img
                  src={cat.image || `https://placehold.co/400x533/1a1a1a/c5a059?text=${encodeURIComponent(cat.name)}`}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x533/1a1a1a/c5a059?text=${encodeURIComponent(cat.name)}`;
                  }}
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm tracking-[0.2em] text-gray-500 uppercase font-light group-hover:text-gold transition-colors duration-300">
                  {cat.name}
                </p>
                <div className="w-0 h-[1px] bg-gold mx-auto mt-2 transition-all duration-500 group-hover:w-10" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
