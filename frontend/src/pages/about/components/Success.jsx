import React from 'react'
import {User, Target, Award, Heart} from 'lucide-react'

function Success() {
  return (
    <>
     <section data-aos-delay="0" className='w-full py-10 bg-gradient-to-t from-green-100/70 to-transparent'>
<div className='mx-5 md:mx-28 flex justify-center items-center'>
<div className='w-full'>
 <div className='md:flex md:items-center md:justify-center gap-10'>
        <div className='border border-indigo-50 p-10 rounded-lg bg-green-200 text-center m-3 md:m-0'>
          <div className='w-fit mx-auto mb-3'>
           <User size={30} className='text-green-500'/>
           </div> 
            <p className='fount-bold'>500+</p>
            <p className='text-black' >Active Mentores</p>
        </div>
        <div className='border border-indigo-50 p-10 rounded-lg bg-pink-200 text-center m-3 md:m-0'>
          <div className='w-fit mx-auto mb-3'>
             <Target size={30} className='text-pink-500'/>
              </div>
             <p id='users' className='fount-bold'>2000+</p>
            <p className='text-black' >Success Stories</p>
        </div> 
            <div className='border border-indigo-50 p-10 rounded-lg bg-yellow-200 text-center m-3 md:m-0'>
              <div className='w-fit mx-auto mb-3'>
              <Award size={30} className='text-yellow-500'/>
              </div>
              <p id='session' className='font-bold'>10000+</p>
              <p className='text-black'>Experts sessions</p>

            </div>
            <div className='border border-indigo-50 p-10 rounded-lg bg-orange-200 text-center m-3 md:m-0'>
              <div className='w-fit mx-auto mb-3'>
              <Heart size={30} className='text-orange-500'/>
              </div>
               <p id='happy' className='font-bold'>5000+</p>
               <p className='text-black'>Happy mantees</p>
            </div>
           
</div>
</div>
</div>
</section>
    </>
  )
}

export default Success