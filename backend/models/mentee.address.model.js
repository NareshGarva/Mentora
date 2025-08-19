import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "MenteeUser", required: true },

    street: { type: String, required: true },

    city: { type: String, required: true },

    state: { type: String, required: true },

    postalCode: { type: String, required: true },

    country: { type: String, required: true, default: "India" },

    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("MenteeAddress", addressSchema);
