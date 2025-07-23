import React from 'react'
import SessionList from './SessionList'

function PastSession() {
  return (
    <div className='p-8 bg-white rounded-xl shadow-2xs'>
                <p className='mb-4 font-bold text-2xl'>Past Sessions</p>
                <div className="grid grid-rows-2 grid-cols-1 gap-4 md:grid-cols-2">
                    <SessionList type='completed-unreviewed'/>
                    <SessionList type='completed-unreviewed'/>
                    <SessionList type='completed-unreviewed'/>
                    <SessionList type='completed-reviewed'/>
                    <SessionList type='completed-reviewed'/>
                    <SessionList type='completed-reviewed'/>
                </div>
            </div>
  )
}

export default PastSession