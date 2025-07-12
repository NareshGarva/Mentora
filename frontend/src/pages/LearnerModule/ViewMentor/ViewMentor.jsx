import { Calendar, Star } from "lucide-react";
import React from "react";
import SkillTag from "./components/SkillTag";
import AboutMentor from "./components/AboutMentor";
import BookDurationOption from "./components/BookDurationOption";
import BookSessionBtn from "./components/BookSessionBtn";

const ViewMentor = (props) => {
  return (
    <div className="page-background bg-white h-screen w-screen">
      <div className="All-sections flex gap-8 p-4">
        <div className="left-section w-2/3 flex flex-col gap-8">
          {/* Mentor Overview Container */}
          <div className="flex w-full p-9 gap-9 border-1 border-m-gray-400 rounded-md">
            {/* Mentor Image Container */}
            <div className="flex bg-m-gray-700 h-8 w-8"> </div>
            {/* Mentor overview text container */}
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl text-black m-0">
                {props.Mentor_name || "Mentor Name"}
              </h2>
              <h4 className="Mentor-tagline text-xl text-black">
                {props.Mentor_tagline}
              </h4>
              <p className="location text-xl text-m-gray-600">
                {props.Mentor_location || "Mentor's location"}
              </p>
              {/* ratings container */}
              <div className="ratings-container flex gap-3 items-center">
                <Star className="w-[1rem] h-[1rem]"></Star>
                {props.mentor_rating || "0.0"}
              </div>
              {/* tags container*/}
              <div className="tags-container flex gap-2 w-full">
                <SkillTag />
                <SkillTag />
                <SkillTag />
                <SkillTag />
              </div>
            </div>
          </div>

          {/* Bottom left container */}
          <div className="flex w-full p-9 gap-9 border-1 border-m-gray-400 rounded-md">
            <AboutMentor mentor_languages={["eng", "hin"]} />
          </div>
        </div>
        {/* right section*/}
        <div className="right-section flex flex-col w-1/3 rounded-md">
          <div className="flex w-full p-9 gap-9 border-1 border-m-gray-400">
            <div className="book-session-contents flex flex-col gap-4 w-full">
              <Calendar className="w-[2rem] h-[2rem]" />
              <h4 className="text-base font-bold">Session Duration</h4>
              <div className="book-duration-options-container flex flex-col w-full gap-4">
                <BookDurationOption />
                <BookDurationOption />
                <BookDurationOption />
              </div>
              <div className="total-container flex justify-between">
                <span className="text-base text-m-gray-600">Total: </span>
                <span className="text-base text-black">
                  {props.total || "0"}
                </span>
              </div>
              <BookSessionBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMentor;
