import React from "react";

const LoadCourses = () =>{

    const courses = [
        {
            group: "MA",
            courses: [{
                name: "Linear Algebra",
                code: "MA110",
                group: "MA"
            },
            {
                name: "Introduction to Mathematics",
                code: "MA114",
                group: "MA"
            },
            {
                name: "History of Mathematics",
                code: "MA113",
                group: "MA"
            },
            {
                name: "Calculus",
                code: "MA105",
                group: "MA"
            }]
        },
        {
            group: "PH",
            courses: [{
                name: "Classical and Quantum Physics",
                code: "PH110",
                group: "PH"
            },
            {
                name: "Physics Lab",
                code: "PH117",
                group: "PH"
            }]
        }
        
    ]

    const [coursesList, setCoursesList] = React.useState(courses.map(group => (
        {...group, courses: group.courses.map(course => ({...course, toggle: true})), toggle: true}
    )))
    console.log("courses list", coursesList)

    function toggle(groupName){
        console.log("toggle", groupName)
        setCoursesList(prevCourseList => (
            prevCourseList.map(group => (
                group.group==groupName.group?
                    {...group, toggle: !group.toggle} : group
            ))
        ))
    }
    
    React.useEffect(() => {
        console.log("new course list", coursesList);
        setDisplayGroups(coursesList.map(group => (
            createGroup(group)
        )))
        console.log("display groups", displayGroups)
    }, [coursesList]);


    function createLabel(dict){
        console.log("creating label")
        return(
            <div className="load-courses--label">
                <p>{dict.name}</p>
                <p>{dict.code}</p>
            </div>
        )
    }

    function createGroup(group){
        console.log("all group", group)
        if(group.toggle){
            return(
                <>
                    <button onClick={() => (toggle(group))}>{group.group}</button>
                    {group.courses.map(course => (
                    course.toggle ? createLabel(course): <p></p>
                    ))}
    
                </>
                
            )
        }
        else{
            return(
                <button onClick={() => (toggle(group))}>{group.group}</button>
            )
        }
        
    }

    const [displayGroups, setDisplayGroups] = React.useState(coursesList.map(group => (
        createGroup(group)
    )))


    // const [displayCourses, setDisplayCourses] = React.useState(courses.map((course) => (
    //     createLabel(course)
    // )))









    function handleChange(event){
        // setText(event.target.value)

        const searchText = event.target.value.toLowerCase()
        console.log(searchText)


        // const filteredCourses = courses.filter(course => (
        //     course.name.toLowerCase().startsWith(searchText) || course.code.toLowerCase().startsWith(searchText)
        // ))
        const filteredCourses = courses.filter(group => (
            group.courses.map(course => (
                course.name.toLowerCase().startsWith(searchText) || course.code.toLowerCase().startsWith(searchText)
            ))
        ))

        // console.log("filtered", filteredCourses)

        // const filteredCoursesElements = filteredCourses.map(group => (
        //     group.courses.map(course => createLabel(course))
        // ))

        // console.log(filteredCoursesElements)

        // setDisplayCourses(filteredCoursesElements.flat())


        // // filterCourses.forEach(state => {
        // //     setDisplayCourses()
        // // })
        // console.log(displayCourses)

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
            {displayGroups}
            {/* {displayCourses} */}
        </div>
        
    )
}

export default LoadCourses