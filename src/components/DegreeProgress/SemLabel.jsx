import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './CreateLabel'

const SemLabel = ({course}) => {

  const [{opacity}, dragCourse] = useDrag(() => ({
    type: ItemTypes.COURSES,
    item: {course},
    collect: (monitor) => ({
        opacity: !!monitor.isDragging() ? 0.5 : 1
    })
}))




  return (
    <>
         
         <div className="course" key={course.code} ref={dragCourse}  style={{border:"1px solid black", opacity}} >
                    <h3>{course.title}</h3>
                    <p>{course.code}</p>
         </div>
    </>
  )
}

export default SemLabel