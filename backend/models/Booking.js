import mongoose from "mongoose" ;

const bookingSchema = new mongoose.Schema(
    {
        menteeId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        mentorId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        scheduleId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
             type: String,
            enum: ["pendding","confirm","cancel"],
            default: "cancel"
        },
        paymentId: {
            type: Number,
            ref: "payments",
            required: true
        },
        meetingLink:{
            type: String,
            required: true
        },
        notes:{
            type: String,

        },
    },
      { timestamps: true },
    
);

export default mongoose.model("Bookings", bookingSchema);