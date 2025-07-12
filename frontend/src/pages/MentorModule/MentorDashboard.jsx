import React from "react";
import { CalendarCheck } from "lucide-react";

const MentorDashboard = (props) => {
  const receivedData = {};

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-4xl font-bold">Mentor Dashboard</p>
        <p className="bg-gradient-to-r from-secondary-500 to-primary-600 text-transparent bg-clip-text">
          {props.Learner_name || "John"}
        </p>

        {/* Page subtext */}
        <p className=" text-m-gray-500">
          Manage your mentoring sessions and track your impact.
        </p>
        <div className="dashboard-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="dashboard-card-1 p-6 flex align-center justify-start bg-gradient-to-tr from-secondary-100 to-secondary-400 border-1 border-secondary-400 w-full rounded-xl h-full">
            <div className="dashboard-icon-wrapper p-3">
              <CalendarCheck size={16} />
            </div>
            <div className="dashboard-card-1-text flex flex-col h-auto">
              <p className="dashboard-card-1-heading  text-sm text-m-gray-600">
                Earning This Month
              </p>
              <p className="dashboard-card-1-content text-2xl text-black font-bold">
                {receivedData.currentMonthEarnings || 0}
              </p>
            </div>
          </div>

          <div className="dashboard-card-2 p-6 flex align-center justify-start bg-gradient-to-tr from-secondary-100 to-secondary-400 stroke-secondary-400 w-full rounded-xl h-full">
            <div className="dashboard-icon-wrapper p-3 ">
              <CalendarCheck size={16} />
            </div>
            <div className="dashboard-card-2-text flex flex-col h-auto">
              <p className="dashboard-card-1-heading text-base text-m-gray-600">
                Sessions
              </p>
              <p className="dashboard-card-2-content text-2xl text-black font-bold">
                {receivedData.totalSessions || 0}
              </p>
            </div>
          </div>

          <div className="dashboard-card-2 p-6 flex align-center justify-start bg-gradient-to-tr from-secondary-100 to-secondary-400 stroke-secondary-400 w-full rounded-xl h-full">
            <div className="dashboard-icon-wrapper p-3 ">
              <CalendarCheck size={16} />
            </div>
            <div className="dashboard-card-2-text flex flex-col h-auto">
              <p className="dashboard-card-1-heading text-base text-m-gray-600">
                Sessions
              </p>
              <p className="dashboard-card-2-content text-2xl text-black font-bold">
                {receivedData.totalSessions || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
