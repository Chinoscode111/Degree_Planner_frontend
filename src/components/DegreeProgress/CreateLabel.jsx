import React, { useContext } from 'react'
import { useDrag } from 'react-dnd';
import { Context } from '../../App';

export const ItemTypes = {
    COMPONENT: 'component',
    COURSES: 'courses',
    SPRING: 'spring',
    AUTUMN: 'autumn'
}

const CreateLabel = ({course}) => {

    // const {courseData, setCourseData} = useContext(Context);

    

    const [{opacity}, drag] = useDrag(() => ({
        type: ItemTypes.COMPONENT,
        item: {course},
        collect: (monitor) => ({
            opacity: !!monitor.isDragging() ? 0.5 : 1
        })
    }))


    return(
        <div className="course-label" key={course.code} ref={drag} >
            <h3>{course.code}</h3>
            <p>{course.title}</p>
        </div>
    )
}

export default CreateLabel;