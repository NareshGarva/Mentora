import React from 'react'
import StarRating from './RatingStars'

const MentorReviewCard = (props) => {
    return (
        <div className='rounded-lg border bg-white text-white flex py-4 w-full'>
            <div className="card-contents flex items-center gap-6">
                    <img src={props.reviewer_image} alt="reviewer_image" className='w-[3rem] h-[3rem] rounded-full bg-m-gray-500' />
                <div className="card-text-contents flex flex-col gap-1">

                    <div className="card-top flex gap-6">
                        <h4 className="reviewer-name font-bold text-black">{props.reviewer_name || "Reviewer's Name"}</h4>
                        <StarRating rating={props.rating || 4} height={"1rem"} width={"1rem"} />
                        <span className='text-m-gray-500'>{props.review_age || '2 weeks ago'}</span>
                    </div>
                    <div className="card-bottom flex">
                        <p className='text-m-gray-500'>{props.review || 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae' }</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MentorReviewCard
