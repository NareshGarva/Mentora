import React from 'react'

const SkillTag = (props) => {

    const btnType = props.type || 'default';

    if(btnType === 'default'){
        return (<>
        <div className="tag-wrapper w-fit px-4 py-2 bg-secondary-200">
            {props.skill || "skill name"}
        </div>
        </>)
    }
    if(btnType === 'outlined'){
        return (<>
        <div className="tag-wrapper w-fit px-4 py-2 stroke-1 stroke-m-gray-600">
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
