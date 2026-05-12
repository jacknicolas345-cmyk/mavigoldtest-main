import { NextResponse } from "next/server";
import Category from "@/lib/models/Category";
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();
  const categories = await Category.find().sort({ createdAt: -1 });
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const category = await Category.create(data);
  return NextResponse.json(category);
}
