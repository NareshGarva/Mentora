import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Access token not found");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    const status = err.name === "JsonWebTokenError" || err.name === "TokenExpiredError" ? 401 : 500;
    next(new ApiError(status, "Unauthorized: Invalid or expired token"));
  }
};

export default verifyToken;
