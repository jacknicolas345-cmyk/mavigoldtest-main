import { NextResponse } from "next/server";
import Product from "@/lib/models/Product";
import { connectDB } from "@/lib/db";

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const product = await Product.findOne({ slug: params.slug }).populate("category");
  if (!product) return NextResponse.json({ error: "محصول یافت نشد" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const data = await req.json();
  const product = await Product.findOneAndUpdate({ slug: params.slug }, data, { new: true });
  return NextResponse.json(product);
}

export async function DELETE(_req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  await Product.findOneAndDelete({ slug: params.slug });
  return NextResponse.json({ message: "محصول حذف شد" });
}
