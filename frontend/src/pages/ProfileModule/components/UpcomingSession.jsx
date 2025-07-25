import React from "react";
import SessionList from "./SessionList";

function UpcomingSession() {
  return (
    <div className=" p-8 bg-white rounded-xl shadow-xl">
      <p className='relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-tr before:from-primary-500 before:to-secondary-500 before:content-[""] before:rounded-br-full before:rounded-tr-full mb-8 font-bold text-2xl text-m-gray-800'>
        Upcoming Sessions
      </p>
      <div className="grid grid-rows-2 grid-cols-1 gap-4 md:grid-cols-2">
        <SessionList />
        <SessionList />
        <SessionList />
        <SessionList />
        <SessionList />
        <SessionList />
      </div>
    </div>
  );
}

export default UpcomingSession;
