"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Package } from "lucide-react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleEdit = (productId) => {
    // Open modal / navigate to edit page
    alert(`Edit product: ${productId}`);
  };

  const handleDelete = async (productId) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProducts(products.filter((p) => p._id !== productId));
        alert("Product deleted successfully");
      } else {
        alert("Failed to delete product");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="space-y-8 px-8 py-10 bg-white text-gray-900">
      <h1 className="text-3xl font-bold">Manage Products</h1>

      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex flex-col flex-1">
              <span className="font-semibold text-lg">{p.name}</span>
              <span className="text-gray-500 mt-1">₹{p.price}</span>
              <div className="w-48 bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full ${
                    p.stock > 0 ? "bg-green-500" : "bg-red-400"
                  }`}
                  style={{ width: `${Math.min((p.stock / 100) * 100, 100)}%` }}
                ></div>
              </div>
              <span
                className={`mt-1 text-sm font-medium ${
                  p.stock > 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {p.stock > 0 ? `${p.stock} in stock` : "Out of stock"}
              </span>
            </div>

            <div className="flex space-x-3">
              <button
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                onClick={() => handleEdit(p._id)}
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium"
                onClick={() => handleDelete(p._id)}
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
