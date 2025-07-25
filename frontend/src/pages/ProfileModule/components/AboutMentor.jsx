import React from 'react'
import SkillTag from '../../../components/SkillTag'
import { Ribbon } from 'lucide-react'

const AboutMentor = ({about,mentor_languages, skills}) => {
  return (
    <div >
      <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className='text-gray-500 mb-3'>
            {about || "Mentor's description will appear here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          </p>
          <div className="flex justify-left items-center gap-5">
            <div className="w-3/4">
                <h5 className='font-semibold w-full flex justify-left items-center gap-1 text-orange-500'><Ribbon size={15}/>Expertise</h5>
              <SkillTag skills={skills}/>
            </div>
            <div className='w-1/4'>
                <h5 className='font-semibold w-full mb-2'>Languages</h5>
                <div className="text-sm text-gray-500">
                {mentor_languages.map((lang, idx)=>(
                  <div key={idx}>{lang}</div>
                ))}
                </div>
            </div>

          </div>
    </div>
  )
}

export default AboutMentor
