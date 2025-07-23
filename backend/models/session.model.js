import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  duration: { type: Number, required: true },

  mode: { type: String, enum: ['meet', 'zoom', 'custom'], default: 'meet' },
  meetingLink: { type: String, default: '' },

  type: { type: String, enum: ['chat', 'audio', 'video'], default: 'video' },
  isConfirmed: { type: Boolean, default: false },
  topic: { type: String, required: true },
  description: { type: String, default: '' },
  status: {
    type: String,
    enum: ['pending', 'upcoming', 'cancelled', 'completed', 'rescheduled'],
    default: 'pending',
  },
  review: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },

  // Newly added fields for payment integration
  price: { type: Number, required: true },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  razorpaySignature: { type: String },
}, { timestamps: true });

export default mongoose.model("Session", sessionSchema);
