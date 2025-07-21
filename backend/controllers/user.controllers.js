import express from 'express'
import User from '../models/user.model.js'
import ApiError from '../utils/ApiError.js';

const getUser = async (req, res)=>{
    const _id = req.user._id;
    
    if(!_id){
        throw new ApiError(404, "User id not found");
    }
    try{
        const user = await User.findById(_id);
        if(!user){
            throw new ApiError(404, "User not found");
        }
        return res.status(200).json({message: "User found", user})
    }catch(err){
        console.log(err);
        throw new ApiError(500 , "Internal server error");
    }
}

export {getUser}