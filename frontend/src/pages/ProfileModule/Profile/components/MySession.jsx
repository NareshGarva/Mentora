import React from 'react'
import UpcomingSession from '../../components/UpcomingSession'
import PastSession from '../../components/PastSession'

function MySession() {
  return (
    <div className='flex flex-col gap-8'>
        <UpcomingSession/>
        <PastSession/>
    </div>
  )
}

export default MySession