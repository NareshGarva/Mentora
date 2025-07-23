import mongoose from "mongoose";

const paymentsSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },

  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  status: { type: String, enum: ["pending", "success", "failed"], default: "pending" },

  razorpayPaymentId: { type: String },
  razorpayOrderId: { type: String },
  razorpaySignature: { type: String },

  paymentMethod: { type: String, enum: ["online"], default: "online" },
  paymentDate: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Payment", paymentsSchema);
