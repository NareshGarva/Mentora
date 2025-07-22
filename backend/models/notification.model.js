import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ["Booking", "Payment", "System"], default: "Booking" },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Notification", notificationSchema);
