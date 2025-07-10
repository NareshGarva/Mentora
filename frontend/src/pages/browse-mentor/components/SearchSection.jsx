import React, { useRef } from 'react';
import { UserSearch } from 'lucide-react';
import {Mentors} from '../../../sample/MentorCard'

function SearchSection({setFilteredMentors}) {
  const inputRef = useRef(null);

  const filterMentors = () => {
    const query = inputRef.current.value.toLowerCase();
    const result = Mentors.filter((mentor) => {
      const nameMatch = mentor.name.toLowerCase().includes(query);
      const titleMatch = mentor.title.toLowerCase().includes(query);
      const skillMatch = mentor.skills.some(skill =>
        skill.toLowerCase().includes(query)
      );

      return nameMatch || titleMatch || skillMatch;
    });
    setFilteredMentors(result);
  };

  const addInput = (tag) => {
    inputRef.current.value = tag;
    filterMentors(); // update after setting value
  };

  return (
        <section className='w-full bg-gradient-to-t from-transparent to-purple-100 border-b-2 border-b-gray-200 py-10'>
      <div className='mx-2 md:mx-28 flex justify-center items-center'>
        <div className='w-full md:w-[60%] mx-auto'>
          <div className='p-3 md:p-8 bg-white rounded-2xl shadow-lg border border-indigo-300'>
            <div className='flex justify-left gap-3 items-center p-3 rounded-2xl border-2 border-transparent transition-all ease-in-out duration-300 focus-within:border-black'>
              <UserSearch className='text-gray-500' />
              <input
                id='searchInput'
                ref={inputRef}
                onKeyUp={filterMentors}
                className='text-sm placeholder:text-gray-400 bg-transparent w-full focus:outline-none'
                type="text"
                placeholder='Search by name, skill, company, or expertise...'
              />
            </div>

            <hr className='mb-5 mt-3 text-gray-200' />
            <div className='mt-6'>
              <span className='text-gray-400 text-sm'>Trending searches:</span>
              <div className='flex flex-wrap mt-2'>
                {["React", "Data", "Cloud", "Home World"].map((tag, index) => (
                  <span
                    key={index}
                    className='bg-gradient-to-br from-gray-100 to-transparent text-xs font-semibold rounded-full px-2 py-0.5 mr-2 mb-2 cursor-pointer'
                    onClick={() => addInput(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default SearchSection;
