import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: { type: String, required: true, minlength: 6, select: false },
    avatar: {
      type: String,
    },
    number: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      required:true,
      enum: ["Mentee", "Mentor"],
      default: "Mentee",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
