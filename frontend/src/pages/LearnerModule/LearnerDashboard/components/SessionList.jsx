import React from "react";
import { EllipsisVertical } from "lucide-react";
import StarRating from "../../../../components/RatingStars";

const SessionList = (props) => {
  const type = props.type || "upcoming";

  if (type == "upcoming")
    return (
      // Upcoming session list
      <div className="session-list flex w-full bg-white px-4 py-3 rounded-2xl drop-shadow-sm">
        <div className="session-list-contents flex items-center justify-between w-full">
          <div className="flex flex-col min-w-0 items-start justify-center w-full h-full">
            <span className="text-base font-bold block">
              {props.heading || "Session Heading"}
            </span>
            <span className="text-sm text-secondary-500">
              Mentor {props.mentor_name || "Mentor's Name"}
            </span>
          </div>


          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />

          <div className="btn-wrapper w-full h-full flex justify-center items-center">
            <button className="session-list-btn hover:font-medium font-regular px-5 py-2 rounded-2xl bg-secondary-100   hover:bg-secondary-200 transition-colors duration-200 hover:cursor-pointer">
              Join
            </button>
          </div>

          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />
          <div className="btn-wrapper w-full h-full flex justify-center items-center">
            <button className="session-list-btn-non-primary bg-m-gray-100 hover:bg-m-gray-200 hover:cursor-pointer px-5 py-2 rounded-2xl flex items-center justify-center">
              <EllipsisVertical color="black" size={"1rem"} />
            </button>
          </div>

          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />

          <div className="profile-pic-container flex justify-center items-center w-full h-full min-h-[5rem]">
            <img
              src={props.profilePic}
              alt="MentorProfilePicture"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  else if (type == "completed-unreviewed")
    return (
      <div className="session-list flex w-full bg-white px-4 py-3 rounded-2xl drop-shadow-sm">
        <div className="session-list-contents flex items-center justify-between w-full">
          <div className="flex flex-col min-w-0 items-start justify-center w-full h-full">
            <span className="text-base font-bold block">
              {props.heading || "Session Heading"}
            </span>
            <span className="text-sm text-secondary-500">
              Mentor {props.mentor_name || "Mentor's Name"}
            </span>
          </div>


          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />

          <div className="btn-wrapper w-full h-full flex justify-center items-center">
            <button className="session-list-btn hover:font-medium font-regular px-5 py-2 rounded-2xl bg-secondary-100   hover:bg-secondary-200 transition-colors duration-200 hover:cursor-pointer">
              Leave Review
            </button>
          </div>

          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />
          <div className="btn-wrapper w-full h-full flex justify-center items-center">
            <button className="session-list-btn-non-primary bg-m-gray-100 hover:bg-m-gray-200 hover:cursor-pointer px-5 py-2 rounded-2xl flex items-center justify-center">
              <EllipsisVertical color="black" size={"1rem"} />
            </button>
          </div>

          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />

          <div className="profile-pic-container flex justify-center items-center w-full h-full min-h-[5rem]">
            <img
              src={props.profilePic}
              alt="MentorProfilePicture"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  else if (type == "completed")
    return (
      <div className="session-list flex w-full bg-white px-4 py-3 rounded-2xl drop-shadow-sm">
        <div className="session-list-contents flex items-center justify-between w-full">
          <div className="flex flex-col min-w-0 items-start justify-center w-full h-full">
            <span className="text-base font-bold block">
              {props.heading || "Session Heading"}
            </span>
            <span className="text-sm text-secondary-500">
              Mentor {props.mentor_name || "Mentor's Name"}
            </span>
          </div>


          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />

          <div className="btn-wrapper w-full h-full flex justify-center items-center">
            <StarRating rating={props.rating || 3} height="1.5rem" width="1.5rem"/>
          </div>

          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />
          <div className="btn-wrapper w-full h-full flex justify-center items-center">
            <button className="session-list-btn-non-primary bg-m-gray-100 hover:bg-m-gray-200 hover:cursor-pointer px-5 py-2 rounded-2xl flex items-center justify-center">
              <EllipsisVertical color="black" size={"1rem"} />
            </button>
          </div>

          <div className="divider h-6 w-px bg-m-gray-300 rounded-full" />

          <div className="profile-pic-container flex justify-center items-center w-full h-full min-h-[5rem]">
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
