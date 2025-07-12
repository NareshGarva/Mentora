import React from 'react'

const SkillTag = (props) => {

    const btnType = props.type || 'default';

    if(btnType === 'default'){
        return (<>
        <div className="tag-wrapper w-fit px-3 py-1 rounded-full bg-secondary-200 ">
            {props.skill || "skill name"}
        </div>
        </>)
    }
    if(btnType === 'outlined'){
        return (<>
        <div className="tag-wrapper w-fit px-3 py-1 stroke-1 stroke-m-gray-600 rounded-full">
            {props.skill || "skill name"}
        </div>
        </>)
    }
  return (
    <div>
      
    </div>
  )
}

export default SkillTag
