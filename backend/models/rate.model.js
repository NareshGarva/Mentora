import mongoose from "mongoose";


const mentorRateSchema = new mongoose.Schema({
    perHour: { type: Number, required: true },
  currency: { type: String, enum: ['INR', 'USD', 'EUR', 'GBP', 'AUD'], default: 'INR' },
}, { timestamps: true });



export default mongoose.model("Rate", mentorRateSchema);
