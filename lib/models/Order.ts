import mongoose, { Schema, models } from "mongoose";

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", default: null },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
        price: Number
      }
    ],
    totalAmount: Number,
    status: { type: String, default: "pending" },
    paymentRef: String
  },
  { timestamps: true }
);

export default models.Order || mongoose.model("Order", orderSchema);
