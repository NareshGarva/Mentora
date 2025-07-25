import React, { } from 'react'
import Avatar from './Avatar'
import Loading from './Loading'
import { NavLink } from 'react-router-dom';
import {User, Calendar, Settings, Heart, LogOut} from 'lucide-react'
import { useAuth } from '../context/auth.context';
import { useState } from 'react';

function ProfileDropdown() {
  const { user, logout } = useAuth();
  const [isOut, setIsOut] = useState(false);
  if(!user){
    return;
  }

  return (
    <div className='min-w-full border border-gray-300 rounded-lg bg-white'>
        <div className='header p-3 flex justify-left items-center gap-3'>
        <Avatar/>
        <div>
            <p className='font-semibold text-xs' >{user.name}</p>
            <p className='text-xs text-gray-400'>@{user.username}</p>
            <p className='w-fit text-green-500 text-[10px] font-semibold px-2 rounded-full bg-green-100 mt-0.5'>{user.role}</p>
        </div>
        </div>
        <hr className='text-gray-300' />
        <div className='p-3'>
            <NavLink to={'/'+user.username} className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' >
            <User size={16}/>
            <p>View Profile</p>
            </NavLink> 
            <NavLink className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' to={'/'+user.username+'/my-session'}>
            <Calendar size={16}/>
            <p>My Sessions</p>
            </NavLink> 
            {user.role === 'Mentee'?(<NavLink className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' to={'/'+user.username+'/my-favorite-mentor'}>
             <Heart size={16}/>
            <p>Favorites</p>
            </NavLink> ):``}
            <NavLink className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' to={'/'+user.username+'/settings'}>
            <Settings size={16}/>
            <p>Settings</p>
            </NavLink> 
        </div>
        <hr className='text-gray-300' />
       <div onClick={async () => {
  setIsOut(true);
  const result = await logout();
  if (result) window.location.reload();
  setIsOut(false);
}}
 className='p-3 cursor-pointer'>

       {isOut?<Loading/>:(  <div  className='flex justify-left items-center gap-3 font-semibold text-red-400 py-1 px-3 rounded transition-all ease-in-out duration-300 hover:bg-red-200 cursor-pointer'>
            <LogOut size={16}/>
            <p>Log Out</p>
        </div>)}
       </div>
        </div>
  )
}

export default ProfileDropdown