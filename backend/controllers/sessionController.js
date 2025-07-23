// controllers/sessionController.js
import Session from '../models/Session.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import Payment from '../models/Payment.js';
import Booking from '../models/Booking.js';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

export const initiateSession = async (req, res) => {
  try {
    const {
      date,
      startTime,
      endTime,
      duration,
      title,
      description,
      type,
      mentor,
      price
    } = req.body;

    // Create session with status: 'pending'
    const session = await Session.create({
      date,
      startTime,
      endTime,
      duration,
      title,
      description,
      type,
      mentor,
      price,
      status: 'pending'
    });

    const amountInPaise = price * 100;

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `receipt_${session._id}`
    });

    return res.status(200).json({
      success: true,
      order,
      session
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      sessionId
    } = req.body;

    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid signature' });
    }

    const payment = await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      status: 'success'
    });

    const session = await Session.findByIdAndUpdate(sessionId, { status: 'upcoming' }, { new: true });

    const booking = await Booking.create({
      student: req.user.id, // assumes middleware sets req.user
      mentor: session.mentor,
      session: session._id,
      payment: payment._id,
      status: 'confirm'
    });

    return res.status(200).json({ success: true, message: 'Payment verified and session booked', booking });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
