import React, { useContext, useEffect, useState } from 'react'
import{useDrop, useDrag} from 'react-dnd';
import { ItemTypes } from './CreateLabel.jsx';
import { Context } from '../../App.js';
import SemLabel from './SemLabel.jsx';

const SemesterCourses = () => {

    const {setCourseData, courseData, fallSem, setFallSem, setSpringSem, springSem} = useContext(Context);

   


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

                    //agar courseData ke state set ho chuki hai toh again state change mai puranai element kaise aa sakte hai??
                    
                    // setCourseData(courseData.filter(course => course.code !== item.course.code));
                }

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

                if(flag === 0) {
                    setSpringSem([...springSem, item.course]);

                    // setCourseData(courseData.filter(course => course.code !== item.course.code));
                
                }



            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [springSem] // Add fallSem as a dependency
    );

    //removes all the elements of spring and fall semester from the courseData every time the spring and fall semester state changes

    useEffect( ()=>{

        springSem.map(course =>{
            setCourseData(courseData.filter(courseD => courseD.code !== course.code));
         })


         fallSem.map(course =>{
            setCourseData(courseData.filter(courseD => courseD.code !== course.code));
         })
    } , [fallSem, springSem])

    console.log("courseData",courseData);

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
               <SemLabel course={course} key={course.code}  />
            ))}
        </div>
        
        
        <div className="spring-sem-cont" ref={dropSpringSem}  style={style}  >
            <h3>Spring Semester</h3>
            {springSem.map(course => (
                
                <SemLabel course={course}  key={course.code}/>
            ))}
        </div>

    </>
  )
}

export default SemesterCourses