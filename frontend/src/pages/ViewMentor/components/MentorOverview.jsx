import React, { useContext, useState } from 'react'
import Avatar from '../../../components/Avatar';
import StarRating from '../../../components/RatingStars'
import { CircleCheckBig,Ban } from 'lucide-react';
import { AuthContext } from '../../../context/auth.context';

function MentorOverview() {
    const {user} = useContext(AuthContext);
    const [isAvailable, setIsAvailable] = useState(false);
  return (
    <div className='flex justify-left items-start gap-5'>
            <Avatar/>
       <div>
        <div>
            <p className='font-bold text-2xl -mb-2'>{user.name}</p>
        <span className='text-sm text-gray-500'>Mentor Position</span>
        <p className='text-xs text-gray-400'>Mentor one line address</p>
        </div>
        <div className='flex justify-left items-center gap-5 mt-3'>
            <div className='flex justify-left items-center gap-1'>
                <StarRating/> <span className='text-sm text-gray-500'> (232 Session)</span>
            </div>
            <p className={`${isAvailable ? "text-green-500" : "text-red-500"}  text-sm`}>
  {isAvailable ? (
    <>
      <CircleCheckBig size={16} className="inline mr-1" />
      Available Today
    </>
  ) : (
    <>
      <Ban size={16} className="inline mr-1" />
      Not Available Today
    </>
  )}
</p>

        </div>
       </div>
    </div>
  )
}

export default MentorOverview