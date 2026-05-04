// type Product = {
//   id: number | string;
//   title: string;
//   price: number;
//   image: string;
// };

// export default function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
//       <div className="aspect-square bg-gray-100">
//         {/* در عمل اینجا از Image خود Next استفاده کن */}
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="p-4 space-y-2">
//         <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
//         <p className="text-amber-700 font-bold text-base">
//           {product.price.toLocaleString('fa-IR')} تومان
//         </p>
//         <button className="w-full mt-2 bg-black text-white py-2 text-sm rounded hover:bg-gray-900">
//           افزودن به سبد
//         </button>
//       </div>
//     </div>
//   );
// }


export default function ProductCard({ title, price, image }) {
  return (
    <div className="bg-light rounded-xl shadow-gold hover:scale-105 transition cursor-pointer">
      <img src={image} className="w-full h-56 object-cover rounded-t-xl" />
      <div className="p-4 text-black">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gold font-bold mt-2">{price} تومان</p>
      </div>
    </div>
  );
}
