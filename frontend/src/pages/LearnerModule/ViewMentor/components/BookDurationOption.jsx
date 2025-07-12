import React from 'react'

const BookDurationOption = (props) => {
  return (
    <div className='flex justify-between px-5 py-4 border-1 border-black w-full rounded-full'>
      <span className='text-base font-bold text-black'>{props.duration || "30 min"}</span>
      <span className='text-base font-bold text-gray-600'>{props.price || "250"}$</span>
    </div>
  )
}

export default BookDurationOption
