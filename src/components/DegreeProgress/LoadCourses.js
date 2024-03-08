import React from "react";

const LoadCourses = () =>{

    const courses = [
        {
            group: "MA",
            courses: [{
                name: "Linear Algebra",
                code: "MA110",
            },
            {
                name: "Introduction to Mathematics",
                code: "MA114",
            },
            {
                name: "History of Mathematics",
                code: "MA113",
            },
            {
                name: "Calculus",
                code: "MA105",
            }]
        },
        {
            group: "PH",
            courses: [{
                name: "Classical and Quantum Physics",
                code: "PH110",
            },
            {
                name: "Physics Lab",
                code: "PH117",
            }]
        },
        {
            group: "CS",
            courses: [{
                name: "Introduction to computer science",
                code: "CS101",
            }]
        }
        
    ]

    const [coursesList, setCoursesList] = React.useState(courses.map(group => (
        {...group, courses: group.courses.map(course => ({...course, toggle: true}))}
    )))
    console.log("courses list", coursesList)

    function toggle(groupName){
        console.log("toggle", groupName)
        setCoursesList(prevCourseList => (
            prevCourseList.map(group => (
                group.group==groupName.group?
                { ...group, courses: group.courses.map(prevCourse => ({ ...prevCourse, toggle: !prevCourse.toggle })) } : group
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
        return(
            <>
            <button onClick={() => (toggle(group))}>{group.group}</button>
            {group.courses.map(course => course.toggle ? createLabel(course) : <></>)}
            </>
            )
        
    }

    const [displayGroups, setDisplayGroups] = React.useState(coursesList.map(group => (
        createGroup(group)
    )))


    // const [displayCourses, setDisplayCourses] = React.useState(courses.map((course) => (
    //     createLabel(course)
    // )))









    function handleChange(event) {
        const searchText = event.target.value.toLowerCase();
    
        const updatedCoursesList = coursesList.map(group => ({
            ...group,
            courses: group.courses.map(course => ({
                ...course,
                toggle: course.name.toLowerCase().startsWith(searchText) || course.code.toLowerCase().startsWith(searchText)
            }))
        }))
    
        setCoursesList(updatedCoursesList)
    
        setDisplayGroups(updatedCoursesList.map(group => createGroup(group)))
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