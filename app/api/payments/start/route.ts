import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { orderId } = await req.json();

  return NextResponse.json({
    paymentUrl: `https://fake-gateway.test/pay?order=${orderId}`
  });
}
