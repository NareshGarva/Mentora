import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  menteeId: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session", required: true },
  status: { type: String, enum: ["pending", "confirm", "cancel"], default: "cancel" },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payments", required: true },
  meetingLink: { type: String, required: true },
  notes: { type: String },
}, { timestamps: true });

export default mongoose.model("Bookings", bookingSchema);
