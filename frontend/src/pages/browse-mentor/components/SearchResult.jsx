import React,{useEffect, useState} from 'react'
import MentorCard from '../../../components/MentorCard'

function SearchResult({filteredMentors =[]}) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(filteredMentors.length / itemsPerPage);

  // Get paginated data
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentMentors = filteredMentors.slice(indexOfFirst, indexOfLast);

  // Reset page when new search is made
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredMentors]);




  const renderMentors = ()=>{
if(currentMentors.length === 0){
return (<p className='text-center text-gray-600'>No mentors found.</p>)
}else{
  return currentMentors.map((Mentor, index) => (
 <MentorCard key={index} id={Mentor._id} name={Mentor.name} username={Mentor.username} title={Mentor.username} rating={Mentor.reviews.length} sessions={Mentor.sessions.length} skills={Mentor.expertise.map((item) => item.expertise)} hourlyRate={Mentor.rate?.perHour} nextAvailable={Mentor.availability}/>
 ));
}
  }
  return (
    <section className='w-full'>
<div className='mx-5 md:mx-28 flex justify-center items-center mt-5'>
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

 <div className='flex justify-center items-center my-10 gap-4'>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='px-4 py-1 bg-gray-300 rounded disabled:opacity-50'
        >
          Previous
        </button>
        <span className='text-sm'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className='px-4 py-1 bg-blue-300 rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>

    </section>
  )
}

export default SearchResult