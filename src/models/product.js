import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    size: {
      type: Number, // 6 (kg)
      required: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String, // Granule
      required: true,
    },
    for: {
      type: String, // Adult
      required: true,
      enum: ["Adult", "Kitten", "All"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String, // catfood
      required: true,
      lowercase: true,
    },
    images: {
      img1: { type: String, required: true },
      img2: { type: String },
      img3: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
