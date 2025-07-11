import React from 'react'
import {Mail, Phone, MapPin, Clock} from 'lucide-react'


function ContectSrc() {
  return (
    <section data-aos-delay="0" className='w-full py-10 bg-gradient-to-b from-orange-100 to-transparent'>
<div className='mx-2 md:mx-28 flex justify-center items-center py-10'>
<div className='w-full'>

<div>
     <div className='flex items-center justify-center gap-3.5'>
          <div className='border rounded-2xl w-fit p-2'>
              <div className='flex items-center justify-center'>
              <Mail/>
              </div>
              <p className='text-xl text-center'>Email Us</p>
              <h1 className='text-black'>mentora@gmail.com</h1>
           </div>

           <div className='border rounded-2xl w-fit p-2'>
              <div className='flex items-center justify-center'>
              <Phone/>
              </div>
              <p className='text-xl text-center'>Call Us</p>
              <h1 className='text-black'>+91 55555-33333</h1>
           </div>

           <div className='border rounded-2xl w-fit p-2'>
              <div className='flex items-center justify-center'>
                 <MapPin/>
              </div>
              <p className='text-xl text-center'>Visit Us</p>
              <h1 className='text-black'>GB Road Near Naresh House, Dehli</h1>
           </div>

           <div className='border rounded-2xl w-fit p-2'>
              <div className='flex items-center justify-center'>
                
               <Clock/>
                 </div>
              <p className='text-xl text-center'>Business Hours</p>
              <h1 className='text-black'>Mon-Fri: 9Am - 5Pm IST</h1>
           </div>
       </div>    
</div>

</div>
</div>
</section>
  )
}

export default ContectSrc