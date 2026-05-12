"use client";

import { useCart } from "@/lib/context/CartContext";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart, totalPrice } = useCart();
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleOrder = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          items: cart.map((i) => ({
            product: i._id,
            title: i.title,
            price: i.price,
            quantity: i.qty,
          })),
        }),
      });
      const order = await res.json();

      // شروع پرداخت
      const payRes = await fetch("/api/payments/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: order._id }),
      });
      const pay = await payRes.json();

      clearCart();
      setMessage("سفارش شما با موفقیت ثبت شد! در حال انتقال به درگاه پرداخت...");
      setTimeout(() => {
        window.location.href = pay.paymentUrl;
      }, 2000);
    } catch {
      setMessage("خطایی رخ داد. لطفاً دوباره امتحان کنید.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <div className="text-6xl">🛒</div>
      <p className="text-gray-400 text-lg">سبد خرید شما خالی است</p>
      <Link
        href="/"
        className="border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all"
      >
        ادامه خرید
      </Link>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-light tracking-widest text-dark uppercase mb-10">سبد خرید</h1>

      {message && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6 text-sm">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* لیست آیتم‌ها */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center gap-4 border border-gray-100 p-4 hover:border-gold/20 transition">
              <img
                src={item.image || `https://placehold.co/80x80/1a1a1a/c5a059?text=${encodeURIComponent(item.title)}`}
                alt={item.title}
                className="w-20 h-20 object-cover bg-gray-50"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/80x80/1a1a1a/c5a059?text=img`;
                }}
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-dark">{item.title}</h3>
                <p className="text-gold text-sm font-bold mt-1">{item.price.toLocaleString("fa-IR")} تومان</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item._id, item.qty - 1)}
                  className="w-8 h-8 border border-gray-200 hover:border-gold text-gray-600 hover:text-gold transition"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm">{item.qty}</span>
                <button
                  onClick={() => updateQty(item._id, item.qty + 1)}
                  className="w-8 h-8 border border-gray-200 hover:border-gold text-gray-600 hover:text-gold transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-gray-300 hover:text-red-400 transition text-lg"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* خلاصه سفارش */}
        <div className="bg-gray-50 p-6 h-fit space-y-4">
          <h2 className="text-sm font-medium tracking-widest uppercase text-dark">خلاصه سفارش</h2>
          <div className="h-[1px] bg-gray-200" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>جمع کل</span>
            <span>{totalPrice.toLocaleString("fa-IR")} تومان</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>هزینه ارسال</span>
            <span className="text-green-600">رایگان</span>
          </div>
          <div className="h-[1px] bg-gray-200" />
          <div className="flex justify-between font-bold text-dark">
            <span>مبلغ قابل پرداخت</span>
            <span className="text-gold">{totalPrice.toLocaleString("fa-IR")} تومان</span>
          </div>

          {!token && (
            <p className="text-xs text-gray-400 text-center">
              <Link href="/login" className="text-gold hover:underline">ورود</Link> برای ثبت سفارش
            </p>
          )}

          <button
            onClick={handleOrder}
            disabled={loading}
            className="w-full bg-gold text-white py-4 text-xs tracking-widest uppercase hover:bg-gold/90 transition disabled:opacity-50"
          >
            {loading ? "در حال پردازش..." : "ثبت سفارش و پرداخت"}
          </button>
        </div>
      </div>
    </div>
  );
}
