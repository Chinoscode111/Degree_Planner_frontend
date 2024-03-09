import React from "react";
import data from "../../data.json";
import CreateLabel from "./CreateLabel";

const LoadCourses = () =>{

    const courses = data;

    const [coursesList, setCoursesList] = React.useState(courses.map(course => (
        {...course, toggle: true}
    )))
    console.log("courses list", coursesList);

    //creating drag and drop functionality


    const [displayCourses, setDisplayCourses] = React.useState(courses.map(course => (
        <CreateLabel course={course} />
    )))

    function handleChange(event) {
        const searchText = event.target.value.toLowerCase();
        console.log("searchText", searchText);
    
        const updatedCoursesList = coursesList.map(course => ({
                ...course,
                toggle: course.title.toLowerCase().includes(searchText) || course.code.toLowerCase().includes(searchText)
            }))
        
    
        setCoursesList(updatedCoursesList)
    
        setDisplayCourses(courses.map(course => (
            <CreateLabel course={course} />)))
    }
    



    return (
        <div className="load-courses-cont">
            <h1>load courses</h1>
            <input 
                type="text"
                placeholder="Enter course"
                onChange={handleChange}
            ></input>
            {displayCourses}
        </div>
        
    )
}

export default LoadCourses