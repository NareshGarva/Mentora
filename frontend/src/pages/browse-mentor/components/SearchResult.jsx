import React from 'react'
import MentorCard from '../../../components/MentorCard'

function SearchResult() {
  return (
    <section className='w-full'>
<div className='mx-2 md:mx-28 flex justify-center items-center mt-5'>
<div className='w-full'>
<div className='header'>
<div>
    <h1 className='text-3xl font-bold '>Available Mentors</h1>
<p className='text-sm text-gray-400'><span className='text-2xl font-bold bg-gradient-to-br from-yellow-500/30 via-green-400/90 to-pink-500/30 bg-clip-text text-transparent'>999+</span> mentor ready to help you succeed</p>
</div>
<div>
    
</div>
</div>
<div className='md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 mt-14'>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
    <MentorCard/>
</div>
</div>
</div>
    </section>
  )
}

export default SearchResult