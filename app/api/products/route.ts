import { NextResponse } from 'next/server';

const products = [
  { id: 1, title: 'انگشتر طلا', price: 12000000, image: '/images/ring1.jpg' },
  { id: 2, title: 'گردنبند طلا', price: 18500000, image: '/images/necklace1.jpg' },
];

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) {
    return new NextResponse('Not found', { status: 404 });
  }
  return NextResponse.json(product);
}


import { NextResponse } from "next/server";
import Product from "@/lib/models/Product";
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();
  const products = await Product.find().populate("category");
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const product = await Product.create(data);
  return NextResponse.json(product);
}
