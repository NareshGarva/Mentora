import mongoose from "mongoose";

const favoriteMentorSchema = new mongoose.Schema(
    {
        mentee:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        mentor:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        notes:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

export default mongoose.model("FavoriteMentor", favoriteMentorSchema )