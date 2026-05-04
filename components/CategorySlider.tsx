// const categories = [
//   { title: "گردنبند", image: "/images/necklace.jpg" },
//   { title: "انگشتر", image: "/images/ring.jpg" },
//   { title: "دستبند", image: "/images/bracelet.jpg" },
//   { title: "گوشواره", image: "/images/earring.jpg" },
// ];

// export default function CategorySlider() {
//   return (
//     <div className="py-10 bg-black">
//       <h2 className="text-center text-3xl text-gold font-bold mb-8">
//         دسته‌بندی‌ها
//       </h2>

//       <div className="flex gap-6 overflow-x-auto px-6 scrollbar-hide">
//         {categories.map((cat, i) => (
//           <div
//             key={i}
//             className="min-w-[180px] bg-light rounded-xl shadow-gold cursor-pointer hover:scale-105 transition"
//           >
//             <img
//               src={cat.image}
//               className="w-full h-40 object-cover rounded-t-xl"
//             />
//             <p className="text-center py-3 text-black font-bold">{cat.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"; // این خط را حتماً اضافه کن

const categories = [
  { title: "گردنبند", slug: "necklace" },
  { title: "انگشتر", slug: "ring" },
  { title: "دستبند", slug: "bracelet" },
  { title: "گوشواره", slug: "earring" },
];

export default function CategorySlider() {
  return (
    <div className="py-10 bg-black">
      <h2 className="text-center text-3xl text-yellow-500 font-bold mb-8">
        دسته‌بندی‌ها
      </h2>

      <div className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="min-w-[180px] bg-white rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* بخش تصویر جایگزین */}
            <div className="w-full h-40 bg-slate-200 rounded-t-xl flex items-center justify-center overflow-hidden">
               <img
                // از یک سرویس آنلاین برای تولید تصویر موقت بر اساس اسم دسته‌بندی استفاده می‌کنیم
                // src={`https://placehold.co/400x400/222/eab308?text=${cat.title}`}
                src={`https://placehold.co/400x400/1a1a1a/eab308?text=${cat.slug}`}
                alt={cat.title}
                className="w-full h-40 object-cover"
                // اگر تصویر لود نشد، یک استایل بک‌گراند ساده نمایش می‌دهد
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/cccccc/666666?text=No+Image";
                }}
              />
            </div>
            
            <p className="text-center py-4 text-slate-900 font-bold text-lg">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}