import React, { useContext, useState } from 'react'
import{useDrop, useDrag} from 'react-dnd';
import { ItemTypes } from './CreateLabel.jsx';
import { Context } from '../../App.js';

const SemesterCourses = () => {

    const {setCourseData, courseData} = useContext(Context);

    const [springSem, setSpringSem] = React.useState([]);

    const [fallSem, setFallSem] = useState([]);

    const [courseInfo, setCourseInfo] = useState({});

    const [, dragFallSem] = useDrag(() => ({
        type: ItemTypes.COURSES,
        item: {courseInfo},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const [, dragSpringSem] = useDrag(() => ({
        type: ItemTypes.COURSES,
        item: {courseInfo},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging() 
        })
    }))



    const [, dropFallSem] = useDrop(
        () => ({
            accept: ItemTypes.COMPONENT,
            drop: (item, monitor) => {
                let flag = 0;

                fallSem.map(course => {
                    if(course.code === item.course.code){
                        flag = 1;
                    }
                });

                
                if(item.course.semester == 'spring'){
                    flag = 1;
                }

                if(flag === 0) {
                    setFallSem([...fallSem, item.course]);
                    // setCourseData([[...courseData.slice(0, courseData.indexOf(item.course)), ...courseData.slice(courseData.indexOf(item.course) + 1)]]);
                }
// console.log(courseData);

            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [fallSem] // Add fallSem as a dependency
    );

    console.log("fall sem",fallSem);
    console.log("spring sem",springSem);

    const [, dropSpringSem] = useDrop(
        () => ({
            accept: ItemTypes.COMPONENT,
            drop: (item, monitor) => {
                
                let flag = 0;
                springSem.map(course => {
                    if(course.code === item.course.code){
                        flag = 1;
                    }
                })

                if(item.course.semester == 'autumn'){
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

//to drop course back to the list
   


    const style = {
        width: "10cm",
        height: "fit-content",
        border: "2px solid red",
        margin: "10px",
    }

  return (
    <>

        <div className="fall-sem-cont" ref={dropFallSem} style={style}  >
            <h3>Fall Semester</h3>
            {fallSem.map(course => (
                
                <div className="course" key={course.code}  ref={dragFallSem} style={{border:"1px solid black"}} >
                    <h3>{course.title}</h3>
                    <p>{course.code}</p>
                </div>
            ))}
        </div>
        
        <div className="spring-sem-cont" ref={dropSpringSem}  style={style}  >
            <h3>Spring Semester</h3>
            {springSem.map(course => (
                
                <div className="course" ref={dragSpringSem}  key={course.code}>
                    <h3>{course.title}</h3>
                    <p>{course.code}</p>
                </div>
            ))}
        </div>

    </>
  )
}

export default SemesterCourses