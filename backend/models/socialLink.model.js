import mongoose from "mongoose";

const socialLinksSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.objectId,
            ref: "User",
            required: true
        },
        platform:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },

    },
    {timestamps: true}
);

export default mongoose.model("SocialLinks", socialLinksSchema)