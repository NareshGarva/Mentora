import React from 'react'

function Home() {
  return (
   <main>
    <section className='h-screen w-full bg-gradient-to-b from-transparent to-orange-100'>
 <div className='mx-2 md:mx-28 flex justify-center items-center h-screen'>
<div>
  <div className='text-center'>
  <h1 className=' text-6xl font-bold'>Connect with Expert Mentors for 1:1 Sessions</h1>
  <p className='text-gray-500 text-xl my-3'>Book personalized mentorship sessions with industry experts. Get guidance, accelerate your career, and achieve your goals.</p>
  </div>
  <div className='flex justify-center items-center gap-4 mt-6'>
<button className='flex justify-center items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 py-2 px-5 rounded text-white cursor-pointer duration-300 hover:bg-gradient-to-tr hover:from-indigo-500 hover:to-purple-400'>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
  <span>Book a Session</span>
</button>
<button className='flex justify-center items-center gap-3 border border-indigo-100 border-2 bg-white py-2 px-5 rounded text-indigo-600 cursor-pointer hover:bg-indigo-50'>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
  <span>Book a Session</span>
</button>
</div>
<div className='text-center flex justify-center items-center gap-40 mt-14'>
  <div className='items-center'>
    <h1 className='text-orange-500 text-4xl font-semibold'>500+</h1>
<span className='text-gray-500 my-2'>Expert Mentors</span>
  </div>
   <div className='items-center'>
    <h1 className='text-orange-500 text-4xl font-semibold'>10K</h1>
<span className='text-gray-500 my-2'>Sessions Completed</span>
  </div>
   <div className='items-center'>
    <h1 className='text-orange-500 text-4xl font-semibold'>4.9</h1>
<span className='text-gray-500 my-2'>Average Rating
</span>
  </div>
</div>
</div>
  </div>
    </section>
     
   </main>
  )
}

export default Home