"use client";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>

      {orders.map((o) => (
        <div key={o._id} className="bg-white p-6 rounded-xl shadow mb-6">
          {/* ORDER INFO */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p><b>Order ID:</b> {o._id}</p>
              <p><b>Status:</b> {o.orderStatus}</p>
              <p><b>Total:</b> ₹{o.totalAmount}</p>
              <p><b>Created:</b> {new Date(o.createdAt).toLocaleString()}</p>
            </div>

            <div>
              <p><b>Name:</b> {o.customer?.name}</p>
              <p><b>Email:</b> {o.customer?.email}</p>
              <p><b>Phone:</b> {o.customer?.phone}</p>
              <p><b>Address:</b> {o.customer?.address}</p>
              {o.customer?.notes && (
                <p><b>Notes:</b> {o.customer.notes}</p>
              )}
            </div>
          </div>

          {/* ITEMS */}
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Qty</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Total</th>
                </tr>
              </thead>
              <tbody>
                {o.items && o.items.map((item) => (
                  <tr key={item._id}>
                    <td className="p-2 border">{item.name}</td>
                    <td className="p-2 border text-center">{item.quantity}</td>
                    <td className="p-2 border">₹{item.price}</td>
                    <td className="p-2 border">
                      ₹{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAYMENT */}
          <div className="mt-4 text-sm text-gray-600">
            <p><b>Payment ID:</b> {o.payment?.razorpay_payment_id}</p>
            <p><b>Payment Status:</b> {o.payment?.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
