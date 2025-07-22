import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
  startTime: { type: String, default: '' },
  endTime: { type: String, default: '' },
  isAvailable: { type: Boolean, default: false },
}, { _id: false });

const availabilitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true },
  monday: daySchema,
  tuesday: daySchema,
  wednesday: daySchema,
  thursday: daySchema,
  friday: daySchema,
  saturday: daySchema,
  sunday: daySchema,
}, { timestamps: true });

export default mongoose.model("Availability", availabilitySchema);
