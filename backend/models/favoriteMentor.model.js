import mongoose from "mongoose";

const favoriteMentorSchema = new mongoose.Schema({
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
}, { timestamps: true });

export default mongoose.model("FavoriteMentor", favoriteMentorSchema);
