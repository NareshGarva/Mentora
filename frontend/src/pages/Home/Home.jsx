import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import WhyMentora from "./components/WhyMentora";
import FeaturedMentors from "./components/FeaturedMentors";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <WhyMentora />
      <FeaturedMentors />
    </main>
  );
}

export default Home;
