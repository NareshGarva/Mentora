import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },

  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  duration: { type: Number, required: true },

  type: { type: String, enum: ['chat', 'audio', 'video'], required: true },
  mode: { type: String, enum: ['zoom', 'meet', 'custom'], default: 'zoom' },
  meetingLink: { type: String, default: '' },

  title: { type: String, required: true },
  description: { type: String, default: '' },
  isConfirmed: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['pending', 'upcoming', 'completed', 'cancelled', 'rescheduled'],
    default: 'pending'
  },

  price: { type: Number, required: true },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  review: { type: mongoose.Schema.Types.ObjectId, ref: "Review" }
}, { timestamps: true });

export default mongoose.model("Session", sessionSchema);
