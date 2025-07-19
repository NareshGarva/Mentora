import React from 'react'
import { Mail, Phone, MapPin, User } from "lucide-react";
import ProfileField from './ProfileField';

const ProfileCard = () => {
  return (
    <div className='bg-white text-black flex flex-col gap-6 rounded-xl border border-m-gray-300 p-8'>
      <div className="card-contents space-y-4">
        <div className="card-heading-container flex items-center space-x-2 text-xl font-bold">
          <h1 >Personal Information</h1>
        </div>
        <ProfileField />
        <ProfileField />
        <ProfileField />
      </div>
    </div>
  );
}

export default ProfileCard
