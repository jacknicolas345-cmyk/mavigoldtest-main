import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    price: Number,
    image: String,
    description: String,
    stock: { type: Number, default: 0 },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

export default models.Product || mongoose.model("Product", productSchema);
