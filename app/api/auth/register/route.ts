import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password } = await req.json();

  if (!name || !email || !password)
    return NextResponse.json({ error: "همه فیلدها الزامی است" }, { status: 400 });

  const exists = await User.findOne({ email });
  if (exists)
    return NextResponse.json({ error: "این ایمیل قبلاً ثبت شده" }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  return NextResponse.json({ id: user._id, message: "ثبت‌نام موفق" });
}
