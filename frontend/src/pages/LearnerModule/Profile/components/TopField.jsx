import React from 'react'

const TopField = ({profile_pic, learner_name='John Doe', learner_since='2004'}) => {
  return (
    <div className='p-4 bg-white flex flex-col justify-center items-center gap-4'>
      <div className="profile-pic-container rounded-full w-[8rem] h-[8rem] bg-m-gray-300">
        <img src={profile_pic} alt="" />
      </div>
      <p className='Learner_name font-bold text-2xl text-black'>{learner_name}</p>
      <p className='Learner_name font-bold text-base text-gray-500'>Learner since {learner_since}</p>
      <button className='bg-secondary-300 border border-secondary-500 p-4 w-fit'>
        Edit Profile
      </button>
    </div>
  )
}

export default TopField
