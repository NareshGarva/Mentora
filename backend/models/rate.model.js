import mongoose from "mongoose";


const mentorRateSchema = new mongoose.Schema({
    perHour: { type: Number, required: true },
  perMinute: { type: Number },
  per15Minutes: { type: Number },
  per30Minutes: { type: Number },
  currency: { type: String, enum: ['INR', 'USD', 'EUR', 'GBP', 'AUD'], default: 'INR' },
}, { timestamps: true });



export default mongoose.model("Rate", mentorRateSchema);
