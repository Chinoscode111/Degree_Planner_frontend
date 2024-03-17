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
        <div className="load-courses--label" key={course.code} ref={drag} style={{border: "1px solid black", opacity}} >
            <p>{course.title}</p>
            <p>{course.code}</p>
        </div>
    )
}

export default CreateLabel;