// import CategorySlider from "@/components/CategorySlider";
// import ProductCard from "@/components/ProductCard";

// const mockProducts = [
//   { title: "گردنبند طلا ۱۸ عیار", price: "12,500,000", image: "/images/p1.jpg" },
//   { title: "انگشتر زنانه طلا", price: "8,900,000", image: "/images/p2.jpg" },
//   { title: "دستبند ظریف طلا", price: "6,700,000", image: "/images/p3.jpg" },
// ];

// export default function Home() {
//   return (
//     <main className="bg-black text-light">
      
//       {/* Hero */}
//       <section className="relative h-[400px]">
//         <img
//           src="/images/hero.jpg/150x50?text=Mavi+Gold"
//           className="w-full h-full object-cover opacity-70"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <h1 className="text-5xl font-bold text-gold drop-shadow-lg">
//             جواهرات لوکس
//           </h1>
//           <p className="mt-4 text-xl">درخشش واقعی را تجربه کنید</p>
//         </div>
//       </section>

//       <CategorySlider />

//       {/* Products */}
//       <section className="max-w-7xl mx-auto py-10 px-6">
//         <h2 className="text-3xl text-gold font-bold mb-8">محصولات ویژه</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {mockProducts.map((p, i) => (
//             <ProductCard key={i} {...p} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


// import CategorySlider from "@/components/CategorySlider";
// // سایر کامپوننت‌ها را هم اینجا ایمپورت کنید

// export default function Home() {
//   return (
//     <div className="flex flex-col gap-16">
//       {/* بخش بنر اصلی (Hero) */}
//       <section className="text-center py-20 bg-slate-900 text-white rounded-3xl shadow-xl">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">جواهرات لوکس</h1>
//         <p className="text-xl text-slate-300">درخشش واقعی را تجربه کنید</p>
//       </section>

//       {/* بخش دسته‌بندی‌ها */}
//       <section>
//         <CategorySlider />
//       </section>

//       {/* می‌توانید بخش محصولات ویژه را هم اینجا اضافه کنید */}
//     </div>
//   );
// }


import CategorySlider from "@/components/CategorySlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* بخش خوش‌آمدگویی (Hero) */}
      <section className="bg-dark py-20 px-6 text-center border-b border-gold/20">
        <h2 className="text-gold text-4xl md:text-6xl font-bold mb-4">جواهرات لوکس</h2>
        <p className="text-light/80 text-lg max-w-2xl mx-auto">
          درخشش واقعی را با کلکسیون جدید ماوی گلد تجربه کنید.
        </p>
      </section>

      {/* بخش اسلایدر دسته‌بندی‌ها */}
      <main className="flex-grow container mx-auto py-12">
        <CategorySlider />
      </main>
    </div>
  );
}