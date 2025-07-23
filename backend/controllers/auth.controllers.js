import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MenteeUser from "../models/user.mentee.model.js";
import MentorUser from "../models/user.mentor.model.js";
import ApiError from "../utils/ApiError.js";


const getUsername = (query = "") => {
  const name = query.trim().toLowerCase().replace(/\s+/g, "");
  const uniqueSuffix = Date.now().toString().slice(-4);
  return `${name}${uniqueSuffix}`;
};




function isEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}






const generateAccessToken = (user) => {
  console.log(`user is : ${user}`)
  return jwt.sign(
    { _id: user._id, role: user.role, username: user.username },
    process.env.ACCESS_SECRET,
    { expiresIn: "15m" }
  );
};






const generateRefreshToken = (user) => {
  return jwt.sign(
    { _id: user._id, role: user.role, username: user.username },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};









const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(404).json({ message: "All fields required"});
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const isAvailable = await MentorUser.findOne({ email }) || await MenteeUser.findOne({ email });
    if (isAvailable) {
    return res.status(409).json({ message: "User already registered"});
    }
    const user = await (role==='Mentee'?MenteeUser:MentorUser).create({
      name: name,
      username: getUsername(name),
      email: email,
      password: hashedPassword,
      role: role,
    });
    console.log("User created");
    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.log("error in user creation :", error);
    console.log("User not created")
    throw new ApiError(400, "Error in account creation");
  }
};



const loginUser = async (req, res) => {
  const { usernameORemail, password } = req.body;

  if (!usernameORemail || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Clean the input: remove all whitespace and lowercase
  const cleanedInput = String(usernameORemail).replace(/\s+/g, "").toLowerCase();

  // Decide which field to query
  const searchQuery = isEmail(cleanedInput)
    ? { email: cleanedInput }
    : { username: cleanedInput };

  try {
    const mentor = await MentorUser.findOne(searchQuery).select("+password");
    const mentee = await MenteeUser.findOne(searchQuery).select("+password");

    const user = mentee || mentor;

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    console.log("User logged in:", user.username);

    return res.status(200).json({
      message: "Login successful",user:{
        username:user.username,
        role:user.role,
        email:user.email,
        name:user.name
      }});
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};



const refreshAccessToken = async (req, res) => {
  const token =
    req.cookies?.refreshToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(404, "Token not found");
  }
  try {
    const decode = jwt.verify(token, process.env.REFRESH_SECRET);

    const user = await (decode.role==='Mentee'?MenteeUser:MentorUser).findById(decode._id).select('+refreshToken');

    if (!user || user.refreshToken != token) {
      throw new ApiError(404, "user unAuthorized");
    }

    const newAccessToken = generateAccessToken(user);
    

       //set access token in cookie-only
  res.cookie("accessToken", newAccessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes only
  });
console.log("Token generated")
    return res
      .status(201)
      .json({
        accessToken: newAccessToken,
        message: "New access token generated",
      });
  } catch (err) {
    console.log(err);
    console.log("Token not generated")
    const status =
      err.name === "JsonWebTokenError" || err.name === "TokenExpiredError"
        ? 401
        : 500;

    return res
  .status(status)
  .json({ message: "Unauthorized: Invalid or expired token from refresh token" });

  }
};



const logoutUser = async (req, res) => {
  const token =
    req.cookies?.refreshToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Already logged out or no refresh token provided");
  }

  try {
    const mentor = await MentorUser
      .findOne({ refreshToken: token });

    const mentee = await MenteeUser
      .findOne({ refreshToken: token });

    const user = mentee || mentor;

    console.log(`user`, mentor, mentee);
    if (!user) {
      throw new ApiError(403, "Unauthorized request");
    }

    user.refreshToken = '';
    await user.save();

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
     res.clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    console.log("User logout")
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error(err);
    console.log("User not logout")
    throw new ApiError(500, "Error during logout");
  }
};



export { createUser, loginUser, refreshAccessToken, logoutUser };
