import React,{useState} from 'react'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import SearchResult from './components/SearchResult'
import { Mentors } from '../../sample/MentorCard'

function Browse_mentor() {
  const [filteredMentors, setFilteredMentors] = useState(Mentors);
  return (
    <>
   <Hero/>
   <SearchSection setFilteredMentors={setFilteredMentors} />
      <SearchResult filteredMentors={filteredMentors} />
    </>
  )
}

export default Browse_mentor