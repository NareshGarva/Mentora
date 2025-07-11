import React from "react";
import { EllipsisVertical } from "lucide-react";

const SessionList = (props) => {
  return (
    <div className="session-list flex w-full bg-white px-4 py-3 rounded-2xl drop-shadow-sm">
      <div className="session-list-contents flex items-center justify-between w-full">
        <div className="flex flex-col min-w-0  align-bottom">
          <span className="text-base font-bold block">{props.heading || "Session Heading"}</span>
          <span className="text-sm text-secondary-500">
            Mentor {props.mentor_name || "Mentor's Name"}
          </span>
        </div>

        <div className="h-6 w-px bg-m-gray-300 rounded-full" />

        <button className="session-list-btn bg-secondary-100 px-9 py-6 rounded-2xl hover:bg-m-gray-200">
          Join
        </button>

        <div className="h-6 w-px bg-m-gray-300 rounded-full" />

        <button className="session-list-btn-non-primary bg-m-gray-200 px-9 py-6 rounded-2xl flex items-center justify-center">
          <EllipsisVertical color="black" size={"1rem"} />
        </button>

        <div className="h-6 w-px bg-m-gray-300 rounded-full" />

        <div className="profile-pic-container flex items-center">
          <img
            src={props.profilePic}
            alt="MentorProfilePicture"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SessionList;
