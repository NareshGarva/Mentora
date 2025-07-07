import React from 'react'
import HeroSection from './components/HeroSection'
import WhyMentora from './components/WhyMentora'
import FeaturedMentors from './components/FeaturedMentors'

function Home() {
  return (
   <main>
    {/* Add hero section */}
   <HeroSection/>



  {/* Add Why chouse us section*/}
<WhyMentora/>


  {/* add Featured Mentors */}
<FeaturedMentors/>
   </main>
  )
}

export default Home