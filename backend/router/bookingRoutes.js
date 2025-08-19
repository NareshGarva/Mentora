import express from "express";
import {
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking
} from "../controllers/bookingController.js";

const router = express.Router();

router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.put("/:id/status", updateBookingStatus);
router.delete("/:id", deleteBooking);

export default router;
