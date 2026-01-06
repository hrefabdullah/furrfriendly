// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const adminToken = req.cookies.get("admin_token")?.value;

  if (!adminToken || adminToken !== process.env.ADMIN_SECRET) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
