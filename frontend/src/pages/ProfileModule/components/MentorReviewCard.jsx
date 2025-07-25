import React from 'react'
import StarRating from '../../../components/RatingStars'
import Avatar from '../../../components/Avatar'

const MentorReviewCard = ({reviews}) => {
    return (
        <>
       {reviews && reviews.length > 0 ? (
  reviews.map((review) => (
    <div key={review._id} className='p-3 my-2 w-full transition-all ease-in-out duration-200 rounded-lg hover:bg-gray-100'>
      <div className="card-contents flex justify-left items-start gap-3">
        <Avatar />
        <div className="card-text-contents flex flex-col gap-1">
          <div className="flex gap-3">
            <p className="font-semibold">{review.reviewer_name || "Reviewer's Name"}</p>
            <StarRating rating={review.rating || 4} height='15' />
            <span className='text-gray-500 text-sm'>{review.review_age || '2 weeks ago'}</span>
          </div>
          <div className="card-bottom flex">
            <p className='text-m-gray-500 text-sm'>{review.review || 'Lorem ipsum dolor sit amet...'}</p>
          </div>
        </div>
      </div>
    </div>
  ))
) : (
  <div className='p-3 my-2 w-full transition-all ease-in-out duration-200 rounded-lg hover:bg-gray-100'>
    <div className="card-contents flex justify-left items-start gap-3">
      <Avatar />
      <div className="card-text-contents flex flex-col gap-1">
        <div className="flex gap-3">
          <p className="font-semibold">Reviewer's Name</p>
          <StarRating rating={ 4} height='15' />
          <span className='text-gray-500 text-sm'>2 weeks ago'</span>
        </div>
        <div className="card-bottom flex">
          <p className='text-m-gray-500 text-sm'>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </div>
  </div>
)}

        </>
    )
}

export default MentorReviewCard
