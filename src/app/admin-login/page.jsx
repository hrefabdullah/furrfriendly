"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [key, setKey] = useState("");
  const router = useRouter();

  const login = () => {
    document.cookie = `admin_token=${key}; path=/`;
    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>
        <input
          type="password"
          placeholder="Admin Secret"
          className="w-full border p-2 mb-3"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button
          onClick={login}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
