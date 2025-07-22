import mongoose from "mongoose";

const rateSchema = new mongoose.Schema({
  perHour: { type: Number, required: true },
  perMinute: { type: Number },
  per15Minutes: { type: Number },
  per30Minutes: { type: Number },
  currency: { type: String, enum: ['INR', 'USD', 'EUR', 'GBP', 'AUD'], default: 'INR' },
}, { _id: false });

const mentorRateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "MentorUser", required: true, unique: true },
  rate: rateSchema,
}, { timestamps: true });

mentorRateSchema.pre("save", function (next) {
  if (this.rate.perHour) {
    const perMinute = Math.round(this.rate.perHour / 60);
    this.rate.perMinute = perMinute;
    this.rate.per15Minutes = perMinute * 15;
    this.rate.per30Minutes = perMinute * 30;
  }
  next();
});

export default mongoose.model("Rate", mentorRateSchema);
