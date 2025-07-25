import React, { useContext } from 'react'
import {useNavigate } from 'react-router-dom'
import MentorCard from '../../../components/MentorCard'
import {MentorContext} from '../../../context/mentor.context';


function FeaturedMentors() {
  const {mentors} = useContext(MentorContext)

  const navigate = useNavigate();
    const renderMentors = ()=>{
      const newSlice = mentors.slice(0,9);
  return newSlice.map((Mentor, index) => (
  <MentorCard 
  key={index} 
  name={Mentor.name || 'Unknown'}
   username={Mentor.username || 'unknown'}
    title={Mentor.username || 'Mentor'} 
    rating={Mentor.reviews.length || 0} 
    sessions={Mentor.sessions.length || 0}
     skills={Mentor.expertise.map((item) => {
  return item.expertise
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
})}
 hourlyRate={Mentor?.rate?.perHour || 'N/A'} 
  nextAvailable={Mentor.nextAvailable}/>
  ));
    }

  const AllMentors = ()=>{
    navigate('/browse-mentor/all-mentors')
  }
  return (
      <section data-aos-delay="0" className='w-full py-10 bg-gradient-to-t from-indigo-transparent via-green-100/40 to-transparent'>
<div className='mx-5 py-10 md:mx-28 flex justify-center items-center'>
  <div className='w-full'>
<div className='text-center'>
  <h1 className='font-bold text-3xl md:text-4xl' data-aos="fade-up" data-aos-delay="100">Featured Mentors</h1>
  <p className='my-3 text-gray-500 text-xl' data-aos="fade-up" data-aos-delay="200">Connect with industry experts who are ready to guide you towards success</p>
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