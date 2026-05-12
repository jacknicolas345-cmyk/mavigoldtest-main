import { NextResponse } from "next/server";
import Order from "@/lib/models/Order";
import { connectDB } from "@/lib/db";
import { verifyToken, getTokenFromRequest } from "@/lib/auth";

export async function POST(req: Request) {
  await connectDB();
  const { items } = await req.json();

  const token = getTokenFromRequest(req);
  const user = token ? verifyToken(token) : null;

  const totalAmount = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    user: user?.id || null,
    items,
    totalAmount,
    status: "pending",
  });

  return NextResponse.json(order);
}

export async function GET(req: Request) {
  await connectDB();
  const token = getTokenFromRequest(req);
  const user = token ? verifyToken(token) : null;
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const filter = user.role === "admin" ? {} : { user: user.id };
  const orders = await Order.find(filter).populate("items.product").sort({ createdAt: -1 });
  return NextResponse.json(orders);
}
