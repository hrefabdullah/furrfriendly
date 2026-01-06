"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.replace("/admin-login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg bg-gray-600 text-white font-medium hover:bg-gray-800 transition w-max"
    >
      Logout
    </button>
  );
}
