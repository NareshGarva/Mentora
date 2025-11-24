import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import MentorUser from '../models/user.mentor.model.js'
import MenteeUser from '../models/user.mentee.model.js'

const verifyToken = async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return next(new ApiError(401, "Access token not found"));
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    const user = await (decoded.role==='Mentee'?MenteeUser:MentorUser).findById(decoded._id);
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    const status =
      err.name === "JsonWebTokenError" || err.name === "TokenExpiredError"
        ? 401
        : 500;

    return next(new ApiError(status, "Unauthorized: Invalid or expired token"));
  }
};

export default verifyToken;
