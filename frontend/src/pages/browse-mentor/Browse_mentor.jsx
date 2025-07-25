import React, { useContext, useEffect, useState } from 'react';
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import SearchResult from './components/SearchResult'
import { MentorContext } from '../../context/mentor.context'
import Loading from '../../components/Loading';

function Browse_mentor() {
  const { mentors, loading } = useContext(MentorContext);
  const [filteredMentors, setFilteredMentors] = useState([]);


  useEffect(() => {
    if (mentors && mentors.length > 0) {
      setFilteredMentors(mentors);
    }
  }, [mentors]);

   if (loading) {
    return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-3xl bg-white/30">
    <Loading />
  </div>
);
}

  return (
    <>
      <Hero />
      <SearchSection setFilteredMentors={setFilteredMentors} />
      <SearchResult filteredMentors={filteredMentors} />
    </>
  );
}

export default Browse_mentor;
