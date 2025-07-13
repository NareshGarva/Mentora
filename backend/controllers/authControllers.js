import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

const getUsername = (query = '') => {
  const name = query.trim().toLowerCase().replace(/\s+/g, '');
  const uniqueSuffix = Date.now().toString().slice(-4);
  return `${name}${uniqueSuffix}`;
};

 const createUser = async (req, res) => {
    if(!req.body){
        return res.status(404).json({message:"user data not found"});
    }
    const {name, email, password, role} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    try{
        const user = await User.create({
            name:name,
            username:getUsername(name),
            email:email,
            password: hashedPassword,
            role:role
        });
        return res.status(200).json({message:"User created", user});
    }catch(error){
        console.log("error in user creation :",error);
        return res.status(500).json({message:"Internal server error"});
    }
}

const loginUser = (req, res) =>{
    if(!req.body){
        return res.status(404).json({message:"Please enter credentials"});
    }
    const {username, email, password} = req.body;

    const user = User.findOne({$or:[{email}, {username}]});

    if(!user || (bcrypt.compare(password != user.password))){
        return res.status(400).json({message:"Invalid user"});
    }
}

export { createUser, loginUser,  };