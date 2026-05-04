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

// "use client"; // این خط را حتماً اضافه کن

// const categories = [
//   { title: "گردنبند", slug: "necklace" },
//   { title: "انگشتر", slug: "ring" },
//   { title: "دستبند", slug: "bracelet" },
//   { title: "گوشواره", slug: "earring" },
// ];

// export default function CategorySlider() {
//   return (
//     <div className="py-10 bg-black">
//       <h2 className="text-center text-3xl text-yellow-500 font-bold mb-8">
//         دسته‌بندی‌ها
//       </h2>

//       <div className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide">
//         {categories.map((cat, i) => (
//           <div
//             key={i}
//             className="min-w-[180px] bg-white rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
//           >
//             {/* بخش تصویر جایگزین */}
//             <div className="w-full h-40 bg-slate-200 rounded-t-xl flex items-center justify-center overflow-hidden">
//                <img
//                 // از یک سرویس آنلاین برای تولید تصویر موقت بر اساس اسم دسته‌بندی استفاده می‌کنیم
//                 // src={`https://placehold.co/400x400/222/eab308?text=${cat.title}`}
//                 src={`https://placehold.co/400x400/1a1a1a/eab308?text=${cat.slug}`}
//                 alt={cat.title}
//                 className="w-full h-40 object-cover"
//                 // اگر تصویر لود نشد، یک استایل بک‌گراند ساده نمایش می‌دهد
//                 onError={(e) => {
//                   e.currentTarget.src = "https://placehold.co/400x400/cccccc/666666?text=No+Image";
//                 }}
//               />
//             </div>
            
//             <p className="text-center py-4 text-slate-900 font-bold text-lg">
//               {cat.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

const categories = [
  { title: "گردنبند", slug: "Necklaces" },
  { title: "انگشتر", slug: "Rings" },
  { title: "دستبند", slug: "Bracelets" },
  { title: "گوشواره", slug: "Earrings" },
];

export default function CategorySlider() {
  return (
    <div className="py-20 bg-white"> {/* پس‌زمینه سفید برای حس تمیزی و لوکس بودن */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-3xl font-light tracking-widest text-dark uppercase">
            دسته‌بندی‌های خاص
          </h2>
          <div className="h-[1px] flex-grow mx-8 bg-gold/20 hidden md:block"></div>
          <span className="text-gold text-xs tracking-widest uppercase cursor-pointer hover:opacity-70 transition">
            مشاهده همه
          </span>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group min-w-[280px] cursor-pointer relative"
            >
              {/* قاب تصویر با افکت‌های حرفه‌ای */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 border border-gold/10">
                <img
                  src={`https://placehold.co/600x800/1a1a1a/c5a059?text=${cat.slug}`}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-all duration-1000 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* لایه رنگی بسیار ملایم روی تصویر در حالت عادی */}
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* بخش متنی ظریف */}
              <div className="mt-6 text-center">
                <p className="text-sm tracking-[0.2em] text-gray-500 uppercase font-light group-hover:text-gold transition-colors duration-300">
                  {cat.title}
                </p>
                {/* خط زیر متن که در حالت هاور باز می‌شود */}
                <div className="w-0 h-[1px] bg-gold mx-auto mt-2 transition-all duration-500 group-hover:w-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}