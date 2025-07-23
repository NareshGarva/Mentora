import Bookings from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
  try {
    const newBooking = new Bookings(req.body);
    const saved = await newBooking.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Bookings.find().populate("menteeId mentorId sessionId paymentId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await Bookings.findById(req.params.id).populate("menteeId mentorId sessionId paymentId");
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const updated = await Bookings.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    await Bookings.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
