import { NextResponse } from "next/server";
import Order from "@/lib/models/Order";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();
  const { items } = await req.json();

  const totalAmount = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    items,
    totalAmount,
    status: "pending"
  });

  return NextResponse.json(order);
}
