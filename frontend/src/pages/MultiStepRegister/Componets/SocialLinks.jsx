import React from 'react';
import {Link} from 'lucide-react'

function SocialLinks({ nextStep, prevStep, handleChange, values }) {
  return (
    <>
    <div className='flex justify-center items-center'>
    <div className='border rounded w-fit bg-gray-300'>
      <div className='flex justify-center gap-2 p-2'>
        <Link size={33}/>
      <h2 className='text-2xl font-bold'> Social Links</h2>
      </div>
      <form action="" className='py-2 mx-3'>
      <div className=' '>
      <label htmlFor="linkedin" className='block text-left'>LinkedIn Profile url</label>
      <input type="text" className='border rounded bg-gray-200' placeholder="LinkedIn" name="linkedin" value={values.linkedin} onChange={handleChange} /><br />
      </div>

      <div>
        <label htmlFor="github" className='block text-left'>Github Profile Url</label>
      <input type="text" className='border rounded bg-gray-200' placeholder="GitHub" name="github" value={values.github} onChange={handleChange} /><br />
      </div>

      <div>
        <label htmlFor="website" className='block text-left'>Website Url</label>
      <input type="text" className='border rounded bg-gray-200' placeholder="Website" name="website" value={values.website} onChange={handleChange} /><br />
       </div>

       <div className='flex justify-between mt-3'>
      <button onClick={prevStep} className='bg-gray-500 border rounded-xl p-1'>Previous</button>
      <button onClick={nextStep} className='bg-blue-400 border rounded-xl p-1'>Next</button>
      </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default SocialLinks;
