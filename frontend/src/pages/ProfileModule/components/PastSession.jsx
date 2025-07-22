import React from 'react'
import SessionList from './SessionList'

function PastSession() {
  return (
    <div className='mt-10'>
                <p className='mb-3 font-bold text-2xl'>Past Sessions</p>
                <div className="grid grid-rows-3 grid-cols-3 gap-5">
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

export default PastSession