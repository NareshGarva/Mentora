import Session from '../models/session.model.js';
import crypto from 'crypto';
import Payment from '../models/payment.model.js';
import Booking from '../models/booking.model.js';
import razorpay from '../config/razorpay.js'
import MentorUser from '../models/user.mentor.model.js'
import MenteeUser from '../models/user.mentee.model.js'




export const initiateSession = async (req, res) => {
  try {
    const {
      mentee,
      mentor,
      date,
      title,
      description,
      type,
      price
    } = req.body.sessionData;

    const menteeU = await MenteeUser.findOne({ username: mentee });
    const mentorU = await MentorUser.findOne({ username: mentor });

    if (!menteeU || !mentorU) {
      return res.status(404).json({
        success: false,
        message: 'Mentee or Mentor not found'
      });
    }

    if (!price || isNaN(price)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid session price'
      });
    }

    const booking = await Booking.create({
      menteeId: menteeU._id,
      mentorId: mentorU._id,
      sessionDate:date,
      sessionTitle:title,
      notes:description,
      sessionType:type,
      sessionPrice:price,
      status: 'pending'
    });

    const amountInPaise = price * 100;

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `receipt_${booking._id}`
    });
console.log('payment initiate')
    return res.status(200).json({
      success: true,
      order,
      booking
    });
  } catch (error) {
console.log('payment not initiate')
    console.log(error)
    return res.status(500).json({ success: false, message: error.message });
  }
};


export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId,
      sessionData
    } = req.body;

    // 1. Verify Razorpay signature BEFORE saving anything
    const generatedSignature = crypto
      .createHmac('sha256', process.env.MY_RAZORPAY_SECRET_KEY)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid payment signature' });
    }

    // 2. Find booking
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // 3. Create Payment
    const payment = await Payment.create({
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
      status: 'success',
      bookingId: booking._id,
      amount: booking.sessionPrice
    });


    // 4. Create Session
    const session = await Session.create({
      mentee: booking.menteeId,
      mentor: booking.mentorId,
      bookingId: booking._id,
      status: 'upcoming',
      date: booking.sessionDate,
      startTime: sessionData.startTime,
      endTime: sessionData.endTime,
      duration: sessionData.duration,
      type: sessionData.type,
      title: sessionData.title,
      description: sessionData.description,
      price: sessionData.price,
      paymentId: payment._id
    });


    // 5. Generate Zoom link (optional)
    // const menteeUser = await MenteeUser.findById(booking.menteeId);
    // const topic = sessionData.title;
    // const startTime = booking.sessionDate;

    // const meetingLink = await createZoomMeeting(menteeUser, topic, startTime);
const meetingLink = 'this is meeting link'
    session.meetingLink = meetingLink;
    session.isConfirmed = true;
    await session.save();


    // 6. Update Booking
    booking.sessionId = session._id;
    booking.status = 'confirmed';
    await booking.save();
 

    return res.status(200).json({ success: true, message: 'Payment verified and session booked', booking });
  } catch (error) {
    console.log('Payment verification failed:', error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
