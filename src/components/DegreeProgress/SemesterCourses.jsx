import React, { useContext, useEffect, useState } from 'react'
import{useDrop, useDrag} from 'react-dnd';
import { ItemTypes } from './CreateLabel.jsx';
import { Context, ProgressContext } from '../../App.js';
import SemLabel from './SemLabel.jsx';

const SemesterCourses = () => {

    const {setCoursesList, coursesList, fallSem, setFallSem, setSpringSem, springSem} = useContext(Context);
    const {electiveCredits, minorCredits, setElectiveCredits, setMinorCredits} = useContext(ProgressContext);
    const [coreCredits, setCoreCredits] = useState(0);
    // console.log("elective ", electiveCredits);
    // console.log("minor ", minorCredits);

   


    const [, dropFallSem] = useDrop(
        () => ({
            accept: ItemTypes.COMPONENT,
            drop: (item, monitor) => {
                let flag = 0;

                
                console.log("coreinside2 ", coreCredits, item.course.credits);

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
                   // setProgress({...progress, totalCredits: progress.totalCredits + item.course.credits});
                   if (item.course.tag === 'core') {
                    console.log("coreinside", coreCredits, item.course.credits);
                    setCoreCredits(coreCredits + item.course.credits);
                    
                   }

                   if (item.course.tag === 'elective') {
                    setElectiveCredits(electiveCredits + item.course.credits);
                    
                   }

                     if (item.course.tag === 'minor') {
                      setMinorCredits(minorCredits + item.course.credits);
                      
                     }  
                   
                }

            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [fallSem] // Add fallSem as a dependency
    );

    // //console.log("fall sem",fallSem);
    // //console.log("spring sem",springSem);

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
                    if (item.course.tag === 'core') {
                        console.log("coreinside", coreCredits, item.course.credits);
                        let credits = coreCredits + item.course.credits;
                        setCoreCredits(credits);
                        
                       }
    
                       if (item.course.tag === 'elective') {
                        setElectiveCredits(electiveCredits + item.course.credits);
                        
                       }
    
                         if (item.course.tag === 'minor') {
                          setMinorCredits(minorCredits + item.course.credits);
                          
                         }  
                       
                }
                


            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [springSem] // Add fallSem as a dependency
    );

    //removes all the elements of spring and fall semester from the coursesList every time the spring and fall semester state changes

    useEffect( ()=>{

        fallSem.map(course =>{
           
            setCoursesList(coursesList.filter(courseD => courseD.code !== course.code));
        

        })

    } , [fallSem])

    useEffect(() => {
        
        
        springSem.map(course =>{
            setCoursesList(coursesList.filter(courseD => courseD.code !== course.code));


         })
    }, [springSem])

    // //console.log("coursesList",coursesList);

//to drop course back to the list
   


console.log("core", coreCredits);

  return (
    <div className="sem-cont">

        <div className="autumn-sem-cont" ref={dropFallSem} >
            <h3 className='sem-title'>Autumn Semester</h3>
            {fallSem.map(course => (
               <SemLabel course={course} key={course.code}  />
            ))}
        </div>
        
        <div className="spring-sem-cont" ref={dropSpringSem}>
            <h3 className='sem-title'>Spring Semester</h3>
            {springSem.map(course => (
                
                <SemLabel course={course}  key={course.code}/>
            ))}
        </div>
    </div>
    
  )
}

export default SemesterCourses