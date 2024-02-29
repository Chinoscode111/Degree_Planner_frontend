import React from "react";

const LoadCourses = () =>{

    function createLabel(dict){
        console.log("creating label")
        return(
            <div className="load-courses--label">
                <p>{dict.name}</p>
                <p>{dict.code}</p>
            </div>
        )
    }

    const courses = [
        {
            name: "Linear Algebra",
            code: "MA110"
        },
        {
            name: "Introduction to Computer Science",
            code: "CS101"
        },
        {
            name: "Classical and Quantum Physics",
            code: "PH110"
        },
        {
            name: "Physics Lab",
            code: "PH117"
        },
        {
            name: "Design",
            code: "DE109"
        },
        {
            name: "Psychology",
            code: "HS110"
        },
        {
            name: "Calculus",
            code: "MA105"
        },
        {
            name: "Makerspace",
            confirm: "MS101"
        }
    ]


    const [displayCourses, setDisplayCourses] = React.useState(courses.map((course) => (
        createLabel(course)
    )))
    // const [text, setText] = React.useState("")

    function handleChange(event){
        // setText(event.target.value)

        const searchText = event.target.value.toLowerCase()
        console.log(searchText)


        const filteredCourses = courses.filter(course => (
            course.name.toLowerCase().startsWith(searchText) || course.code.toLowerCase().startsWith(searchText)
        ))

        console.log(filteredCourses)

        const filteredCoursesElements = filteredCourses.map(course => (
            createLabel(course)
        ))

        console.log(filteredCoursesElements)

        setDisplayCourses(filteredCoursesElements)


        // filterCourses.forEach(state => {
        //     setDisplayCourses()
        // })
        console.log(displayCourses)

        // console.log(filterCourses)

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