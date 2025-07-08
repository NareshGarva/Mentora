import React from 'react'
import {UserSearch} from 'lucide-react'
function SearchSection() {
  return (
    <section className='w-full bg-gradient-to-tr from-transparent to-purple-100'>
<div className='mx-2 md:mx-28 flex justify-center items-center'>
<div className='w-[60%] mx-auto'>
<div className='p-5 bg-white rounded-xl shadow-lg border border-indigo-300'>
    <div className='flex justify-left gap-3 items-center '>
        <UserSearch className='text-gray-500'/>
        <input className='text-sm placeholder:text-gray-400 bg-transparent w-full focus:outline-0' type="text" placeholder='Search by name, skill, compony, or expertise...' />
    </div>
    <div className='mt-6'>
<span className='text-gray-400 text-sm'>Trending searches:</span>
    </div>
</div>
</div>
    </div>
    </section>
  );
}

export default SearchSection