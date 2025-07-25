import React from 'react'

function Education({education}) {
  return (
      <div>
<p className='text-2xl font-semibold mb-5'>Education</p>


{ education && education.length>0? education.map((edu)=>(<div class="border-l-3 border-blue-200 p-0 pl-4 my-6">
  <h3 class="font-semibold">{edu.course || "BCA"}</h3>
  <a href="#" class="text-blue-600 font-medium hover:underline">{edu.college || "MLSU"}</a>
  <p class="text-gray-600 text-sm">{edu.enrollmentDate || "2020"} - {edu.passoutDate || "Present"}</p>
</div>)) : (<div class="border-l-3 border-blue-200 p-0 pl-4 my-6">
  <h3 class="font-semibold">BCA</h3>
  <a href="#" class="text-blue-600 font-medium hover:underline">MLSU</a>
  <p class="text-gray-600 text-sm">2020 - Present</p>
</div>)}


    </div>
  )
}

export default Education