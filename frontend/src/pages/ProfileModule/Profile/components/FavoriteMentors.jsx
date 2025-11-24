import React from 'react'
import MentorList from '../../components/MentorList'

function FavoriteMentors() {
  return (
    <div className='grid grid-rows-3 grid-cols-3 gap-5'>
        <MentorList/>
        <MentorList/>
        <MentorList/>
    </div>

  )
}

export default FavoriteMentors