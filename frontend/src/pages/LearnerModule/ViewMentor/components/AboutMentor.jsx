import React from 'react'
import SkillTag from './SkillTag'

const AboutMentor = (props) => {
    // props.mentor_languages=["eng", "hin"]  
  return (
    <div className='about-contents-wrapper flex gap-4 text-gray-600'>
      <h3 className="text-2xl text-black font-bold">About</h3>
          <p>
            {props.mentor_about || "Mentor's description will appear here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          </p>
          <div className="skills-and-language-container">
            <div className="skills-container">
                <h5 className='text-base font-bold text-black'>Skills</h5>
                <SkillTag btnType="outlined" />
                <SkillTag btnType="outlined" />
                <SkillTag btnType="outlined" />
                <SkillTag btnType="outlined" />
                <SkillTag btnType="outlined" />
                <SkillTag btnType="outlined" />
                <SkillTag btnType="outlined" />
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
