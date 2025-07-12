import React from 'react'
import SkillTag from './SkillTag'

const AboutMentor = (props) => {
    // props.mentor_languages=["eng", "hin"]  
  return (
    <div className='about-contents-wrapper flex flex-col gap-6 text-gray-600'>
      <h3 className="text-2xl text-black font-bold">About</h3>
          <p>
            {props.mentor_about || "Mentor's description will appear here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          </p>
          <div className="skills-and-language-container flex gap-4">
            <div className="skills-container flex w-3/4 gap-2 flex-wrap">
                <h5 className='text-base font-bold text-black block w-full'>Skills</h5>
                <SkillTag type="outlined" />
                <SkillTag type="outlined" />
                <SkillTag type="outlined" />
                <SkillTag type="outlined" />
                <SkillTag type="outlined" />
                <SkillTag type="outlined" />
                <SkillTag type="outlined" />
            </div>
            <div className="language-container">
                <h5 className='text-base font-bold'>Languages</h5>
                {props.mentor_languages.map((lang, idx)=>(
                    <div key={idx}>{lang}</div>
                ))}
            </div>
          </div>
    </div>
  )
}

export default AboutMentor
