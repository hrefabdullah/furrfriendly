import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });

  // ❌ remove cookie
  res.cookies.set("admin-auth", "", {
    path: "/",
    maxAge: 0,
  });

  return res;
}
