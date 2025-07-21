import React from 'react'
import {GraduationCap} from 'lucide-react'

    function Education({nextStep, prevStep, handleChange, values}) {
  return (
   <>
   <div className='w-full flex justify-center items-center'>
   <div className='w-fit flex justify-center items-center'>    
    <div className='border rounded bg-gray-300 p-5'>
         <div className='flex items-center justify-center gap-2'>
          <GraduationCap size={33}/>
          <h1 className='font-bold text-2xl'>Education </h1>
         </div>
        
          <div>
              <h2 className='font-bold'>Education 1</h2>
             <form action="">
                <div>
                <label htmlFor="institution" className='block text-left'>Institution</label>
                <input type="text" name='institution'  className='border rounded w-full bg-gray-200' value={values.institution} onChange={handleChange}/>    
                </div>          

                <div className='flex justify-between gap-3'>
                    <div>
                     <label htmlFor="degree" className='block text-left'>Degree</label>
                     <input type="text" name='degree'  className='border rounded w-full bg-gray-200'value={values.degree} onChange={handleChange}/>
                     </div>

                     <div>
                     <label htmlFor="fieldOfStudy" className='block text-left'>Field of Study</label>
                     <input type="text" name='fieldOfStudy'  className='border rounded w-full bg-gray-200'value={values.fieldOfStudy} onChange={handleChange}/> 
                    </div>        
                </div>

                <div className='flex justify-between gap-3'>
                    <div>
                    <label htmlFor="graduationYear" className='block text-left'>Graduation Year</label>
                     <input type="number" name='graduationYear'  className='border rounded w-full bg-gray-200'value={values.graduationYear} onChange={handleChange}/> 
                    </div>

                    <div>
                    <label htmlFor="gpa" className='block text-left'>GPA</label>
                     <input type="number" name='gpa'  className='border rounded w-full bg-gray-200'value={values.gpa} onChange={handleChange}/> 
                    </div>
                </div>

                <div className='flex justify-between mt-3'>
                 <button onClick={prevStep} className='bg-gray-500 border rounded-xl p-1'>Previous</button>
                 <button onClick={nextStep} className='bg-blue-400 border rounded-xl p-1'>Next</button>
               </div>

             </form>
          </div>
        



      </div>
   
   </div>
   </div>
   
   </>

  )
}

export default Education