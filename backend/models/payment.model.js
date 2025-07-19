import mongoose from "mongoose" ;

const paymentsSchema = new mongoose.Schema(
    {
        bookingId:{
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Bookings',
            required:  true
        },
        amount:{
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ["pandding","Success","cancel"],
            default: "pendding"
        },
         razorpayPaymentId: {
            type: String,
            required: true
         },
         razorpayOrderId:{
            type: String,
            required: true
         },
         paymentMethod:{
            type: String,
            enum: ["online"],
            default: "online"
         },

    },
    { timestamps: true }
);

export default mongoose.model("Payments", paymentsSchema);