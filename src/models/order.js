// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
      notes: String,
    },
    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    totalAmount: { type: Number, required: true },
    payment: {
      razorpay_order_id: String,
      razorpay_payment_id: String,
      razorpay_signature: String,
      status: { type: String, default: "pending" },
    },
    orderStatus: { type: String, default: "Paid" },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
