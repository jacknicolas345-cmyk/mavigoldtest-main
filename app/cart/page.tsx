"use client";

import { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const c = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(c);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">سبد خرید</h1>

      {cart.length === 0 && <p>سبد خرید خالی است.</p>}

      {cart.map((item) => (
        <div key={item._id} className="border p-4 rounded mb-4">
          <h3>{item.title}</h3>
          <p>{item.price.toLocaleString("fa-IR")} تومان</p>
        </div>
      ))}

      <hr className="my-6" />

      <p className="text-xl font-bold">
        مجموع: {total.toLocaleString("fa-IR")} تومان
      </p>

      <button className="bg-black text-white px-6 py-3 rounded mt-4">
        ادامه پرداخت
      </button>
    </div>
  );
}
