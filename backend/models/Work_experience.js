import mongoose from "mongoose";

const Work_experienceSchema = new mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.objectId,
            ref: "User",
            required: true
        },
        company:{
            type: String,
            required: true
        },
        jobProfile:{
            type: String,
            required: true
         },
         joiningDate:{
            type: String,
            required: true
         },
         endingDate:{
            type: String,
            required: true
         },
         aboutJob:{
            type: String,
            required: true
         },

    },
    {timestamps: true}
);

export default mongoose.model("Work_Experience",Work_experienceSchema )