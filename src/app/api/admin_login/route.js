import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();

  // check credentials from env
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // create a session cookie that expires on browser close
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin-auth", "true", {
      path: "/",
      httpOnly: true, // secure, not accessible from JS
      sameSite: "strict",
      // no `maxAge` or `expires` → cookie expires when browser closes
    });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
