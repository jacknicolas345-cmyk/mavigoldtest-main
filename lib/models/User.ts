import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "customer" },
  },
  { timestamps: true }
);

export default models.User || mongoose.model("User", userSchema);
