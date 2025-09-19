import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;
  // window.location.reload();

  if (!booking) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-red-600">Invalid Access</h2>
        <button
          onClick={() => navigate('/browse')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Browse Mentors
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
      <p className="mb-2 text-gray-700">Your session has been booked successfully!</p>

      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <p><strong>Session Title:</strong> {booking.sessionTitle}</p>
        <p><strong>Date & Time:</strong> {new Date(booking.sessionDate).toLocaleString()}</p>
        <p><strong>Mentor:</strong> {booking.mentorName}</p>
        <p><strong>Session Type:</strong> {booking.sessionType}</p>
        <p><strong>Price:</strong> ₹{booking.sessionPrice}</p>
        <p>
          <strong>Meeting Link:</strong>{" "}
          <a
            href={booking.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Join Now
          </a>
        </p>
      </div>

      <button
        onClick={() => navigate('/my-sessions')}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded"
      >
        Go to My Sessions
      </button>
    </div>
  );
}

export default PaymentSuccess;
