import React from 'react'
import MentorCard from '../../../components/MentorCard'

function FeaturedMentors() {
  return (
      <section data-aos-delay="0" className='w-full py-10 bg-gradient-to-t from-indigo-transparent via-green-100/40 to-transparent'>
<div className='mx-2 py-10 md:mx-28 flex justify-center items-center'>
  <div className='w-full'>
<div className='text-center'>
  <h1 className='font-bold text-3xl md:text-4xl' data-aos="fade-up" data-aos-delay="100">Featured Mentors</h1>
  <p className='my-3 text-gray-500 text-xl' data-aos="fade-up" data-aos-delay="200">Connect with industry experts who are ready to guide you towards success</p>
</div>

<div className='md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 mt-14'>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
</div>
<div className='text-center'>
<button className=' p-2.5 px-7 rounded-lg bg-white border border-gray-400 mt-10'>View All Mentors</button>
</div>
</div>
</div>
  </section>
  )
}

export default FeaturedMentors