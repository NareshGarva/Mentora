import React from 'react';
import{User} from 'lucide-react'

function PersonalInfo({ nextStep, handleChange, values }) {
  return (
   <>
    <div className='flex justify-center items-center '>
    <div className='border rounded w-98 bg-gray-300 p-3 '>
      <div className='flex items-center justify-center mb-5'><User size={33}/>
      <h2 className='font-bold text-3xl'> Personal Information</h2>
      </div>
           <div >
             <form action="" className=''>
                <div className=' flex justify-between gap-2 '>
                  <div>
                   <label htmlFor="fname" className='block text-left'>First Name</label>
                   <input type="text" className='border rounded bg-gray-200' placeholder="First Name" name="firstName" value={values.firstName} onChange={handleChange} /><br />
                  </div>
                   
                   <div>
                   <label htmlFor="lname" className='block text-left'>Last Name</label>
                   <input type="text" className='border rounded bg-gray-200' placeholder="Last Name" name="lastName" value={values.lastName} onChange={handleChange} /><br />
                   </div>
                </div>

                <div>
                  <label htmlFor="email" className='block text-left'>Email</label>
                  <input type="email" className='border w-full rounded bg-gray-200' placeholder="Email" name="email" value={values.email} onChange={handleChange} /><br />
                </div>

                <div className=' flex justify-between gap-2'>
                  <div>
                  <label htmlFor="location" className='block text-left'>Location</label>
                 <input type="text" className='border rounded bg-gray-200' placeholder="Location" name="location" value={values.location} onChange={handleChange} /><br />
                 </div>

                 <div>
                 <label htmlFor="rate"  className='block text-left'>Money per hour</label>
                 <input type="text" className='border rounded bg-gray-200' placeholder="Money Per Hour" name="rate" value={values.rate} onChange={handleChange} /><br />
                  </div>                
                </div>

                <div className=' flex justify-between gap-2 '>
                  <div>
                  <label htmlFor="phone" className='block text-left'>Phone No.</label> 
                 <input type="text" className='border rounded bg-gray-200' placeholder="Phone Number" name="phone" value={values.phone} onChange={handleChange} /><br />
                 </div>

                 <div>
                 <label htmlFor="profileImage" className='block text-left'>Profile Image</label>
                 <input type="text" className='border rounded bg-gray-200' placeholder="Profile Image URL" name="profileImage" value={values.profileImage} onChange={handleChange} /><br />
                 </div>
                </div> 
               

                <div>
                  <label htmlFor="bio" className='block text-left'>Bio</label>
                <textarea className='border rounded w-full bg-gray-200' placeholder="Bio" name="bio" value={values.bio} onChange={handleChange} /><br />
                </div>

                <div className=' flex justify-center'>
                   <button onClick={nextStep} className='bg-blue-500 p-2  border rounded-2xl'>Next</button>
                </div>
            </form>
            </div>
    </div>
    </div>
    </> 
  );
}

export default PersonalInfo;
