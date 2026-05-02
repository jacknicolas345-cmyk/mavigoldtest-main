import { NextResponse } from 'next/server';
// اینجا در عمل باید به دیتابیس وصل بشی

const products = [
  { id: 1, title: 'انگشتر طلا', price: 12000000, image: '/images/ring1.jpg' },
  { id: 2, title: 'گردنبند طلا', price: 18500000, image: '/images/necklace1.jpg' },
];

export async function GET() {
  return NextResponse.json(products);
}
