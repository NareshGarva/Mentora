import React from 'react'
import {UserSearch} from 'lucide-react'
function SearchSection() {
  const addInput = (tag)=>{
    console.log(tag)
    const searchInput = document.getElementById('searchInput');
    searchInput.value = tag.innerText;
  }
  return (
    <section className='w-full bg-gradient-to-t from-transparent to-purple-100 border-b-2 border-b-gray-200 py-10'>
<div className='mx-2 md:mx-28 flex justify-center items-center'>
<div className='w-full md:w-[60%] mx-auto'>
<div className='p-3 md:p-8 bg-white rounded-2xl shadow-lg border border-indigo-300'>

   <div className='flex justify-left gap-3 items-center p-3 rounded-2xl border-2 border-transparent transition-all ease-in-out duration-300 focus-within:border-2 focus-within:border-black'>
  <UserSearch className='text-gray-500' />
  <input
    id='searchInput'
    className='text-sm placeholder:text-gray-400 bg-transparent w-full focus:outline-none'
    type="text"
    placeholder='Search by name, skill, company, or expertise...'
  />
</div>

    <hr className='mb-5 mt-3 text-gray-200'/>
    <div className='mt-6'>
<span className='text-gray-400 text-sm'>Trending searches:</span>
<div className='serachList'>
<span className='bg-gray-100 text-xs font-semibold rounded-full px-2 py-0.5 mr-2 mb-2 cursor-pointer' onClick={(e)=>{
  addInput(e.target)
}} value="Home World">Home World</span>
<span className='bg-gray-100 text-xs font-semibold rounded-full px-2 py-0.5 mr-2 mb-2 cursor-pointer' onClick={(e)=>{
  addInput(e.target)
}}>World</span>
<span className='bg-gray-100 text-xs font-semibold rounded-full px-2 py-0.5 mr-2 mb-2 cursor-pointer' onClick={(e)=>{
  addInput(e.target)
}}>Naresh Garva</span>
<span className='bg-gray-100 text-xs font-semibold rounded-full px-2 py-0.5 mr-2 mb-2 cursor-pointer' onClick={(e)=>{
  addInput(e.target)
}}>Home</span>
</div>
    </div>
</div>
</div>
    </div>
    </section>
  );
}

export default SearchSection