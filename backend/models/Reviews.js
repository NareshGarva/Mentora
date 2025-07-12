import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
    {
        menteeId: {
            type: mongoose.Schema.Types.objectId,
            ref: "User",
            required: true
        },
        mentorId: {
            type: mongoose.Schema.Types.objectId,
            ref: "User",
            required: true
        },
        rating:{
            type: String,
            required: true
        },
        reviewText:{
            type: String,
            required: true
        },
    },

    { timestamps: true}
);

export default mongoose.model("Reviews", reviewsSchema);