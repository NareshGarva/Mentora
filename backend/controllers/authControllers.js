import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/User'


const createUser = async (req, res) => {
    console.log("hello")
    if(!req.body){
        return res.status(404).json({message:"user data not found"});
    }
    const {fullName, email, password, role} = req.body;
    const username = fullName + Math.random()*99;
    const hashedPassword = await bcrypt.hash(password,10);
    try{
        const user = await User.create({
            name:fullName,
            username:username,
            email:email,
            password: hashedPassword,
            role:role
        });
        if(!user.ok){
            return res.status(500).json({message:"Error in creating user"});
        }
        return res.status(200).json({message:"User created", user});
    }catch(error){
        console.log("error in user creation :",error);
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports={createUser};