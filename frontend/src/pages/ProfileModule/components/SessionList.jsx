import React from "react";
import { EllipsisVertical } from "lucide-react";
import Avatar from "../../../components/Avatar";

const SessionList = (props) => {
  return (
    <div className="w-full bg-white p-4 rounded-2xl">
  <div className="flex items-center justify-between w-full gap-4">
    {/* Left Section: Text Info */}
    <div className="flex flex-col min-w-0">
      <span className="text-base font-bold truncate">
        {props.heading || "Session Heading"}
      </span>
      <span className="text-sm text-secondary-500 truncate">
        Mentor {props.mentor_name || "Mentor's Name"}
      </span>
    </div>

    {/* Action Buttons */}
    <div className="flex items-center gap-3 ml-auto">
      <button className="bg-secondary-300 text-sm font-medium px-3 py-1 rounded hover:bg-m-gray-200">
        Join
      </button>

      <button className="bg-m-gray-200 px-2 py-2 rounded-full flex items-center justify-center hover:bg-m-gray-300 transition">
        <EllipsisVertical color="black" size="1rem" />
      </button>

      {/* Profile Picture */}
     <Avatar/>
    </div>
  </div>
</div>

  );
};

export default SessionList;
