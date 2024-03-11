import React, { useState } from 'react'
import{useDrop} from 'react-dnd';
import { ItemTypes } from './CreateLabel.jsx';

const SemesterCourses = () => {

    const [springSem, setSpringSem] = React.useState([]);

    const [fallSem, setFallSem] = useState([]);


    const [, drop1] = useDrop(
        () => ({
            accept: ItemTypes.COMPONENT,
            drop: (item, monitor) => {
                let flag = 0;
                fallSem.map(course => {
                    if(course.code === item.course.code){
                        flag = 1;
                    }
                })

                
                if(item.course.semester === "spring"){
                    flag = 1;
                }

                if(flag === 0) {setFallSem([...fallSem, item.course]);}

            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [fallSem] // Add fallSem as a dependency
    );


    const [, drop2] = useDrop(
        () => ({
            accept: ItemTypes.COMPONENT,
            drop: (item, monitor) => {
                
                let flag = 0;
                springSem.map(course => {
                    if(course.code === item.course.code){
                        flag = 1;
                    }
                })

                if(item.course.semester === "fall"){
                    flag = 1;
                }

                if(flag === 0) {setSpringSem([...springSem, item.course]);}



            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [springSem] // Add fallSem as a dependency
    );

    const style = {
        width: "10cm",
        height: "fit-content",
        border: "2px solid red",
        margin: "10px",
    }

  return (
    <>

        <div className="fall-sem-cont" ref={drop1} style={style}  >
            <h3>Fall Semester</h3>
            {fallSem.map(course => (
                <div className="course" key={course.code}>
                    <h3>{course.title}</h3>
                    <p>{course.code}</p>
                </div>
            ))}
        </div>
        
        <div className="spring-sem-cont" ref={drop2} style={style}  >
            <h3>Spring Semester</h3>
            {springSem.map(course => (
                <div className="course" key={course.code}>
                    <h3>{course.title}</h3>
                    <p>{course.code}</p>
                </div>
            ))}
        </div>

    </>
  )
}

export default SemesterCourses