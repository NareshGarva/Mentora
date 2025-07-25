import React from 'react'

function Experience({experience}) {
  return (
    <div>
<p className='text-2xl font-semibold mb-5'>Work Experience</p>

{experience && experience.length > 0? experience.map((exper)=>(<div class="border-l-3 border-blue-200 p-0 pl-4 my-6">
  <h3 class="font-semibold">{ exper || "Senior Product Manager"}</h3>
  <a href="#" class="text-blue-600 font-medium hover:underline">Google</a>
  <p class="text-gray-600 text-sm">2020 - Present</p>
  <p class="text-gray-700 mt-1">Leading product strategy for Google Search features used by 1B+ users</p>
</div>)) : (<div class="border-l-3 border-blue-200 p-0 pl-4 my-6">
  <h3 class="font-semibold">Senior Product Manager</h3>
  <a href="#" class="text-blue-600 font-medium hover:underline">Google</a>
  <p class="text-gray-600 text-sm">2020 - Present</p>
  <p class="text-gray-700 mt-1">Leading product strategy for Google Search features used by 1B+ users</p>
</div>)}


    </div>
  )
}

export default Experience