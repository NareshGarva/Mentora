import mongoose from "mongoose";

const socialLinksSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("SocialLinks", socialLinksSchema);
