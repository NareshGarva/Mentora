import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  menteeId: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
