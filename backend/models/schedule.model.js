import mongoose from "mongoose";

const schedulesSchema = new mongoose.Schema(
    {
        mentorId:{
            type: mongoose.Schema.Types.objectId,
            ref: "User",
            required: true
        },
        date:{
            type: Date,
            required: true

        },
        startTime:{
            type: Date,
            required: true
        },
        endTime:{
            type: Date,
            required: true
        },
        isBooked:{
            type: Boolean,
            enum: ["Yes","No"],
            required: true
        },
    },
    {timestamps: true}
);

export default mongoose.model("Schedules", schedulesSchema);