import React from "react";

function Hero() {
  return (
    <section data-aos-delay="0" className="w-full">
      <div className="mx-5 md:mx-28 flex justify-center items-center h-screen">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-green-500 bg-green-100 border border-green-400 px-6 py-1 rounded-full my-5">
              About Mentora
            </p>
          </div>
          <div className="text-center ">
            <h1 className="text-3xl md:text-6xl font-bold text-black">
              Empowering <span className="bg-gradient-to-r from-gray-400 via-green-400 to-slate-500 bg-clip-text text-transparent">Growth Through Meaningful</span> Connections
            </h1>
            <br />
            <p className="text-gray-500 text-lg">
              We believe everyone deserves access to great mentorship. Our
              platform connects ambitious individuals with experienced
              professionals who are passionate about sharing their knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
