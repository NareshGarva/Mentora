import React from 'react'
import {useNavigate } from 'react-router-dom'
import MentorCard from '../../../components/MentorCard'
import { Mentors } from '../../../sample/MentorCard';

function FeaturedMentors() {
  const navigate = useNavigate();
    const renderMentors = ()=>{
      const newSlice = Mentors.slice(0,9);
  return newSlice.map((Mentor, index) => (
  <MentorCard key={index} name={Mentor.name} title={Mentor.title} rating={Mentor.rating} sessions={Mentor.sessions} skills={Mentor.skills} hourlyRate={Mentor.hourlyRate} nextAvailable={Mentor.nextAvailable}/>
  ));
    }

  const AllMentors = ()=>{
    navigate('/browse-mentor/all-mentors')
  }
  return (
      <section data-aos-delay="0" className='w-full py-10 bg-gradient-to-t from-indigo-transparent via-green-100/40 to-transparent'>
<div className='mx-2 py-10 md:mx-28 flex justify-center items-center'>
  <div className='w-full'>
<div className='text-center'>
  <h1 className='font-bold text-3xl md:text-4xl' data-aos="fade-up" data-aos-delay="100">Featured Mentors</h1>
  <p className='my-3 text-gray-500 text-xl' data-aos="fade-up" data-aos-delay="200">Connect with industry experts who are ready to guide you towards success</p>
</div>

<div className='md:grid md:grid-cols-3 md:grid-rows-2 md:gap-1 mt-14'>
  {renderMentors()}
</div>
<div className='text-center'>
  {Mentors.length>9?(<button onClick={AllMentors} className='underline underline-offset-6 mt-10 cursor-pointer transition-all ease-in-out duration-300 hover:scale-104 '><span>View All Mentors</span></button>
):''}
</div>
</div>
</div>
  </section>
  )
}

export default FeaturedMentors