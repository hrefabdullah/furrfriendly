"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  // ---------------- CART HELPERS ----------------
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const increaseQty = (id) => {
    updateCart(
      cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    updateCart(
      cart
        .map((item) =>
          item._id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item._id !== id));
  };

  // ---------------- LOAD CART ----------------
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  // ---------------- LOAD RAZORPAY SCRIPT ----------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const totalAmount = cart.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () =>
    form.name && form.email && form.phone && form.address && cart.length > 0;

  // ---------------- PAYMENT ----------------
  const handlePayment = async () => {
    if (!validateForm()) {
      alert("Please fill all required details");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Create Razorpay order
      const orderRes = await fetch("/api/checkout/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount * 100 }), // amount in paise
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || "Order creation failed");

      // 2️⃣ Razorpay popup
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: "Pet Store",
        description: "Order Payment",
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        handler: async function (response) {
          // 3️⃣ Verify payment
          try {
            const verifyRes = await fetch("/api/checkout/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                cart,
                totalAmount,
                customer: form,
              }),
            });

            const data = await verifyRes.json();

            if (data.success) {
              localStorage.removeItem("cart");
              window.location.href = `/order-success/${data.orderId}`;
            } else {
              alert("Payment verification failed");
            }
          } catch (err) {
            console.error(err);
            alert("Payment verification failed");
          }
        },
        theme: { color: "#111827" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- EMPTY CART ----------------
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-xl text-gray-600">Your cart is empty</h2>
        </div>
        <Footer />
      </div>
    );
  }

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6">
        {/* LEFT: SHIPPING */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3"
            rows={3}
          />

          <textarea
            name="notes"
            placeholder="Additional notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            rows={2}
          />
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-3">
              <div>
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item._id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item._id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <span className="font-semibold">
                ₹{(item.discountedPrice || item.price) * item.quantity}
              </span>
            </div>
          ))}

          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
