import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const product = await Product.findById(params.id);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid product id" },
      { status: 400 }
    );
  }
}
