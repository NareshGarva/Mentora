import React from 'react'
import {Mail, Phone, MapPin, Clock} from 'lucide-react'


function ContectSrc() {
  return (
    <section data-aos-delay="0" className='w-full bg-gradient-to-b from-pink-100 to-transparent'>
<div className='mx-5 md:mx-28 flex justify-center items-center'>
<div className='w-full md:flex md:justify-center md:items-center md:gap-5  h-fit py-10'>
          <div className='relative before:content-[""] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-yellow-200 z-0 m-5 md:m-0'>
<div className='p-10 border border-green-200 rounded-lg backdrop-blur-2xl text-center'>
     <div className='w-fit mx-auto mb-3'>
    <Mail />
  </div>
  <p className='text-sm font-semibold'>Email Us</p>
  <p className='text-gray-500 text-xs mt-1'>mentora@gmail.com</p>
</div>
</div>


          <div className='relative before:content-[""] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-pink-200 z-0 m-5 md:m-0'>
<div className='p-10 border border-green-200 rounded-lg backdrop-blur-2xl text-center'>
     <div className='w-fit mx-auto mb-3'>
    <Phone />
  </div>
  <p className='text-sm font-semibold'>Call Us</p>
  <p className='text-gray-500 text-xs mt-1'>+91 55555-33333</p>
</div>
</div>


          <div className='relative before:content-[""] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-green-200 z-0 m-5 md:m-0'>
<div className='p-10 border border-green-200 rounded-lg backdrop-blur-2xl text-center'>
     <div className='w-fit mx-auto mb-3'>
    <MapPin />
  </div>
  <p className='text-sm font-semibold'>Visit Us</p>
  <p className='text-gray-500 text-xs mt-1'>GB Road Near Naresh House, Dehli</p>
</div>
</div>


          <div className='relative before:content-[""] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-indigo-200 z-0 m-5 md:m-0'>
<div className='p-10 border border-green-200 rounded-lg backdrop-blur-2xl text-center'>
     <div className='w-fit mx-auto mb-3'>
    <Clock />
  </div>
  <p className='text-sm font-semibold'>Business Hours</p>
  <p className='text-gray-500 text-xs mt-1'>Mon-Fri: 9Am - 5Pm IST</p>
</div>
</div>
       </div>    
</div>
</section>
  )
}

export default ContectSrc