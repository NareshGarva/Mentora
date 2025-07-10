import React, { useState } from 'react';
import Avatar from './Avatar';
import { Calendar, Star } from 'lucide-react';

function MentorCard({ name, title, rating, sessions, skills = [], hourlyRate, nextAvailable }) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 3);
  const remainingSkillCount = skills.length - 3;
  const currency = "₹";

  return (
    <div className="m-2 bg-white/90 rounded-xl p-5 transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
      {/* Top: Avatar & Details */}
      <div className="flex items-center gap-5">
        <div className="overflow-hidden">
          <Avatar />
        </div>
        <div className="text-left">
          <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{title}</p>
          <div className="flex items-center text-xs text-gray-600 mt-1 gap-1">
            <Star size={14} fill="#ffa500" stroke="0" />
            <span className="font-semibold text-black ml-1">{rating}</span>
            <span className="mx-1">•</span>
            <span>{sessions} sessions</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {displayedSkills.map((skill, key) => (
          <span
            key={key}
            className="bg-indigo-50 text-indigo-500 font-medium text-xs px-2 py-0.5 rounded-full transition-all ease-in-out duration-200 hover:bg-indigo-200"
          >
            {skill}
          </span>
        ))}
        {!showAllSkills && skills.length > 3 && (
          <span
            onClick={() => setShowAllSkills(true)}
            className="border-[1.5px] border-gray-300 text-indigo-500 font-medium text-xs px-2 py-0.5 rounded-full cursor-pointer transition-all ease-in-out duration-200 hover:bg-indigo-200 hover:border-indigo-300"
          >
            <span className="font-bold">+</span>
            {remainingSkillCount} more
          </span>
        )}
      </div>

      {/* Rates & Availability */}
      <div className="my-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Hourly Rate</span>
          <span className="text-black font-semibold">
            {currency} {hourlyRate}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Next Available</span>
          <span className={`${nextAvailable ? 'text-green-500' : 'text-red-500'} font-semibold`}>
            {nextAvailable || 'Not Available'}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center gap-3 mt-6">
        <button className="border border-gray-400 text-gray-700 px-5 py-1.5 rounded-lg transition-all ease-in-out hover:bg-gray-100">
          View Profile
        </button>
        <button className="bg-indigo-600 text-white flex items-center gap-2 px-5 py-1.5 rounded-lg transition-all ease-in-out hover:bg-indigo-700">
          <Calendar size={20} />
          Book Now
        </button>
      </div>
    </div>
  );
}

export default MentorCard;
