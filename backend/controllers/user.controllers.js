import express from 'express'
import ApiError from '../utils/ApiError.js';
import MentorUser from '../models/user.mentor.model.js'
import MenteeUser from '../models/user.mentee.model.js'


const getUser = async (req, res) => {
  try {
    const { _id, role } = req.user;
    if (!_id || !role) {
      return res.status(400).json({
        success: false,
        message: "User id or role not found",
      });
    }

    let Model, populateFields = [];

    if (role === "Mentor") {
      Model = MentorUser;
      populateFields = [
        "education",
        "socialLinks",
        "expertise",
        "workHistory",
        // "reviews",
        "availability",
        "rate",
        "sessions",
        // "address",
      ];
    } else if (role === "Mentee") {
      Model = MenteeUser;
      populateFields = [
        "favoriteMentors",
        "sessions",
        // "reviews",
        // "address",
      ];
    } else if (role === "Admin") {
      // Admin might not need populates
      Model = MenteeUser; // or MentorUser, depending on how you store Admin
      populateFields = [];
    }

    const query = Model.findById(_id).select("-password -refreshToken");

    // Apply population dynamically
    populateFields.forEach((field) => query.populate(field));

    const user = await query;

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User found",
      user,
    });
  } catch (err) {
    console.error("Error in getUser:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};






const getMentors = async (req, res) => {
  try {
    const mentors = await MentorUser.find()
      .select("-password -refreshToken")
      .populate("education")     
      .populate("socialLinks")       
      .populate("expertise")      
      .populate("rate")                  
      .populate("sessions")          
      .populate("workHistory")          
      .populate("availability");   

    res.status(200).json({mentors});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to fetch mentors", error: error.message });
  }
};



const checkUsername = async (req, res)=>{
const username = req.query.username;
const role = req.user.role;
if(!username){
    return res.status(400).json({message:"username not found"});
}
try{
    const user = await (role==="Mentor"?MentorUser:MenteeUser).findOne({username});
    if(!user){
        return res.status(200).json({message:"Valid username",available:true});
    }
    return res.status(409).json({message:"username already taken",available:false});
}catch(error){
    console.log(error);
    throw new ApiError(500, "Error in username check");
}

}



export {getUser, getMentors,checkUsername}