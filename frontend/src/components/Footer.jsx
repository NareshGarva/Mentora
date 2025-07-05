import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className=' bg-white p-6 py-1.5 rounded-full text-center text-gray-700 text-sm my-2 mx-auto w-fit'>
<p><span className='font-semibold text-black'>Mentora</span> All rights revived © {year}</p>
    </footer>
  )
}

export default Footer