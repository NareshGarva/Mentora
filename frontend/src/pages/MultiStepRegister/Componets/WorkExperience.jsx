import React from 'react';
import {Briefcase} from "lucide-react"

function WorkExperience({nextStep, prevStep, handleChange, values }) {
  const Experince = {
    
  }
  return (
    <>
    <div className='flex items-center justify-center'>
    <div className='w-fit border rounded bg-gray-300'>
       <div className='flex gap-2 justify-center items-center'>
        <Briefcase size={33}/>
      <h2 className='text-2xl font-bold'>Work Experience</h2>
      </div>

      <form action="">
        <div className='border rounded m-3 p-2'> <h2 className='text-center font-bold'>Experience 1</h2>

        <div>
          <label htmlFor="companyName" className='block text-left'>Comapany Name</label>
          <input type="text" className='border rounded bg-gray-200' placeholder="Company Name" name="companyName" value={values.companyName} onChange={handleChange} /><br />
        </div>

        <div>
             <label htmlFor="joiningDate" className='block text-left'>Joining Date</label>
          <input type="date" className='border rounded bg-gray-200' placeholder="Joining Date" name="joiningDate" value={values.joiningDate} onChange={handleChange} /><br />
        </div>

        <div>
             <label htmlFor="leavingDate" className='block text-left'>Leaving Date</label>
      <input type="date" className='border rounded bg-gray-200' placeholder="Leaving Date" name="leavingDate" value={values.leavingDate} onChange={handleChange} /><br />
       </div>

       <div>
          <label htmlFor="description" className='block text-left'>Description</label>
          <textarea name="description"  className='border rounded bg-gray-200 w-full'></textarea>
        </div>
       
       </div>

        
        <div>
          <button className='bg-gray-300 w-full border rounded'>Add More Experience</button>
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

export default WorkExperience;
