import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  menteeId: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },

  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session" }, // added after session is created

  sessionDate: { type: Date, required: true },
  sessionType: { type: String, enum: ['chat', 'audio', 'video'], required: true },
  sessionPrice: { type: Number, required: true },
  sessionTitle: { type: String },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
