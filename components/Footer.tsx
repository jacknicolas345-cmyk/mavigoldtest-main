// export default function Footer() {
//   return (
//     <footer className="border-t mt-12">
//       <div className="container mx-auto px-4 py-6 text-sm flex flex-col md:flex-row justify-between gap-4">
//         <p>© {new Date().getFullYear()} Mavi Gold Gallery Clone</p>
//         <p>طراحی شده برای تمرین و توسعه</p>
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className="bg-black text-light py-10 mt-10 border-t border-gold/40">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-gold text-xl font-bold">MAVI GOLD</h3>
        <p className="mt-3 text-sm">تمامی حقوق محفوظ است © 2026</p>
      </div>
    </footer>
  );
}
