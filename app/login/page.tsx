"use client";

import { useState } from "react";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "خطایی رخ داد");
        return;
      }

      login(data.token);
      router.push("/");
    } catch {
      setError("خطا در اتصال به سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif tracking-widest text-dark">MAVI GOLD</h1>
          <p className="text-gray-400 text-sm mt-2">ورود به حساب کاربری</p>
        </div>

        <div className="bg-white p-8 border border-gray-100 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">ایمیل</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">رمز عبور</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-dark text-white py-4 text-xs tracking-widest uppercase hover:bg-gold transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            حساب ندارید؟{" "}
            <Link href="/register" className="text-gold hover:underline">ثبت‌نام کنید</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
