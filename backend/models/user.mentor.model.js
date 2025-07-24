import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: true, minlength: 6, select: false },
  avatar: { type: String },
  number: { type: String, default: "+91 74398-74728" },
  role: { type: String, required:true },

  education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
  socialLink: [{ type: mongoose.Schema.Types.ObjectId, ref: "SocialLinks" }],
  expertise: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expertise" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  availability: [{ type: mongoose.Schema.Types.ObjectId, ref: "Availability" }],
  rate: { type: mongoose.Schema.Types.ObjectId, ref: "Rate" },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  refreshToken: { type: String, default: "", select: false },
}, { timestamps: true });

export default mongoose.model("MentorUser", userSchema);
