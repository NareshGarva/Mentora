import React from 'react'
import {UsersRound, TrendingUp ,Sparkles} from 'lucide-react'

function Hero() {
  return (
     <section className='w-full bg-gradient-to-br from-transparent to-purple-100'>
<div className='mx-2 md:mx-28 flex justify-center items-center'>
  <div className='w-full h-fit'>
 {/* section heading text */}
  <div className='mt-20 text-center'>
  <h1 className='text-3xl md:text-6xl font-bold' >Find <span className='bg-gradient-to-r from-yellow-300 via-pink-300 to-rose-300 bg-clip-text text-transparent'>Your Mentor</span></h1>
  <p className='text-gray-600 text-xl my-3' >Connect with industry leaders and experienced professionals who can guide your career journey and help you achieve your goals.</p>
  </div>

 {/* platform overview content */}
<div className='text-center w-full mx-auto md:flex md:justify-center md:items-center md:gap-20 mt-14'>
  <div className='text-center p-10 m-2 rounded-lg overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-105'>
   {/* Blur + Gradient Overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br via-cyan-300/30 to-blue-300/10 rounded-xl backdrop-blur-lg opacity-100 transition-opacity duration-300 z-0" />
<div className='relative '>
  <div className='w-fit mx-auto mb-3'><UsersRound className=' text-pink-500'/></div>
<h1 className='text-black text-2xl font-bold z-1'>500+</h1>
<span className='text-gray-500 my-2'>Expert Mentors</span>
</div>
    
  </div>
<div className='text-center p-13 m-2 rounded-lg overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-105'>
 {/* Blur + Gradient Overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br  via-green-300/30 to-blue-300/10 rounded-xl backdrop-blur-lg opacity-100 transition-opacity duration-300 z-0" />
<div className='relative '>
  <div className='w-fit mx-auto mb-3'><TrendingUp className=' text-emerald-500'/></div>
<h1 className='text-black text-2xl font-bold z-1'>10k</h1>
<span className='text-gray-500 my-2'>Sessions Completed</span>
</div>
    
  </div>
  <div className='text-center p-10 m-2 rounded-lg overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-105'>
   {/* Blur + Gradient Overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br via-orange-300/30 to-blue-300/10 rounded-xl backdrop-blur-lg opacity-100 transition-opacity duration-300 z-0" />
<div className='relative '>
  <div className='w-fit mx-auto mb-3'><Sparkles className=' text-violet-500'/></div>
<h1 className='text-black text-2xl font-bold z-1'>4.9</h1>
<span className='text-gray-500 my-2'>Average Rating</span>
</div>
    
  </div>

  
   
</div>

  </div>
</div>
    </section>
  )
}

export default Hero