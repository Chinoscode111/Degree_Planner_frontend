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
         
         <div className="course-label" key={course.code} ref={dragCourse} >
            <div className="course-label-first">
              <h3>{course.code}</h3>
              <p>{course.credits}.0</p>
            </div>
                    <p>{course.title}</p>
         </div>
    </>
  )
}

export default SemLabel