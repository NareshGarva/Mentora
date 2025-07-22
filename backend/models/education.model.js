import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  college: { type: String, required: true },
  course: { type: String, required: true },
  cgpa: { type: String, required: true },
  enrollmentDate: { type: Date, required: true },
  passoutDate: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model("Education", educationSchema);
