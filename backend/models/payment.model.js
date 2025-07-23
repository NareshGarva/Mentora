import mongoose from "mongoose";

const paymentsSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bookings', required: true },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "success", "cancel"], default: "pending" },
  razorpayPaymentId: { type: String, required: true },
  razorpayOrderId: { type: String, required: true },
  paymentMethod: { type: String, enum: ["online"], default: "online" },

  // Optional additional fields for flexibility and reporting
  paymentDate: { type: Date, default: Date.now },
  currency: { type: String, default: "INR" },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model("Payments", paymentsSchema);
