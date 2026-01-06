import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Check if the requested path is an admin page
  if (url.pathname.startsWith("/admin")) {
    const adminAuth = req.cookies.get("admin-auth")?.value;

    if (adminAuth !== "true") {
      // Redirect to login if no valid session cookie
      url.pathname = "/admin-login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Apply middleware only to admin pages
export const config = {
  matcher: ["/admin/:path*"],
};
