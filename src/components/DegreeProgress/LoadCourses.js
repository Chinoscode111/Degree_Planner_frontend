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
        },
        {
            group: "CS",
            courses: [{
                name: "Introduction to computer science",
                code: "CS101",
                group: "CS"
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
            <button className="load-courses-group" onClick={() => (toggle(group))}> 
            {group.group} {group.courses.some(course => course.toggle? String.fromCharCode(0x2713) : String.fromCharCode(0x2713))}
            </button>
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
                toggle: course.name.toLowerCase().includes(searchText) || course.code.toLowerCase().includes(searchText)
            }))
        }))
    
        setCoursesList(updatedCoursesList)
    
        setDisplayGroups(updatedCoursesList.map(group => createGroup(group)))
    }












    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var element = document.getElementById(data);
        if (element instanceof Node) {
            ev.target.appendChild(element);
        } else {
            console.error("Element not found or is not a valid Node:", data, element);
        }
        console.log("data", data)
        console.log("element", element)
    }
    


    function dragElement(course){
        console.log("course", course)
        return(
            createLabel(course)
        )

    }


    return (
        <div className="load-courses-cont">
            <div className="courses-cont" id="drop-1" onDrop={drop} onDragOver={allowDrop}>
            {/* <div> */}
                <input 
                    type="text"
                    placeholder="Enter course"
                    onChange={handleChange}
                ></input>
                {displayGroups}
            </div>
            

            <div>
                <h2>Fall semester</h2>
                <div onDrop={drop} onDragOver={allowDrop} id="drop-here"><p>drop</p></div>
                <div draggable="true" onDragStart={drag} id="drop">{dragElement(courses[0].courses[0])}</div>
                <div onDrop={drop} onDragOver={allowDrop} id="drop-here-2"><p>drop-2</p></div>
            </div>
        </div>
        
    )
}

export default LoadCourses