import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import LearningStatsCard from './components/LearningStatsCard'
import EditDetails from './components/EditDetails'

const LearnerProfile = ({ profile_pic, learner_name = 'John Doe', learner_since = '2026' }) => {
  const [editing, setEditing] = useState(false);

  // Gather all displayed data for editDetails
  const initialData = { profile_pic, learner_name, learner_since };

  if (editing) {
    return (
      <EditDetails
        initialData={initialData}
        onClose={() => setEditing(false)}
      />
    );
  }

  return (
    <div className='flex flex-col gap-8 bg-white'>
      <div className="main-section">
        <div className='p-8 bg-white flex flex-col justify-center items-center gap-4 border border-m-gray-300'>
          <div className="profile-pic-container rounded-full w-[8rem] h-[8rem] bg-m-gray-500">
            <img src={profile_pic} alt="" />
          </div>
          <p className='Learner_name font-bold text-2xl text-black'>{learner_name}</p>
          <p className='Learner_name text-base font-normal text-gray-500'>Learner since {learner_since}</p>
          <button
            className='bg-secondary-300 border border-secondary-500 p-4 w-fit rounded-full hover:cursor-pointer'
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <ProfileCard />
      <LearningStatsCard />
    </div>
  )
}

export default LearnerProfile
