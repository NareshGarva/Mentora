import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

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
  return jwt.sign(
    { id: user._id, role: user.role, username: user.username },
    process.env.ACCESS_SECRET,
    { expiresIn: "15m" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role, username: user.username },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All flied are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const isAvailable = await User.findOne({ email });
    if (isAvailable) {
      return res.status(409).json({ message: "User already registered" });
    }
    const user = await User.create({
      name: name,
      username: getUsername(name),
      email: email,
      password: hashedPassword,
      role: role,
    });
    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.log("error in user creation :", error);
    return res.status(500).json({ message: "Internal server error" });
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

  const user = await User.findOne({ $or: [{ email }, { username }] }).select(
    "+password"
  );
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
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    accessToken,
    user: { name: user.name, username: user.username, avatar:user.avatar, email: user.email, role: user.role },
    message: `Login successful`,
  });
};

export { createUser, loginUser };
