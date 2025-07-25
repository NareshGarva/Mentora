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
  refreshToken: { type: String, default: "", select: false },

  favoriteMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "FavoriteMentor" }],
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
}, { timestamps: true });

export default mongoose.model("MenteeUser", userSchema);
