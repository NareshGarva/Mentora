import React, {useEffect} from 'react'
import HeroSection from './components/HeroSection'
import WhyMentora from './components/WhyMentora'
import FeaturedMentors from './components/FeaturedMentors'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
    });
  }, []);

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