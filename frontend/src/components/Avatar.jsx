import React from 'react'
import AvatarImg from '../assets/avatar.jpg'

function Avatar() {
  const isAvatar = false;
 const bgColors = [
  'bg-green-100',
  'bg-orange-100',
  'bg-purple-100',
  'bg-yellow-100',
  'bg-pink-100',
  'bg-red-100',
  'bg-blue-100',
  'bg-indigo-100',
  'bg-teal-100',
];

const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];

  const defaultAvatar = (
   <div className={`${randomBg} p-2 rounded-full cursor-pointer`}>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user-icon"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
   </div>
  );

  return (
    <>
      {isAvatar ? (
        <img src={isAvatar} alt="User Avatar" className="w-[50px] h-[50px] rounded-full" />
      ) : (
        defaultAvatar
      )}
    </>
  );
}

export default Avatar