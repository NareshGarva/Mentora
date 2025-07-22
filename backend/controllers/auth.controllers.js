import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import menteeUser from "../models/user.mentee.model.js";
import mentorUser from "../models/user.mentor.model.js";
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
    throw new ApiError(404, "All fields required");
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const isAvailable = await User.findOne({ email });
    if (isAvailable) {
      throw new ApiError(409, "User already registered");
    }
    const user = await (role==='Mentee'?menteeUser:mentorUser).create({
      name: name,
      username: getUsername(name),
      email: email,
      password: hashedPassword,
      role: role,
    });
    console.log("User created");
    req.body = { email, password };
    // return res.status(201).json({ message: "User created", user });
    return loginUser(req, res);
  } catch (error) {
    console.log("error in user creation :", error);
    console.log("User not created")
    throw new ApiError(400, "Error in account creation");
  }
};

const loginUser = async (req, res) => {
  const { usernameORemail, password } = req.body;
  if (!usernameORemail || !password) {
    return res.status(404).json({ message: "All fields are required" });
  }

  let email, username;
  if (isEmail(usernameORemail)) {
    email = usernameORemail.trim();
  } else {
    username = usernameORemail.trim();
  }

 const mentor = await mentorUser.findOne({ $or: [{ email }, { username }] }).select(
    "+password"
  );

  const mentee = await menteeUser.findOne({ $or: [{ email }, { username }] }).select(
    "+password"
  );

  let user;
  if(!mentee){
    user = mentor
  }else{
    user = mentee
  }

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid user" });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  try {
    user.refreshToken = refreshToken;
    await user.save();
  } catch (error) {
    console.log(`Error in saving refresh token : ${error}`);
    return res.status(400).json({ message: "Please try again" });
  }

  //set refresh token in cookie-only
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days only
  });

    //set access token in cookie-only
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes only
  });

    console.log("User LoggedIn")

  return res.status(200).json({
    user: {
      name: user.name,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      role: user.role,
    },
    message: `Login successful`,
  });
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
    const user = await (decode.role==='Mentee'?menteeUser:mentorUser).findById(decode._id).select('+refreshToken');

    if (!user || user.refreshToken != token) {
      throw new ApiError(404, "user unAuthorized");
    }

    const newAccessToken = generateAccessToken(user);
    console.log("Token generated")

       //set access token in cookie-only
  res.cookie("accessToken", newAccessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes only
  });

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
    const user = await User.findOne({ refreshToken: token });
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
    console.log("User logout")
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error(err);
    console.log("User not logout")
    throw new ApiError(500, "Error during logout");
  }
};



export { createUser, loginUser, refreshAccessToken, logoutUser };
