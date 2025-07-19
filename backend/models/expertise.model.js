import mongoose from "mongoose";

const expertiseSchema = new mongoose.Schema(
    {
        userId: {
                    type: mongoose.Schema.Types.objectId,
                    ref: "User",
                    required: true
        },
        expertise: {
            type: String,
            required: true
        },
        level:{
            type: String,
            enum: ["Beginner","Intermediate","Expert"],
            required: true
        },
    },
    {timestamps: true}
);

export default mongoose.model("Expertise", expertiseSchema);