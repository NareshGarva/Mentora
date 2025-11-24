import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  college: { type: String, required: true },
  course: { type: String, required: true },
  cgpa: { type: String, required: true },
  enrollmentDate: { type: String, required: true },
  passoutDate: { type: String },
}, { timestamps: true });

export default mongoose.model("Education", educationSchema);
