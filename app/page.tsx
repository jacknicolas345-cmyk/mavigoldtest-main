import HeroBanner from '@/components/HeroBanner';
import CategorySlider from '@/components/CategorySlider';
import ProductCard from '@/components/ProductCard';

const mockProducts = [
  { id: 1, title: 'انگشتر طلا', price: 12000000, image: '/images/ring1.jpg' },
  { id: 2, title: 'گردنبند طلا', price: 18500000, image: '/images/necklace1.jpg' },
  { id: 3, title: 'دستبند طلا', price: 9500000, image: '/images/bracelet1.jpg' },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroBanner />

      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">دسته‌بندی‌ها</h2>
        <CategorySlider />
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">محصولات منتخب</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
