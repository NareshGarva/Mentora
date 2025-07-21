import { CalendarCheck, CalendarClock } from "lucide-react";
import React from "react";
import UpcomingSession from "./UpcomingSession";

function Overview() {
  return (
    <div>
      <div className="flex justify-left items-center gap-10">
        {/* Dashboard Card 2 */}
        <div className="w-1/4 p-3 border-2 border-red-200 bg-red-100/70 rounded-lg flex justify-left items-center gap-3 ">
          {/* Dashboard Card icon wrapper */}
          <div className="p-2 rounded-lg bg-red-200">
            <CalendarClock className="text-red-600" />
          </div>
          {/* Dashboard Card text */}
          <div>
            <p className="text-gray-600">Sessions Attended</p>
            <p className="text-3xl text-black font-bold">{10}</p>
          </div>
        </div>
        <div className="w-1/4 p-3 border-2 border-yellow-200 bg-yellow-100/70 rounded-lg flex justify-left items-center gap-3 ">
          {/* Dashboard Card icon wrapper */}
          <div className="p-2 rounded-lg bg-yellow-200">
            <CalendarCheck className="text-yellow-600" />
          </div>

          {/* Dashboard Card text */}
          <div>
            <p className="text-gray-600">Hours Learned</p>
            <p className="text-3xl text-black font-bold">{0}</p>
          </div>
        </div>
        <div className="w-1/4 p-3 border-2 border-indigo-200 bg-indigo-100/70 rounded-lg flex justify-left items-center gap-3 ">
          {/* Dashboard Card icon wrapper */}
          <div className="p-2 rounded-lg bg-indigo-200">
            <CalendarCheck className="text-indigo-600" />
          </div>

          {/* Dashboard Card text */}
          <div>
            <p className="text-gray-600">Goals Progress</p>
            <p className="text-3xl text-black font-bold">67%</p>
          </div>
        </div>
      </div>
<UpcomingSession/>
    </div>
  );
}

export default Overview;
