import React from 'react'

const ProfileField = ({ label_name = "Label", info = "lorem asf asfh h sdf l ufhusd f iuhew sd" }) => {
    
    console.log()
  return (
    <div className='flex p-4 bg-m-gray-200'>
      <div className="icon-container w-[2rem] h-[2rem]">icon</div>
      <div className="flex flex-col label-and-data-container">
        <span className=' w-full text-base text-m-gray-500 '>{label_name}</span>
        <span className=' w-full text-base text-black'>{info}</span>
      </div>
    </div>
  )
}

export default ProfileField
