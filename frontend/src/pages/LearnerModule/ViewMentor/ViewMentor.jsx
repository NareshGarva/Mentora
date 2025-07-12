import { Calendar, Star } from "lucide-react";
import React from "react";
import SkillTag from "./components/SkillTag";
import AboutMentor from "./components/AboutMentor";
import BookDurationOption from "./components/BookDurationOption";
import BookSessionBtn from "./components/BookSessionBtn";

const ViewMentor = (props) => {
  return (
    <>
      <div className="left-section w-2/3">
        {/* Mentor Overview Container */}
        <div className="flex w-full p-9 gap-9 stroke-1 stroke-m-gray-400">
          {/* Mentor Image Container */}
          <div className="flex bg-m-gray-700 h-8 w-8"> </div>
          {/* Mentor overview text container */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl text-black">
              {props.Mentor_name || "Mentor Name"}
            </h2>
            <h4 className="Mentor-tagline text-xl text-black">
              {props.Mentor_tagline}
            </h4>
            <p className="location text-xl text-m-gray-600">
              {props.Mentor_location || "Mentor's location"}
            </p>
            {/* ratings container */}
            <div className="ratings-container flex gap-3">
              <Star className="w-[1rem] h-[1rem]"></Star>
              {props.mentor_rating || "0.0"}
            </div>
            {/* tags container*/}
            <div className="tags-container w-full">
              <SkillTag />
              <SkillTag />
              <SkillTag />
              <SkillTag />
            </div>
          </div>
        </div>

        {/* Bottom left container */}
        <div className="flex w-full p-9 gap-9 stroke-1 stroke-m-gray-400">
          <AboutMentor />
        </div>
      </div>
      <div className="right-section">
        <div className="flex w-full p-9 gap-9 stroke-1 stroke-m-gray-400">
          <div className="book-session-contents flex flex-col gap-4">
            <Calendar className="w-[2rem] h-[2rem]" />
            <h4 className="text-base font-bold">Session Duration</h4>
            <div className="book-duration-options-container">
              <BookDurationOption />
              <BookDurationOption />
              <BookDurationOption />
            </div>
            <div className="total-container flex justify-between">
              <span className="text-base text-m-gray-600">Total: </span>
              <span className="text-base text-black">{props.total || "0"}</span>
            </div>
            <BookSessionBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMentor;
