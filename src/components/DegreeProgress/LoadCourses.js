import React from "react";

const LoadCourses = () =>{

    const courses = [
        {
            "title": "Intro to ML",
            "code": "CS101",
            "tag": "minor",
            "semester": "fall",
            "credits": 6.0
        },
        {
            "title": "AI",
            "code": "CS102",
            "tag": "minor",
            "semester": "fall",
            "credits": 6.0
        }
    ]

    const [coursesList, setCoursesList] = React.useState(courses.map(course => (
        {...course, toggle: true}
    )))
    console.log("courses list", coursesList)

    function createLabel(dict){
        console.log("creating label")
        return(
            <div className="load-courses--label">
                <p>{dict.title}</p>
                <p>{dict.code}</p>
            </div>
        )
    }


    const [displayCourses, setDisplayCourses] = React.useState(courses.map(course => (
        createLabel(course)
    )))









    function handleChange(event) {
        const searchText = event.target.value.toLowerCase();
    
        const updatedCoursesList = coursesList.map(course => ({
                ...course,
                toggle: course.title.toLowerCase().includes(searchText) || course.code.toLowerCase().includes(searchText)
            }))
        
    
        setCoursesList(updatedCoursesList)
    
        setDisplayCourses(courses.map(course => (
            createLabel(course))))
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