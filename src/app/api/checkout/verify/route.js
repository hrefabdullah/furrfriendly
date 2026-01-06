import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    await connectDB();

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, cart, totalAmount, customer } =
      await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ success: false, error: "Missing payment data" }, { status: 400 });
    }

    // 1️⃣ Verify signature
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    // 2️⃣ Save order
    const orderItems = cart.map((item) => ({
      productId: item._id,
      name: item.name,
      price: item.discountedPrice || item.price,
      quantity: item.quantity,
      image: item.img1 || item.img,
    }));

    const order = await Order.create({
      customer,
      items: orderItems,
      totalAmount,
      payment: {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        status: "paid",
      },
      orderStatus: "Paid",
    });


    return NextResponse.json({ success: true, orderId: order._id }, { status: 200 });
  } catch (err) {
    console.error("Verify Payment Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
