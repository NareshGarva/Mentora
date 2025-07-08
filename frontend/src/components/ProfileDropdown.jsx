import React from 'react'
import Avatar from './Avatar'
import { NavLink } from 'react-router-dom';
import {User, Calendar, Settings, Heart, LogOut} from 'lucide-react'

function ProfileDropdown() {
    const userType = 'Mentee';
  return (
    <div className='min-w-full border border-gray-300 rounded-lg bg-white'>
        <div className='header p-3 flex justify-left items-center gap-3'>
        <Avatar/>
        <div>
            <p className='font-semibold text-xs' >Naresh Garva</p>
            <p className='text-xs text-gray-400'>example@gmail.com</p>
            <p className='w-fit text-green-500 text-[10px] font-semibold px-2 rounded-full bg-green-100'>{userType}</p>
        </div>
        </div>
        <hr className='text-gray-300' />
        <div className='p-3'>
            <NavLink className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' to={'dashboard/view-profile'}>
            <User size={16}/>
            <p>View Profile</p>
            </NavLink> 
            <NavLink className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' to={'dashboard/my-sessions'}>
            <Calendar size={16}/>
            <p>My Sessions</p>
            </NavLink> 
            <NavLink className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' to={'dashboard/favorites'}>
             <Heart size={16}/>
            <p>Favorites</p>
            </NavLink> 
            <NavLink className='flex justify-left items-center gap-3 font-semibold p-1 px-3 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded' to={'dashboard/setting'}>
            <Settings size={16}/>
            <p>Settings</p>
            </NavLink> 
        </div>
        <hr className='text-gray-300' />
       <div className='p-3'>
         <div className='flex justify-left items-center gap-3 font-semibold text-red-400 py-1 px-3 rounded transition-all ease-in-out duration-300 hover:bg-red-200'>
            <LogOut size={16}/>
            <p>Log Out</p>
        </div>
       </div>
        </div>
  )
}

export default ProfileDropdown