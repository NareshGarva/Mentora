import React from 'react'
import UpcomingSession from '../../components/UpcomingSession'
import PastSession from '../../components/PastSession'

function MySession() {
  return (
    <div>
      <div className="page-content ">

        <UpcomingSession/>
        <PastSession/>
      </div>
    </div>
  )
}

export default MySession