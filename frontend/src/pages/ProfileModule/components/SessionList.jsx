import React from "react";
import { EllipsisVertical } from "lucide-react";
import Avatar from "../../../components/Avatar";
import StarRating from "../../../components/RatingStars";

const SessionList = (props) => {
  if (props.type == "completed-unreviewed") {
    return (
      <>
        <div className="session-list flex w-full bg-white px-4 py-3 rounded-xl drop-shadow-sm">
          <div className="session-list-contents flex items-center justify-between w-full">
            {/* Left Section: Text Info */}
            <div className="flex flex-col items-start justify-center h-full min-w-fit">
              <span className="text-base font-bold truncate">
                {props.heading || "Session Heading"}
              </span>
              <span className="text-sm text-secondary-500 truncate">
                Mentor {props.mentor_name || "Mentor's Name"}
              </span>
            </div>

            {/* Action Buttons */}
            <button className="hover:font-medium font-regular px-4 py-2 rounded-2xl bg-secondary-100   hover:bg-secondary-200 transition-colors duration-200 hover:cursor-pointer">
              Leave Review
            </button>
            <button className="session-list-btn-non-primary bg-m-gray-100 hover:bg-m-gray-200 hover:cursor-pointer px-5 py-2 rounded-2xl flex items-center justify-center">
              <EllipsisVertical color="black" size="1rem" />
            </button>
            {/* Profile Picture */}
            <Avatar />
          </div>
        </div>
      </>
    );
  } else if (props.type == "completed-reviewed") {
    return (
      <>
        <div className="session-list flex w-full bg-white px-4 py-3 rounded-xl drop-shadow-sm">
          <div className="session-list-contents flex items-center justify-between w-full">
            {/* Left Section: Text Info */}
            <div className="flex flex-col items-start justify-center h-full min-w-fit">
              <span className="text-base font-bold truncate">
                {props.heading || "Session Heading"}
              </span>
              <span className="text-sm text-secondary-500 truncate">
                Mentor {props.mentor_name || "Mentor's Name"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="">
              <StarRating
                rating={props.rating || 3}
                height="1.2rem"
                width="1.2rem"
              />
            </div>
            <button className="session-list-btn-non-primary bg-m-gray-100 hover:bg-m-gray-200 hover:cursor-pointer px-5 py-2 rounded-2xl flex items-center justify-center">
              <EllipsisVertical color="black" size="1rem" />
            </button>
            {/* Profile Picture */}
            <Avatar />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="session-list flex w-full bg-white px-4 py-3 rounded-xl drop-shadow-sm">
        <div className="session-list-contents flex items-center justify-between w-full">
          {/* Left Section: Text Info */}
          <div className="flex flex-col items-start justify-center h-full min-w-fit">
            <span className="text-base font-bold truncate">
              {props.heading || "Session Heading"}
            </span>
            <span className="text-sm text-secondary-500 truncate">
              Mentor {props.mentor_name || "Mentor's Name"}
            </span>
          </div>

          {/* Action Buttons */}
          <button className="hover:font-medium font-regular px-4 py-2 rounded-2xl bg-secondary-100   hover:bg-secondary-200 transition-colors duration-200 hover:cursor-pointer">
            Join
          </button>
          <button className="session-list-btn-non-primary bg-m-gray-100 hover:bg-m-gray-200 hover:cursor-pointer px-5 py-2 rounded-2xl flex items-center justify-center">
            <EllipsisVertical color="black" size="1rem" />
          </button>
          {/* Profile Picture */}
          <Avatar />
        </div>
      </div>
    );
  }
};

export default SessionList;
