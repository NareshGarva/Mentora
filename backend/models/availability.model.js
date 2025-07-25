import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
  startTime: { type: String, default: '' },
  endTime: { type: String, default: '' },
  isAvailable: { type: Boolean, default: false },
}, { _id: false });

const availabilitySchema = new mongoose.Schema({
  monday: daySchema,
  tuesday: daySchema,
  wednesday: daySchema,
  thursday: daySchema,
  friday: daySchema,
  saturday: daySchema,
  sunday: daySchema,
  isAvailable:{
    type:Boolean,
    default:true
  }
}, { timestamps: true });

export default mongoose.model("Availability", availabilitySchema);
