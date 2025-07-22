import mongoose from "mongoose";

const socialLinksSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  platform: { type: String, required: true },
  url: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("SocialLinks", socialLinksSchema);
