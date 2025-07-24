import express from 'express'
import ApiError from '../utils/ApiError.js';
import MentorUser from '../models/user.mentor.model.js'
import MenteeUser from '../models/user.mentee.model.js'



const getUser = async (req, res)=>{
    const _id = req.user._id;
    const role = req.user.role;
    if(!_id || !role){
        throw new ApiError(404, "User id or role not found");
    }
    try{
        const user = await (role==='Mentor'?MentorUser:MenteeUser).findById(_id);
        if(!user){
            throw new ApiError(404, "User not found");
        }
        return res.status(200).json({message: "User found", user})
    }catch(err){
        console.log(err);
        throw new ApiError(500 , "Internal server error");
    }
}


const getMentors = async (req, res) => {
  try {
    const mentors = await MentorUser.find()
      .select("-password -refreshToken")
      .populate("education")     
      .populate("socialLink")       
      .populate("expertise")      
      .populate("rate")                  
      .populate("sessions")          
      .populate("availability");   

    res.status(200).json({mentors});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to fetch mentors", error: error.message });
  }
};



const checkUsername = async (req, res)=>{
const username = req.username;
const role = req.user.role;

if(!username){
    return res.status(400).json({message:"username not found"});
}
try{
    const user = await (role==="Mentor"?MentorUser:MenteeUser).findOne({username});
    if(!user){
        return res.status(200).json({message:"Valid username"});
    }
    return res.status(409).json({message:"username already taken"});
}catch(error){
    console.log(error);
    throw new ApiError(500, "Error in username check");
}

}



export {getUser, getMentors,checkUsername}