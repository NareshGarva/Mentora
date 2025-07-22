import { Calendar, Star } from "lucide-react";
import React from "react";
import { useState } from "react";
import AboutMentor from "../components/AboutMentor";
import MentorAvailability from "../components/MentorAvailability";
import MentorOverview from "./components/MentorOverview";
import MentorReviewCard from "../components/MentorReviewCard";
import Experience from "../components/Experience";
import Education from "../components/Education";

const ViewMentor = (props) => {
const currency = '₹'
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Experience", "Reviews", "Availability"];

  const renderBottomCard = () => {
    switch (activeTab) {
      case 'About':
        return <AboutMentor mentor_languages={["English", "Hindi"]}/>
      case 'Reviews':
        return <><MentorReviewCard/><MentorReviewCard/><MentorReviewCard/><MentorReviewCard/></>
        case 'Experience':
          return <><Experience/> <Education/></>
      case 'Availability':
        return <MentorAvailability />
      default:
        return <p>Tab content not found</p>
    }
  }

  return (
    <section className="bg-gradient-to-b from-transparent via-indigo-50 to-transparent py-15">
      <div className="mx-5 md:mx-28 flex justify-center items-center">
<div className="w-full md:flex md:justify-center md:items-start md:gap-5">
        <div className="md:w-2/3">
          {/* Mentor Overview Container */}
        <div className="bg-white p-7 rounded-xl mb-5">
          <MentorOverview/>
        </div>

          {/* Tabs */}
          <div className="flex p-1 bg-white rounded-lg overflow-x-auto my-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 w-full font-medium transition rounded ${activeTab === tab
                    ? "bg-gray-200 text-black"
                    : "text-gray-500 hover:text-black"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white p-7 border-2 border-gray-100 rounded-xl my-5">
            {renderBottomCard() } 
          </div>
        </div>
        {/* right section*/}
        <div className="right-section bg-white md:w-1/3 border-2 border-gray-100 rounded-xl p-7 top-20 sticky">
       <div className="flex justify-left items-center gap-1 text-xl font-semibold text-green-500">
        <Calendar size={20}/> <p>Book A Session</p>
       </div>
       <p className=" text-gray-400">Session Duration</p>

            <div className="mt-5">

              <div className="text-gray-700 my-2 border rounded-full border-gray-300 w-full py-2 px-4 flex justify-between items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-50">
             <p className="font-semibold text-black">15 minute</p>
             <p>{currency} 238</p>
              </div>
               <div className="text-gray-700 my-2 border rounded-full border-gray-300 w-full py-2 px-4 flex justify-between items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-50">
             <p className="font-semibold text-black">15 minute</p>
             <p>{currency} 238</p>
              </div>
               <div className="text-gray-700 my-2 border rounded-full border-gray-300 w-full py-2 px-4 flex justify-between items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-50">
             <p className="font-semibold text-black">15 minute</p>
             <p>{currency} 238</p>
              </div>
               <div className="text-gray-700 my-2 border rounded-full border-gray-300 w-full py-2 px-4 flex justify-between items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-50">
             <p className="font-semibold text-black">15 minute</p>
             <p>{currency} 238</p>
              </div>



              <hr />
            
              <div className="flex justify-between mt-2">
                  <span className="text-base text-m-gray-600">Total: </span>
                <span className="text-base text-black">
                  {props.total || "0"}
                </span>
              </div>
                <button className="bg-indigo-500 rounded-full w-full py-2.5 text-white mt-3 font-semibold cursor-pointer transition-all ease-in-out duration-300 hover:bg-indigo-600">Bool Now</button>
              
              
            </div>
          </div>
        </div>
</div>
    </section>
  );
};

export default ViewMentor;