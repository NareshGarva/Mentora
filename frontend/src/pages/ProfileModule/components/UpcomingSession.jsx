import React, { useMemo } from "react";
import SessionList from "./SessionList";
import { useAuth } from "../../../context/auth.context";

function UpcomingSession() {
  const { user } = useAuth();

  // only upcoming sessions
  const upcomingSessions = useMemo(
    () =>
      (user?.sessions || []).filter(
        (s) => s.status === "upcoming" && s.isConfirmed
      ),
    [user?.sessions]
  );

  return (
    <div className="p-8 bg-white rounded-xl shadow-xl">
      <p className='relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-tr before:from-primary-500 before:to-secondary-500 before:content-[""] before:rounded-br-full before:rounded-tr-full mb-8 font-bold text-2xl text-m-gray-800'>
        Upcoming Sessions
      </p>

      {upcomingSessions.length === 0 ? (
        <div className="text-gray-500 text-sm">No upcoming sessions</div>
      ) : (
        <div className="grid grid-rows-2 grid-cols-1 gap-4 md:grid-cols-2">
          {upcomingSessions.map((s) => (
            <SessionList
              key={s._id}
              title={s.title}
              date={new Date(s.date).toLocaleDateString()}
              startTime={s.startTime}
              endTime={s.endTime}
              mentor={s.mentor}
              status={s.status}
              price={s.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingSession;
