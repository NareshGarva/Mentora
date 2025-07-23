import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  menteeId: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session", required: true },
  status: { type: String, enum: ["pending", "confirm", "cancel"], default: "cancel" },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payments", required: true },
  meetingLink: { type: String, required: true },
  notes: { type: String },

  // New optional reverse field for session tracking
  sessionDate: { type: Date },
  sessionTitle: { type: String },
  sessionType: { type: String, enum: ['chat', 'audio', 'video'] },
  sessionPrice: { type: Number },
}, { timestamps: true });

export default mongoose.model("Bookings", bookingSchema);
