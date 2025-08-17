import React, { useContext, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import MentorCard from '../../../components/MentorCard'
import {MentorContext} from '../../../context/mentor.context';


function FeaturedMentors() {
  const {mentors} = useContext(MentorContext)
  const navigate = useNavigate();
  
    const renderMentors = ()=>{
      const newSlice = mentors.slice(0,9);
  return newSlice.map((Mentor, index) => (
  <MentorCard key={index} id={Mentor._id} avatar={Mentor.avatar} name={Mentor.name} profession={Mentor.profession} username={Mentor.username} rating={Mentor.reviews.length} sessions={Mentor.sessions.length} skills={Mentor.expertise.map((item) => item.expertise)} hourlyRate={Mentor.rate?.perHour} nextAvailable={Mentor.availability}/>
  ));
    }

    useEffect(()=>{
      renderMentors()
    },[mentors])


  const AllMentors = ()=>{
    navigate('/browse-mentor/all-mentors')
  }
  return (
      <section className='w-full py-10 bg-gradient-to-t from-indigo-transparent via-green-100/40 to-transparent'>
<div className='mx-5 py-10 md:mx-28 flex justify-center items-center'>
  <div className='w-full'>
<div className='text-center'>
  <h1 className='font-bold text-3xl md:text-4xl' >Featured Mentors</h1>
  <p className='my-3 text-gray-500 text-xl'>Connect with industry experts who are ready to guide you towards success</p>
</div>

<div className='md:grid md:grid-cols-3 md:grid-rows-2 md:gap-1 mt-14'>
  {renderMentors()}
</div>
<div className='text-center'>
  {mentors.length>9?(<button onClick={AllMentors} className='underline underline-offset-6 mt-10 cursor-pointer transition-all ease-in-out duration-300 hover:scale-104 '><span>View All Mentors</span></button>
):''}
</div>
</div>
</div>
  </section>
  )
}

export default FeaturedMentors