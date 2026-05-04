const categories = [
  { title: "گردنبند", image: "/images/necklace.jpg" },
  { title: "انگشتر", image: "/images/ring.jpg" },
  { title: "دستبند", image: "/images/bracelet.jpg" },
  { title: "گوشواره", image: "/images/earring.jpg" },
];

export default function CategorySlider() {
  return (
    <div className="py-10 bg-black">
      <h2 className="text-center text-3xl text-gold font-bold mb-8">
        دسته‌بندی‌ها
      </h2>

      <div className="flex gap-6 overflow-x-auto px-6 scrollbar-hide">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="min-w-[180px] bg-light rounded-xl shadow-gold cursor-pointer hover:scale-105 transition"
          >
            <img
              src={cat.image}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <p className="text-center py-3 text-black font-bold">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
