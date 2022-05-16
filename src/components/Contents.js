import React from 'react'

const Contents = ({contents}) => {

   let total = 0;
   
  return (
    <div>
        <h2>Contents</h2>
        <ul>
{contents.map((course)=>{
    total = total + course.exercises;
    return <li key={course.id}>{course.name + " " + course.exercises}</li>
})}
<p>Total {total}</p>
        </ul>

    </div>
  )
}

export default Contents