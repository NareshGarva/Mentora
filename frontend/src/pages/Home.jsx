import React from 'react'

function Home() {
  return (
   <main>
    {/* Add hero section */}
    <section className='h-screen w-full bg-gradient-to-b from-transparent to-orange-100'>
 <div className='mx-2 md:mx-28 flex justify-center items-center h-screen'>
<div className='w-full'>
    {/* section heading text */}
  <div className='text-center'>
  <h1 className='text-3xl md:text-6xl font-bold'>Connect with <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>Expert Mentors</span> for 1:1 Sessions</h1>
  <p className='text-gray-500 text-xl my-3'>Book personalized mentorship sessions with industry experts. Get guidance, accelerate your career, and achieve your goals.</p>
  </div>
{/* section CTA buttons */}
  <div className='flex justify-center items-center gap-4 mt-8'>
<button className='flex justify-center items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 py-2 px-5 rounded text-white cursor-pointer transition ease-in-out duration-300 hover:bg-gradient-to-tr hover:from-indigo-500 hover:to-orange-300'>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
  <span>Book a Session</span>
</button>
<button className='flex justify-center items-center gap-3 border border-indigo-100 border-1 bg-white/70 py-2 px-5 rounded text-indigo-600 cursor-pointer hover:bg-indigo-50'>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
  <span>Book a Session</span>
</button>
</div>
{/* platform overview content */}
<div className='text-center w-full flex justify-between md:justify-center items-center md:gap-40 mt-14'>
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


  {/* Add Why chouse us section*/}
  <section className='h-screen w-full bg-gradient-to-b from-orange-100 to-transparent'>
<div className='mx-2 md:mx-28 flex justify-center items-center h-screen'>
<div className='w-full'>
<div className='text-center'>
<h1 className='text-3xl font-bold md:text-4xl'>Why Choose Mentora</h1>
<p className='my-4 text-xl text-gray-600'>We make it easy to find, book, and learn from the best mentors in your field</p>
</div>

<div className='flex justify-between items-center mt-20'>

<div className='text-center p-5 m-2 rounded-xl overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-105'>

  {/* Blur + Gradient Overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 via-pink-300/10 to-blue-300/10 rounded-xl backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

  <div className='relative'>
    <div className='w-fit p-4 bg-purple-200 rounded-xl text-purple-600 mx-auto'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-heart-icon lucide-calendar-heart">
        <path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" />
      </svg>
    </div>
    <h2 className='text-black my-3 text font-semibold'>Easy Scheduling</h2>
    <p className='text-gray-500 text-sm my-2'>Book sessions with mentors instantly using our integrated calendar system. No back-and-forth emails.</p>
  </div>
</div>


<div className='text-center p-5 m-2 rounded-xl overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-105'>
  {/* Blur + Gradient Overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 via-pink-300/10 to-blue-300/10 rounded-xl backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

  <div className='relative'>
    <div className='w-fit p-4 bg-purple-200 rounded-xl text-purple-600 mx-auto'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-heart-icon lucide-calendar-heart"><path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"/></svg>
  </div>
<h2 className='text-black my-3 text font-semibold'>Expert Mentors</h2>
<p className='text-gray-500 text-sm my-2'>Access to industry professionals from top companies like Google, Meta, Netflix, and innovative startups.</p>
</div></div>


<div className='text-center p-5 m-2 rounded-xl overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-105'>
 {/* Blur + Gradient Overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 via-orange-300/10 to-blue-300/10 rounded-xl backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

<div className='relative'>
    <div className='w-fit p-4 bg-orange-200 rounded-xl text-orange-600 mx-auto'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
  </div>
<h2 className='text-black my-3 text font-semibold'>Quality Assurance</h2>
<p className='text-gray-500 text-sm my-2'>All mentors are vetted and rated by the community. Read reviews and choose the perfect match.</p>
</div></div>


<div className='text-center p-5 m-2 rounded-xl overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-105'>
  {/* Blur + Gradient Overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 via-pink-300/10 to-blue-300/10 rounded-xl backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

<div className='relative'>
    <div className='w-fit p-4 bg-purple-200 rounded-xl text-purple-600 mx-auto'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-heart-icon lucide-calendar-heart"><path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"/></svg>
  </div>
<h2 className='text-black my-3 text font-semibold'>Secure Payments</h2>
<p className='text-gray-500 text-sm my-2'>Safe and secure payment processing. Only pay after your session is completed successfully.</p>
</div></div>

</div>
</div>
</div>
  </section>
   </main>
  )
}

export default Home