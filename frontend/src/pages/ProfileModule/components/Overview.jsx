import { CalendarCheck, CalendarClock, TrendingUp } from "lucide-react";
import React from "react";
import UpcomingSession from "./UpcomingSession";
import { useAuth } from '../../../context/auth.context';
import { IndianRupee, Star, Users } from "lucide-react";

function Overview() {
  const { user, isLoggedIn, isLoading, verifyUser } = useAuth();

  const receivedData = {};
  if(user?.role === 'Mentee')
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Dashboard Cards*/}
        <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-secondary-200 to bg-secondary-300 to-tertiary-100 w-full rounded-xl h-full flex items-center gap-6 ">
          {/* Dashboard Card icon wrapper */}
          <div className="p-3 rounded-xl bg-secondary-200">
            <CalendarCheck className="text-secondary-600" />
          </div>
          {/* Dashboard Card text */}
          <div>
            <p className="text-gray-600">Sessions Attended</p>
            <p className="text-3xl text-black font-bold">{10}</p>
          </div>
        </div>
        <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-yellow-200 to bg-yellow-300 to-white w-full rounded-xl h-full flex items-center gap-6 ">
          {/* Dashboard Card icon wrapper */}
          <div className="p-3 rounded-xl bg-yellow-200">
            <CalendarClock className="text-yellow-600" />
          </div>

          {/* Dashboard Card text */}
          <div>
            <p className="text-gray-600">Hours Learned</p>
            <p className="text-3xl text-black font-bold">{0}</p>
          </div>
        </div>
        <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-primary-200 to bg-primary-300 to-tertiary-100 w-full rounded-xl h-full flex items-center gap-6 ">
          {/* Dashboard Card icon wrapper */}
          <div className="p-3 rounded-xl bg-primary-200">
            <TrendingUp className="text-primary-700" />
          </div>

          {/* Dashboard Card text */}
          <div>
            <p className="text-gray-600">Goals Progress</p>
            <p className="text-3xl text-black font-bold">67%</p>
          </div>
        </div>
      </div>
      <UpcomingSession />
    </div>
  );
  else{
    return (
      <>
          {/* Dashboard cards Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Dashboard Card 2 */}
            <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-secondary-200 to bg-secondary-300 to-tertiary-300 w-full rounded-xl h-full flex items-center gap-6 ">
              {/* Dashboard Card icon wrapper */}
              <div className="p-3 w-fit h-fit rounded-2xl bg-secondary-200">
                <IndianRupee className="w-[2rem] h-[2rem] stroke-secondary-700" />
              </div>

              {/* Dashboard Card text */}
              <div className="dashboard-card-1-text flex flex-col h-auto">
                <p className="dashboard-card-1-heading  text-base text-m-gray-700">
                  Earnings this month
                </p>
                <p className="dashboard-card-1-content text-3xl text-black font-bold">
                  {receivedData.sessionsAttended || 0}
                </p>
              </div>
            </div>

            <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-primary-200 to bg-primary-300 to-tertiary-100 w-full rounded-xl h-full flex items-center gap-8  sm:p-3">
              {/* Dashboard Card icon wrapper */}
              <div className="p-3 w-fit h-fit rounded-2xl bg-primary-100">
                <Users className="w-[2rem] h-[2rem] stroke-primary-600" />
              </div>

              {/* Dashboard Card text */}
              <div className="dashboard-card-1-text flex flex-col h-auto">
                <p className="dashboard-card-1-heading  text-base text-m-gray-700">
                  Sessions
                </p>
                <p className="dashboard-card-1-content text-3xl text-black font-bold">
                  {receivedData.sessions || 0}
                </p>
              </div>
            </div>

            <div className="dashboard-card shadow-sm p-6 bg-gradient-to-tl from-orange-200 to bg-orange-300 to-white w-full rounded-xl h-full flex items-center gap-8  ">
              {/* Dashboard Card icon wrapper */}
              <div className="p-3 w-fit h-fit rounded-2xl bg-orange-100">
                <Star className="w-[2rem] h-[2rem] stroke-orange-400" />
              </div>

              {/* Dashboard Card text */}
              <div className="dashboard-card-1-text flex flex-col h-auto">
                <p className="dashboard-card-1-heading  text-base text-m-gray-700">
                  Avg. Rating
                </p>
                <p className="dashboard-card-1-content text-3xl text-black font-bold">
                  {receivedData.average_rating || 0}
                </p>
              </div>
            </div>
          </div>
    </>
    )
  }
}

export default Overview;
