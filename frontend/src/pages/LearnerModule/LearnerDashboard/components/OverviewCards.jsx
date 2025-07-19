import React from 'react'
import { CalendarCheck, ClockIcon } from "lucide-react";

const OverviewCards = () => {
    const receivedData = {}
  return (
    <>
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
              <ClockIcon className="w-[2rem] h-[2rem] stroke-primary-600" />
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
    </>
  )
}

export default OverviewCards
