import React from "react";

function Message() {
  return (
    <>
      <section
        data-aos-delay="0"
        className="w-full bg-gradient-to-b from-transparent via-green-100 to-transparent"
      >
        <div className="mx-5 md:mx-28 flex justify-center items-center h-fit">
          <div className="w-full md:flex md:justify-center md:items-center md:gap-10">
            <div className="mb-10 md:mb-0">
              <h1 className="text-black font-bold text-3xl mb-5">
                Send Us A Message
              </h1>
          
                <p className="text-gray-600">
                  Whether you're a mentee looking for guidance, a mentor wanting
                  to join our platform, or a business interested in
                  partnerships, we're here to help.
                </p>
              

              <div className="mt-6 flex justify-left items-start gap-5">
                <div className="w-[40px] h-[25px] md:w-[40px] flex justify-center items-center bg-indigo-100 rounded-full mt-1.5">
    <p className="md:text-lg font-semibold  text-indigo-700">1</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Quick Response</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  We are Typically response to all the inquiries within 24 hours
                  during business days{" "}
                </p>
                </div>
              </div>

              <div className="mt-6 flex justify-left items-start gap-5">
                <div className="w-[40px] h-[25px] md:h-[40px] flex justify-center items-center bg-yellow-100 rounded-full mt-1.5">
    <p className=" md:text-lg font-semibold text-yellow-700">2</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Personalized Support</p>
                <p className="text-sm text-gray-600 mt-0.5">
                Every message is read by our team to ensure you get the most relevant help.
                </p>
                </div>
              </div>

              <div className="mt-6 flex justify-left items-start gap-5">
                <div className="w-[33px] md:w-[40px] h-[25px] md:h-[40px] flex justify-center items-center bg-red-100 rounded-full mt-1.5">
    <p className=" md:text-lg font-semibold text-red-700">3</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">Follow Up</p>
                <p className="text-sm text-gray-600 mt-0.5">
                 We'll follow up to make sure your questions are fully answered.
                </p>
                </div>
              </div>

            </div>
            <form action="" className="p-5 rounded-lg bg-white">
              <h2 className="mb-5 font-bold text-2xl">Contact From</h2>
              <div className="mb-3 flex justify-between items-center gap-5 w-full overflow-hidden">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-200 py-1.5 px-4 rounded-lg w-40"
                    placeholder="Your Name"
                  />
                  
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-200 py-1.5 px-4 rounded-lg w-40"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-200 py-1.5 px-4 rounded-lg w-full"
                  placeholder="Example@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="border border-gray-200 py-1.5 px-4 rounded-lg w-full"
                  placeholder="What is this about"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="border border-gray-200 py-1.5 px-4 rounded-lg w-full"
                  rows={4}
                  placeholder="Tell us more about how can help you..."
                ></textarea>
               
              </div>

              <button
                type="submit"
                className="text-white p-2.5 border rounded-lg w-full bg-black hover:bg-black/80"
              >
                Send Message
              </button>
              <br />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Message;
