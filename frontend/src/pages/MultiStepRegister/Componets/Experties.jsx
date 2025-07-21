import React from 'react'
import {GraduationCap} from 'lucide-react'

    function Experties({ prevStep, handleChange, values}) {
  return (
   <>
   <div className='w-full flex justify-center items-center'>
   <div className='w-fit flex justify-center items-center'>    
    <div className='border rounded bg-gray-300 p-5'>
         <div className='flex items-center justify-center gap-2'>
          <GraduationCap size={33}/>
          <h1 className='font-bold text-2xl'>Experties </h1>
         </div>
        
          <div>
            
             <form action="">
                <div>
                <label htmlFor="skills" className='block text-left'>Skills</label>
                <input type="text" name='skills'  className='border rounded w-full bg-gray-200' value={values.skills} onChange={handleChange}/>    
                </div>          

                
                  <div>
                     <label htmlFor="category" className='block text-left'>Category</label>
                     <input type="text" name='category'  className='border rounded w-full bg-gray-200'value={values.category} onChange={handleChange}/>
                 </div>

                

                               

                <div className='flex justify-between mt-3'>
                 <button onClick={prevStep} className='bg-gray-500 border rounded-xl p-1'>Previous</button>
    <button onClick={() => alert("Form submitted!")} className='bg-green-500 border rounded-xl p-1'>Submit</button>
               </div>

             </form>
          </div>
        



      </div>
   
   </div>
   </div>
   
   </>

  )
}

export default Experties