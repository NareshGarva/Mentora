import React from 'react'
import MentorCard from '../../../components/MentorCard'

function SearchResult({filteredMentors =[]}) {
  const renderMentors = ()=>{
if(filteredMentors.length === 0){
return (<p className='text-center text-gray-600'>No mentors found.</p>)
}else{
  return filteredMentors.map((Mentor, index) => (
<MentorCard key={index} name={Mentor.name} title={Mentor.title} rating={Mentor.rating} sessions={Mentor.sessions} skills={Mentor.skills} hourlyRate={Mentor.hourlyRate} nextAvailable={Mentor.nextAvailable}/>
));
}
  }
  return (
    <section className='w-full'>
<div className='mx-2 md:mx-28 flex justify-center items-center mt-5'>
<div className='w-full'>
<div className='header'>
<div>
    <h1 className='text-3xl font-bold '>Available Mentors</h1>
<p className='text-sm text-gray-400'><span className='text-2xl font-bold bg-gradient-to-br from-yellow-500/30 via-green-400/90 to-pink-500/30 bg-clip-text text-transparent'>{filteredMentors.length > 999 ? '999+' :filteredMentors.length}</span> mentor ready to help you succeed</p>
</div>

</div>
<div className='md:grid md:grid-cols-3 md:grid-rows-2 md:gap-1 mt-14'>
{renderMentors()}
</div>
</div>
</div>
    </section>
  )
}

export default SearchResult