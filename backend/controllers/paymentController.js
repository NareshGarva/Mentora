import Payments from "../models/paymentModel.js";

export const createPayment = async (req, res) => {
  try {
    const payment = new Payments(req.body);
    const saved = await payment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payments.find().populate("bookingId sessionId");
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPaymentById = async (req, res) => {
  try {
    const payment = await Payments.findById(req.params.id).populate("bookingId sessionId");
    if (!payment) return res.status(404).json({ error: "Payment not found" });
    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePaymentStatus = async (req, res) => {
  try {
    const updated = await Payments.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
