import React from 'react'

function MentorCard() {
    const isActive = ()=>{
        return true;
    };
    const currency = "₹";
    const avatar = "https://m.media-amazon.com/images/M/MV5BZjA0MDgyYmItNzkzMC00OTM2LThlYzktMWMxZWU3ZGNkNDI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
  return (
   <div className=" bg-white/90 rounded-xl p-5 transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
  {/* Top: Avatar & Details */}
  <div className="flex items-center gap-5">
    <div className="overflow-hidden w-18 h-18 ">
      <img className="rounded-full aspect-square object-cover" src={avatar} alt="Mentor Avatar" />
    </div>
    <div className="text-left">
      <h3 className="text-lg font-semibold text-gray-900">Mentor</h3>
      <p className="text-sm text-gray-500">CEO of Meta and Co-founder of Google</p>
      <div className="flex items-center text-sm text-gray-600 mt-1 gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffa500" viewBox="0 0 24 24" className="inline">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
        </svg>
        <span className="font-semibold text-black ml-1">4.9</span>
        <span className="mx-1">•</span>
        <span>204 sessions</span>
      </div>
    </div>
  </div>

  {/* Skills */}
  <div className="flex flex-wrap gap-2 mt-4">
    <span className="bg-indigo-100 text-indigo-700 font-medium text-xs px-3 py-1 rounded-full">Node.js</span>
    {/* Add more skill chips if needed */}
  </div>

  {/* Rates & Availability */}
  <div className="my-6 space-y-2 text-sm">
    <div className="flex justify-between">
      <span className="text-gray-500">Hourly Rate</span>
      <span className="text-black font-semibold">{currency} 200</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Next Available</span>
      <span className={`${isActive ? "text-green-500" : "text-red-500"} font-semibold`}>
        Tomorrow
      </span>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex justify-between items-center gap-3 mt-6">
    <button className="border border-gray-400 text-gray-700 font-medium px-5 py-1.5 rounded hover:bg-gray-100 transition">View Profile</button>
    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium flex items-center gap-2 px-5 py-1.5 rounded transition">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      </svg>
      Book Now
    </button>
  </div>
</div>

  )
}

export default MentorCard