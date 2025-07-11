import React from 'react'

function Success() {
  return (
    <>
     <section data-aos-delay="0" className='w-full py-10 bg-gradient-to-b from-orange-100 to-transparent'>
<div className='mx-2 md:mx-28 flex justify-center items-center'>
<div className='w-full'></div>
</div>
 <div className='flex items-center justify-center gap-50'>
        <div className='border rounded bg-gray-200 w-50 h-50 text-center justify-center p-3'>
          <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
           </div> 
            <p id='users' className='fount-bold'>500+</p>
            <p className='text-black' >Active Mentores</p>
        </div>
        <div className='border rounded bg-gray-200 w-50 h-50 text-center justify-center p-3'>
          <div className='flex items-center justify-center'>
             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
             <p id='users' className='fount-bold'>2000+</p>
            <p className='text-black' >Success Stories</p>
        </div> 

      </div> 

        <div className='flex items-center justify-center gap-50'>
            <div className='border rounded bg-gray-200 w-50 h-50 text-center justify-center p-3'>
              <div className='flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
              </div>
              <p id='session' className='font-bold'>10000+</p>
              <p className='text-black'>Experts sessions</p>

            </div>
            <div className='border rounded bg-gray-200 w-50 h-50 text-center justify-center p-3'>
              <div className='flex items-center justify-center'>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
               <p id='happy' className='font-bold'>5000+</p>
               <p className='text-black'>Happy mantees</p>
            </div>
            </div>
</section>
    </>
  )
}

export default Success