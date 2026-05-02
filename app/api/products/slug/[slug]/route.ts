import { NextResponse } from "next/server";
import Product from "@/lib/models/Product";
import { connectDB } from "@/lib/db";

export async function GET(req: Request, { params }: any) {
  await connectDB();
  const product = await Product.findOne({ slug: params.slug }).populate("category");
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}
