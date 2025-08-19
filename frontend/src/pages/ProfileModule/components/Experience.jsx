import React from 'react'

function Experience({ workHistory }) {
  return (
    <div>
      <p className="text-2xl font-semibold mb-5">Work Experience</p>

      {workHistory && workHistory.length > 0 ? (
        workHistory.map((exper, index) => (
          <div
            key={exper._id || index}
            className="border-l-4 border-blue-200 p-0 pl-4 my-6"
          >
            <h3 className="font-semibold">{exper.jobProfile || "Job Title"}</h3>
            <p className="text-blue-600 font-medium">{exper.company || "Company"}</p>
            <p className="text-gray-600 text-sm">
              {exper.joiningDate || "Start"} - {exper.endingDate || "Present"}
            </p>
            <p className="text-gray-700 mt-1">{exper.aboutJob || "About this job"}</p>
          </div>
        ))
      ) : (
        <div className="w-full text-center">No Experience found</div>
      )}
    </div>
  )
}

export default Experience
