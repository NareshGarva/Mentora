import React from 'react'

const SkillTag = (props) => {

    const btnType = props.type || 'default';

    if(btnType === 'default'){
        return (<>
        <div className="tag-wrapper flex justify-center items-center text-nowrap h-fit w-fit px-3 py-1 rounded-full bg-secondary-200 ">
            {props.skill || "skill name"}
        </div>
        </>)
    }
    if(btnType === 'outlined'){
        return (<>
        <div className="tag-wrapper flex justify-center items-center text-nowrap h-fit w-fit px-3 py-1 border-1 border-m-gray-600 rounded-full">
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
