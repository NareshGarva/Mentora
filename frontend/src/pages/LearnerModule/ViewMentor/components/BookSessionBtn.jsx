import React from 'react'

const BookSessionBtn = (props) => {
  let isActive = props.active || true
  console.log(isActive)
  {
    isActive ? (
      <div className='flex text-white font-bold w-full p-3 justify-center bg-gradient-to-tr from-tertiary-500 to-secondary-500 rounded-full hover:cursor-pointer hover:bg-secondary-700 transition'>
        Book Session
      </div>)
     : <div className='flex text-white font-bold w-full p-3 justify-center bg-secondary-300 rounded-full hover:cursor-not-allowed hover:bg-secondary-700 transition'>
        Book Session
      </div>
  }
}

export default BookSessionBtn
