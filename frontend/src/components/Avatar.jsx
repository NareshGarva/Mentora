import React from 'react'
import { User } from 'lucide-react';

function Avatar({AvatarImg}) {
  const isAvatar = AvatarImg == null ?true:false;
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
   <User/>
   </div>
  );

  return (
    <>
      {isAvatar ? (
        <img src={AvatarImg} alt="User Avatar" width={50} height={50} className="w-[50px] h-[50px] rounded-full" />
      ) : (
        defaultAvatar
      )}
    </>
  );
}

export default Avatar