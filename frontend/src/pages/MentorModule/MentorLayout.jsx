import React from 'react'
import { Outlet } from 'react-router-dom'


const MentorLayout = () => {
  return (
    <div>
      <main className='p-16 bg-white min-w-screen'>
        <Outlet />
      </main>
    </div>
  )
}

export default MentorLayout
