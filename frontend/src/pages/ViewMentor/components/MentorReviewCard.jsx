import React from 'react'
import StarRating from '../../../components/RatingStars'
import Avatar from '../../../components/Avatar'

const MentorReviewCard = (props) => {
    return (
        <div className='p-3 my-2 w-full transition-all ease-in-out duration-200 rounded-lg hover:bg-gray-100'>
            <div className="card-contents flex justify-left items-start gap-3">
                <Avatar/>
                <div className="card-text-contents flex flex-col gap-1">

                    <div className="flex gap-3">
                        <p className="font-semibold">{props.reviewer_name || "Reviewer's Name"}</p>
                        <StarRating rating={props.rating || 4} height='15'/>
                        <span className='text-gray-500 text-sm'>{props.review_age || '2 weeks ago'}</span>
                    </div>
                    <div className="card-bottom flex">
                        <p className='text-m-gray-500 text-sm'>{props.review || 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae' }</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MentorReviewCard
