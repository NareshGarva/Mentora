import React from "react";

const MentorAvailability = (props) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-2xl text-black font-bold">Availability</h4>
      <p className="text-m-gray-500 mb-4">
        Available for sessions in {props.timezone} timezone. Book a session to
        see real-time availability.
      </p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Monday - Friday:</span>
          <span>9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Saturday:</span>
          <span>10:00 AM - 2:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Sunday:</span>
          <span>Not Available</span>
        </div>
      </div>
    </div>
  );
};

export default MentorAvailability;
