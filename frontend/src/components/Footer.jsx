import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className=' bg-white p-6 py-1.5 rounded-full text-center text-gray-600 text-sm my-2 mx-auto w-fit'>
<p>© {year} <span>Mentora.</span> All rights reserved.</p>
    </footer>
  )
}

export default Footer