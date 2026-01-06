import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Products";

/* GET – all products */
export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

/* POST – create product (admin only later) */
export async function POST(req) {
  await connectDB();
  const data = await req.json();

  const product = await Product.create(data);
  return NextResponse.json(product, { status: 201 });
}
