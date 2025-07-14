import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.objectId,
            ref: "User",
            required: true
        },
        message:{
            type: String,
            required: true
        },
        type:{
            type: String,
            enum: ["Booking","Payment","System"],
            default: "booking",
            required: true
        },
        isRead:{
            type: Boolean,
            enum:["Yes","No"],
            default: "Yes",
            required: true
        }

    },
    {timestamps: true}

);

export default mongoose.model("Notification", notificationSchema);