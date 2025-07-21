import React from "react";

function Hero() {
  return (
    <section
      data-aos-delay="0"
      className="w-full py-10 bg-gradient-to-b from-transparent to-pink-100"
    >
      <div className="mx-5 md:mx-28 flex justify-center items-center">
        <div className="w-full text-center">
          <span className="text-pink-600 border border-pink-400 rounded-full bg-pink-100 py-1 px-5 font-semibold text-sm">
            Get In Touch
          </span>
          <h1 className="bg-gradient-to-r from-yellow-300 via-pink-400  to-red-400 bg-clip-text text-transparent  font-bold text-3xl md:text-6xl mt-5">
            We'd Love to Hear From You
          </h1>
          <p className="mt-3 text-gray-500 text-lg">
            Have questions, feedback, or need support? Our team is here to help
You make the most of your mentorship journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
