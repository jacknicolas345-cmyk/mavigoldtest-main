"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminProductsPage() {
  const { user, token } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "", slug: "", price: "", image: "", description: "", stock: "", category: ""
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
    if (user.role !== "admin") { router.push("/"); return; }
    loadData();
  }, [user]);

  const loadData = async () => {
    const [pr, ct] = await Promise.all([
      fetch("/api/products").then(r => r.json()),
      fetch("/api/categories").then(r => r.json()),
    ]);
    setProducts(Array.isArray(pr) ? pr : []);
    setCategories(Array.isArray(ct) ? ct : []);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...form, price: Number(form.price), stock: Number(form.stock) }),
      });
      if (res.ok) {
        setMsg("محصول اضافه شد ✓");
        setForm({ title: "", slug: "", price: "", image: "", description: "", stock: "", category: "" });
        setShowForm(false);
        loadData();
      } else {
        setMsg("خطا در ثبت محصول");
      }
    } catch { setMsg("خطا"); }
    setSaving(false);
    setTimeout(() => setMsg(""), 3000);
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("حذف شود؟")) return;
    await fetch(`/api/products/slug/${slug}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    loadData();
  };

  if (loading) return <div className="text-center py-20 text-gold animate-pulse">در حال بارگذاری...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-light tracking-widest uppercase">مدیریت محصولات</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="border border-gold text-gold text-xs px-6 py-3 hover:bg-gold hover:text-white transition tracking-widest uppercase"
        >
          {showForm ? "انصراف" : "+ محصول جدید"}
        </button>
      </div>

      {msg && <div className="bg-green-50 text-green-700 border border-green-200 p-3 rounded mb-6 text-sm">{msg}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 mb-10 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: "title", label: "عنوان", type: "text", required: true },
            { key: "slug", label: "اسلاگ (انگلیسی)", type: "text", required: true },
            { key: "price", label: "قیمت (تومان)", type: "number", required: true },
            { key: "image", label: "آدرس تصویر", type: "text" },
            { key: "stock", label: "موجودی", type: "number" },
          ].map(({ key, label, type, required }) => (
            <div key={key}>
              <label className="block text-xs text-gray-500 mb-1 tracking-widest uppercase">{label}</label>
              <input
                type={type}
                value={(form as any)[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                required={required}
                className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs text-gray-500 mb-1 tracking-widest uppercase">دسته‌بندی</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-gold"
            >
              <option value="">انتخاب دسته‌بندی</option>
              {categories.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs text-gray-500 mb-1 tracking-widest uppercase">توضیحات</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-gold"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-dark text-white px-10 py-3 text-xs tracking-widest uppercase hover:bg-gold transition disabled:opacity-50"
            >
              {saving ? "در حال ذخیره..." : "ذخیره محصول"}
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-right p-4 text-xs tracking-widest text-gray-500 uppercase font-normal">محصول</th>
              <th className="text-right p-4 text-xs tracking-widest text-gray-500 uppercase font-normal">قیمت</th>
              <th className="text-right p-4 text-xs tracking-widest text-gray-500 uppercase font-normal">موجودی</th>
              <th className="text-right p-4 text-xs tracking-widest text-gray-500 uppercase font-normal">دسته</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image || `https://placehold.co/40x40/1a1a1a/c5a059?text=img`}
                      className="w-10 h-10 object-cover bg-gray-100"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/40x40/1a1a1a/c5a059?text=img"; }}
                    />
                    <span className="font-medium">{p.title}</span>
                  </div>
                </td>
                <td className="p-4 text-gold font-bold">{p.price?.toLocaleString("fa-IR")}</td>
                <td className="p-4 text-gray-500">{p.stock}</td>
                <td className="p-4 text-gray-500">{p.category?.name || "—"}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleDelete(p.slug)}
                    className="text-red-400 text-xs hover:text-red-600 transition"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <p className="text-center text-gray-400 py-10 text-sm">هیچ محصولی وجود ندارد</p>
        )}
      </div>
    </div>
  );
}
