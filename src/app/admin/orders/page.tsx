"use client";

import { useState, useEffect } from "react";

interface Order {
  id: number;
  customer: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: "Pending" | "Accepted" | "Rejected";
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  // Mock initial orders (replace with API call)
  useEffect(() => {
    const initialOrders: Order[] = [
      {
        id: 101,
        customer: "John Doe",
        items: [
          { name: "Cat Food A", quantity: 2, price: 20 },
          { name: "Dog Toy X", quantity: 1, price: 15 },
        ],
        total: 55,
        status: "Pending",
      },
      {
        id: 102,
        customer: "Jane Smith",
        items: [{ name: "Cat Food B", quantity: 3, price: 30 }],
        total: 90,
        status: "Pending",
      },
    ];
    setOrders(initialOrders);
  }, []);

  const updateStatus = (orderId: number, status: "Accepted" | "Rejected") => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <div className="space-y-6 bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-900">Manage Orders</h1>
      <p className="text-gray-600">Accept or reject customer orders.</p>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Items</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 text-gray-800">{order.id}</td>
                <td className="px-6 py-4 text-gray-800">{order.customer}</td>
                <td className="px-6 py-4 text-gray-800">
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      {item.name} x{item.quantity} (${item.price})
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 text-gray-800">${order.total}</td>
                <td className="px-6 py-4 text-gray-800">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Accepted"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-800 space-x-2">
                  {order.status === "Pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(order.id, "Accepted")}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => updateStatus(order.id, "Rejected")}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
