import React from 'react'
import SessionList from './SessionList'

const AllSessions = () => {
  return (
    <div className='sessionList-container flex flex-col gap-4'>
      <SessionList />
      <SessionList />
      <SessionList type='completed-unreviewed'/>
      <SessionList type='completed'/>
    </div>
  )
}

export default AllSessions
