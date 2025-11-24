import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    profession: { type: String },

    dob: { type: Date },

    alternativeNumber: { type: String },

    alternativeEmail: { type: String, sparse: true }, 

    email: { type: String, required: [true, "Email is required"], unique: true },

    password: { type: String, required: true, minlength: 6, select: false },

    avatar: { type: String },

    number: { type: String, default: "" }, 

    role: { type: String, required: true, enum: ["Mentee", "Mentor", "Admin"] },

    refreshToken: { type: String, default: "", select: false },

    twoStepVerification: { type: Boolean, default: false },

    favoriteMentors: [
      { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser" }, 
    ],

    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],

    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],

    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenteeAddress" }],
  },
  { timestamps: true }
);

export default mongoose.model("MenteeUser", userSchema);
