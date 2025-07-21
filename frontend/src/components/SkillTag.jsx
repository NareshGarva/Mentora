import React, { useState } from 'react';

function SkillTag({ skills = [], limit }) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const displayedSkills = showAllSkills ? skills : skills.slice(0, limit);
  const remainingSkillCount = skills.length - limit;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {displayedSkills.map((skill) => (
        <span
          key={skill}
          className="bg-indigo-50 text-indigo-500 font-medium text-xs px-2.5 py-1 rounded-full transition-all ease-in-out duration-200 hover:bg-indigo-200"
        >
          {skill}
        </span>
      ))}
      {!showAllSkills && skills.length > limit && (
        <span
          role="button"
          tabIndex={0}
          onClick={() => setShowAllSkills(true)}
          onKeyDown={(e) => e.key === 'Enter' && setShowAllSkills(true)}
          className="border-[1.5px] border-gray-300 text-indigo-500 font-medium text-xs px-2.5 py-1 rounded-full cursor-pointer transition-all ease-in-out duration-200 hover:bg-indigo-200 hover:border-indigo-300"
        >
          <span className="font-bold">+</span>
          {remainingSkillCount} more
        </span>
      )}
    </div>
  );
}

export default SkillTag;
