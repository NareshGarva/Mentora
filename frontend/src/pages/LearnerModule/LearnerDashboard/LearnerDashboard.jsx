import React, { useState } from "react";

import OverviewCards from "./components/OverviewCards";
import AllSessions from "./components/AllSessions";
OverviewCards

const LearnerDashboard = (props) => {
  const receivedData = {};
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Sessions", "Requests", "Earnings"];
  const renderBottomCard = () => {
    switch (activeTab) {
      case "Overview":
        return <OverviewCards />;
      case "Sessions":
        return <AllSessions />;
      case "Availability":
        return <></>;
      default:
        return <p>Tab content not found</p>;
    }
  };

  return (
    <div className="page-background bg-white w-auto min-h-screen">
      <div className="center-it p-12 flex flex-col gap-4">
        <p className="text-4xl font-bold">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-secondary-500 to-primary-600 text-transparent bg-clip-text">
            {props.Learner_name || "John"}
          </span>
        </p>
        {/* Page subtext */}
        <p className=" text-m-gray-500">
          Continue your learning journey with personalized mentorship
        </p>
        
        

        <div className="tabs-container">
          <div className="flex p-1 bg-gray-50 rounded-full overflow-x-auto ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 w-full font-medium transition rounded-full ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="">{renderBottomCard()}</div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
