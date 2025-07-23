import React from 'react'
import MentorList from '../../components/MentorList'

function FavoriteMentors() {
  return (
    <div className='grid grid-rows-2 grid-cols-1 gap-4 md:grid-cols-2'>
        <MentorList/>
        <MentorList/>
        <MentorList/>
        <MentorList/>
        <MentorList/>
    </div>

  )
}

export default FavoriteMentors