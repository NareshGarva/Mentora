import React from 'react'

function Form() {
  return (
     <section data-aos-delay="0" className='w-fit  py-10 bg-gradient-to-b from-orange-100 to-transparent'>
<div className='mx-2 md:mx-28 flex justify-center items-center py-10'>
    <div className='w-full mx-auto border rounded bg-gray-50 p-10'>
        <div>
            <h1 className='text-2xl font-bold  mb-5'>Contect Form</h1>
        </div>
        <form action="" className='w-fit  '>
            <div className=' flex  gap-3'>
                <div>
                <label htmlFor="name" className='block ' >Name</label>
                <input type="text" id='name' className='border rounded  w-100 ' placeholder='Your Name' /> <br />
                </div>
                 
                 <div>             
                <label htmlFor="email" className='block '>Email</label>
                <input type="email"  id="email" className='border rounded w-100' placeholder='Example@gmail.com' /> <br />
                </div>

            </div>
            
            <div>
                <label htmlFor="subject" className='block mt-5'>Subject</label>
                <input type="text" id='subject' className='border rounded w-full' placeholder='What is this about'/> <br />
                <label htmlFor="message" className=' mt-5 block'>Message</label>
                <textarea  id="subject" className='border rounded w-full h-20' placeholder='Tell us more about how can help you...'></textarea><br />
                
                <button type='submit' className='text-white text-center border rounded w-full bg-blue-500'>Send Message</button>
                <br />
            </div>

        </form>

    </div>
</div>
</section>
  )
}

export default Form