"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const { user, token, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
    fetch("/api/orders", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        setOrders(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  const statusMap: Record<string, string> = {
    pending: "در انتظار پرداخت",
    paid: "پرداخت شده",
    shipped: "ارسال شده",
    delivered: "تحویل داده شده",
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-light tracking-widest uppercase mb-10">پروفایل</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* اطلاعات کاربر */}
        <div className="bg-gray-50 p-6 h-fit space-y-4">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-2xl mx-auto">
            👤
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-dark">{user?.role === "admin" ? "ادمین" : "کاربر"}</p>
            <p className="text-xs text-gray-400 mt-1">ID: {user?.id?.slice(-6)}</p>
          </div>
          {user?.role === "admin" && (
            <Link
              href="/admin/products"
              className="block text-center text-xs border border-gold text-gold py-2 hover:bg-gold hover:text-white transition"
            >
              پنل مدیریت محصولات
            </Link>
          )}
          <button
            onClick={() => { logout(); router.push("/"); }}
            className="w-full text-xs border border-red-200 text-red-400 py-2 hover:bg-red-50 transition"
          >
            خروج از حساب
          </button>
        </div>

        {/* سفارش‌ها */}
        <div className="md:col-span-2">
          <h2 className="text-sm tracking-widest uppercase text-dark mb-6">سفارش‌های من</h2>
          {loading ? (
            <p className="text-gray-400 text-sm">در حال بارگذاری...</p>
          ) : orders.length === 0 ? (
            <div className="text-center py-10 border border-gray-100">
              <p className="text-gray-400 text-sm mb-4">هنوز سفارشی ثبت نکرده‌اید</p>
              <Link href="/" className="text-gold text-xs border-b border-gold">شروع خرید</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order._id} className="border border-gray-100 p-4 hover:border-gold/20 transition">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs text-gray-400">#{order._id.slice(-6)}</span>
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                      {statusMap[order.status] || order.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {order.items.map((item: any, i: number) => (
                      <p key={i} className="text-xs text-gray-600">
                        {item.title} × {item.quantity}
                      </p>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between">
                    <span className="text-xs text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                    <span className="text-sm font-bold text-gold">
                      {order.totalAmount?.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
