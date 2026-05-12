import { NextResponse } from "next/server";
import Order from "@/lib/models/Order";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();
  const { orderId } = await req.json();

  // اینجا می‌تونی درگاه واقعی مثل زرین‌پال رو وصل کنی
  const paymentUrl = `https://fake-gateway.test/pay?order=${orderId}`;

  await Order.findByIdAndUpdate(orderId, { paymentRef: `ref_${Date.now()}` });

  return NextResponse.json({ paymentUrl });
}
