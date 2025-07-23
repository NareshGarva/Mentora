import React from 'react'
import SessionList from './SessionList'

function UpcomingSession() {
  return (
     <div className=' p-8 bg-white rounded-xl shadow-2xs'>
                <p className='mb-4 font-bold text-2xl'>Upcoming Sessions</p>
                <div className="grid grid-rows-2 grid-cols-1 gap-4 md:grid-cols-2 ">
                    <SessionList/>
                    <SessionList/>
                    <SessionList/>
                    <SessionList/>
                    <SessionList/>
                    <SessionList/>
                </div>
            </div>
  )
}

export default UpcomingSession