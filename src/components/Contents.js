import React from 'react'

const Contents = ({contents}) => {
    
  return (
    <div>
        <h2>Contents</h2>
        <ul>
{contents.map((course)=>{
    return <li key={course.id}>{course.name}</li>
})}
        </ul>
    </div>
  )
}

export default Contents