import React from 'react';
import Avatar from './Avatar';
import { Calendar, Star } from 'lucide-react';
import SkillTag from './SkillTag';
import { useNavigate } from 'react-router-dom';

function MentorCard({ avatar,name, profession, rating, sessions=[], skills = [], hourlyRate, nextAvailable, username, id }) {
  const currency = "₹";
  const navigateToProfile = useNavigate();
  const navigateToBookSession = useNavigate();

  return (
    <div className="m-2 bg-white/90 rounded-xl p-5 transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
      {/* Top: Avatar & Details */}
      <div className="flex items-center gap-5">
        <div className="overflow-hidden">
          <Avatar AvatarImg={avatar}/>
        </div>
        <div className="text-left">
          <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{profession}</p>
          <div className="flex items-center text-xs text-gray-600 mt-1 gap-1">
            <Star size={14} fill="#ffa500" stroke="0" />
            <span className="font-semibold text-black ml-1">{rating}</span>
            <span className="mx-1">•</span>
            <span>{sessions} sessions</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <SkillTag skills={skills} limit={3}/>

      {/* Rates & Availability */}
      <div className="my-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Hourly Rate</span>
          <span className="text-black font-semibold">
          {hourlyRate ? `${currency}${hourlyRate}` : "not set yet"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Next Available</span>
          <span className={`${nextAvailable ? 'text-green-500' : 'text-red-500'} font-semibold`}>
            {nextAvailable?"Available Today":'Not Available'}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center gap-3 mt-6">
        <button onClick={()=>navigateToProfile('/view-mentor/'+username)} className="border border-gray-400 cursor-pointer text-gray-700 px-5 py-1.5 rounded-lg transition-all ease-in-out hover:bg-gray-100">
          View Profile
        </button>
        <button onClick={()=>navigateToBookSession('/book-session/'+username+'/'+id)} className="bg-indigo-600 cursor-pointer text-white flex items-center gap-2 px-5 py-1.5 rounded-lg transition-all ease-in-out hover:bg-indigo-700">
          <Calendar size={20} />
          Book Now
        </button>
      </div>
    </div>
  );
}

export default MentorCard;
