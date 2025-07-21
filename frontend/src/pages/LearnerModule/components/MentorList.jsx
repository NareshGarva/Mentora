import React from 'react'
import Avatar from '../../../components/Avatar'

function MentorList() {
  return (
    <div>
        <div className="mentor-card flex items-center gap-4 bg-white p-4 rounded hover:shadow-md transition">
  {/* Avatar */}
 <Avatar/>
  {/* Name & Role */}
  <div className="flex flex-col">
    <span className="font-semibold text-base text-gray-800">
      {"Mentor Name"}
    </span>
    <span className="text-sm text-gray-500">
      {"Full Stack Developer"}
    </span>
  </div>
</div>
    </div>
  )
}

export default MentorList