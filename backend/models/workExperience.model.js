import mongoose from "mongoose";

const workExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  jobProfile: { type: String, required: true },
  joiningDate: { type: String, required: true },
  endingDate: { type: String },
  aboutJob: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("WorkExperience", workExperienceSchema);
