import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: amount, // paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("ORDER CREATE ERROR:", error);
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}
