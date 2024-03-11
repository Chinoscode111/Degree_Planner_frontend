import React from 'react'
import { useDrag } from 'react-dnd';

export const ItemTypes = {
    COMPONENT: 'component'
}

const CreateLabel = ({course}) => {

    

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.COMPONENT,
        item: {course},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return(
        <div className="load-courses--label" key={course.code} ref={drag} style={{border: "1px solid black"}} >
            <p>{course.title}</p>
            <p>{course.code}</p>
        </div>
    )
}

export default CreateLabel;