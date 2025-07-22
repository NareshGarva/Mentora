import mongoose from "mongoose";

const workExperienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  company: { type: String, required: true },
  jobProfile: { type: String, required: true },
  joiningDate: { type: String, required: true },
  endingDate: { type: String, required: true },
  aboutJob: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("WorkExperience", workExperienceSchema);
