import React, { useMemo } from "react";
import SessionList from "./SessionList";
import { useAuth } from "../../../context/auth.context";

function PastSession() {
  const { user } = useAuth();

  // Completed sessions
  const pastSessions = useMemo(
    () =>
      (user?.sessions || []).filter((s) => s.status === "completed"),
    [user?.sessions]
  );

  return (
    <div className="p-8 bg-white rounded-xl shadow-xl">
      <p className='relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-tr before:from-primary-500 before:to-secondary-500 before:content-[""] before:rounded-br-full before:rounded-tr-full mb-8 font-bold text-2xl text-m-gray-800'>
        Past Sessions
      </p>

      {pastSessions.length === 0 ? (
        <div className="text-gray-500 text-sm">No past sessions</div>
      ) : (
        <div className="grid grid-rows-2 grid-cols-1 gap-4 md:grid-cols-2">
          {pastSessions.map((s) => (
            <SessionList
              key={s._id}
              type={s.review ? "completed-reviewed" : "completed-unreviewed"}
              title={s.title}
              date={new Date(s.date).toLocaleDateString()}
              startTime={s.startTime}
              endTime={s.endTime}
              mentee={s.mentee?.name || "Mentee"}
              price={s.price}
              review={s.review}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PastSession;
