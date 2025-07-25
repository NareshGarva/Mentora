import React from 'react'
import Avatar from '../../../../components/Avatar';
import StarRating from '../../../../components/RatingStars';
import { CircleCheckBig,Ban, Star } from 'lucide-react';

function MentorOverview({name,isAvailable,rating,position}) {
  return (
    <div className='flex justify-left items-start gap-5'>
            <Avatar/>
       <div>
        <div>
            <p className='font-bold text-2xl -mb-2'>{name}</p>
        <span className='text-sm text-gray-500'>@{position}</span>
        <p className='text-xs text-gray-400'>Mentor one line address</p>
        </div>
        <div className='flex justify-left items-center gap-5 mt-3'>
            <div className='flex justify-left items-center gap-1'>
                <Star size={15} stroke='#fdcc0d' fill='#fdcc0d'/><span className='font-semibold'>{rating || '0'}</span> <span className='text-sm text-gray-500'> (232 Session)</span>
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