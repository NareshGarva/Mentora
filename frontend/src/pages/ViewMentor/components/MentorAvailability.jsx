import React from "react";

const MentorAvailability = (props) => {
  return (
    <div className="">
      <h4 className="text-2xl font-semibold">Availability</h4>
      <p className="text-gray-500 mb-4">
        Available for sessions in {props.timezone} timezone. Book a session to
        see real-time availability.
      </p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">Monday - Friday:</span>
          <span className="text-gray-500 text-sm">9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Saturday:</span>
          <span className="text-gray-500 text-sm">10:00 AM - 2:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Sunday:</span>
          <span className="text-gray-500 text-sm">Not Available</span>
        </div>
      </div>
    </div>
  );
};

export default MentorAvailability;
