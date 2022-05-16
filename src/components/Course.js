import React from 'react'
import Contents from './Contents'
import Header from './Header'

const Course = ({course}) => {
    
  return (
   <div>
       <Header header={course.name}/>
      <Contents contents={course.parts}/>
   </div>
  )
}

export default Course