import React from "react";
import { CalendarCheck } from "lucide-react";

const LearnerDashboard = (props) => {
  const receivedData = {};

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
        {/* Dashboard cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Dashboard Card 2 */}
          <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-secondary-200 to bg-secondary-300 to-tertiary-100 w-full rounded-xl h-full flex items-center gap-6 ">
            {/* Dashboard Card icon wrapper */}
            <div className="p-3 w-fit h-fit rounded-2xl bg-secondary-200">
              <CalendarCheck className="w-[2rem] h-[2rem] stroke-secondary-600" />
            </div>

            {/* Dashboard Card text */}
            <div className="dashboard-card-1-text flex flex-col h-auto">
              <p className="dashboard-card-1-heading  text-base text-m-gray-700">
                Sessions Attended
              </p>
              <p className="dashboard-card-1-content text-3xl text-black font-bold">
                {receivedData.sessionsAttended || 10}
              </p>
            </div>
          </div>

          <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-primary-200 to bg-primary-300 to-tertiary-100 w-full rounded-xl h-full flex items-center gap-6 ">
            {/* Dashboard Card icon wrapper */}
            <div className="p-3 w-fit h-fit rounded-2xl bg-primary-200">
              <CalendarCheck className="w-[2rem] h-[2rem] stroke-primary-600" />
            </div>

            {/* Dashboard Card text */}
            <div className="dashboard-card-1-text flex flex-col h-auto">
              <p className="dashboard-card-1-heading  text-base text-m-gray-700">
                Hours Learned
              </p>
              <p className="dashboard-card-1-content text-3xl text-black font-bold">
                {receivedData.sessionsAttended || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
