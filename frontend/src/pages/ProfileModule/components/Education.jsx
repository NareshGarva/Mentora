import React from 'react'

function Education({education}) {
  return (
      <div>
<p className='text-2xl font-semibold mb-5'>Education</p>


{ education && education.length>0? education.map((edu, index)=>(<div key={index} className="border-l-3 border-blue-200 p-0 pl-4 my-6">
  <h3 className="font-semibold">{edu.course || "BCA"}</h3>
  <a href="#" className="text-blue-600 font-medium hover:underline">{edu.college || "MLSU"}</a>
  <p className="text-gray-600 text-sm">{edu.enrollmentDate || "2020"} - {edu.passoutDate || "Present"}</p>
</div>)) : (  <div className='w-full text-center'>
No Education details found
  </div>)}


    </div>
  )
}

export default Education