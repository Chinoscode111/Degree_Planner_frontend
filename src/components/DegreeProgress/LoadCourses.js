import React from "react"
import data from "../../data.json"

const LoadCourses = () =>{

    const courses = data

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


    const [displayCourses, setDisplayCourses] = React.useState(coursesList.map(course => (
        createLabel(course)
    )))



    function handleChange(event) {
        const searchText = event.target.value.toLowerCase();
    
        const updatedCoursesList = coursesList.map(course => ({
                ...course,
                toggle: course.title.toLowerCase().includes(searchText) || course.code.toLowerCase().includes(searchText)
            }))
        
    
        setCoursesList(updatedCoursesList)
    
        const filteredCourses = updatedCoursesList.filter(course => course.toggle);
        setDisplayCourses(filteredCourses.map(course =>
            createLabel(course)
        ))
    }






    const [checkSemester, setCheckSemester] = React.useState({
        autumn: false,
        spring: false
    })

    
    function handleCheckSemester(event){
        const {name, checked} = event.target

        if(checked){

            setCheckSemester(prevCheckSemester => (
                {...prevCheckSemester,
                [name]: !prevCheckSemester[name]}
            ))
            
            const updatedCoursesList = coursesList.map(course => ({
                ...course,
                toggle: course.semester == name 
            }))
            const filteredCourses = updatedCoursesList.filter(course => course.toggle)
            setDisplayCourses(filteredCourses.map(course =>
                createLabel(course)
            ))

        }

        else{
            setCheckSemester(prevCheckSemester => ({
                ...prevCheckSemester,
                [name]: false
            }))

            setDisplayCourses(coursesList.map(course =>
                createLabel(course)
            ))
        }   
    }


    




    const [checkYear, setCheckYear] = React.useState({
        "1": false,
        "2": false,
        "3": false,
        "4": false
    })

    
    function handleCheckYear(event){
        const {name, checked} = event.target


        // for (var i = 1; i<=4; i++){
        //     const year = i.toString()
        //     const name = year
        //     const checked = checkYear.year
        //     console.log("checked", checked)

        // }

        if(checked){

            setCheckYear(prevCheckYear => (
                {...prevCheckYear,
                [name]: !prevCheckYear[name]}
            ))
            
            const updatedCoursesList = coursesList.map(course => ({
                ...course,
                toggle: checked ? course.year.includes(parseInt(name)) : true
            }))
            const filteredCourses = updatedCoursesList.filter(course => course.toggle)
            setDisplayCourses(filteredCourses.map(course =>
                createLabel(course)
            ))

        }

        else{
            setCheckYear(prevCheckYear => ({
                ...prevCheckYear,
                [name]: false
            }))

            setDisplayCourses(coursesList.map(course =>
                createLabel(course)
            ))
        }   
    }

    return (
        <div className="load-courses-cont">
            <h1>load courses</h1>
            <input 
                type="text"
                placeholder="Enter course"
                onChange={handleChange}
            ></input>
            <p>spring</p>
            <input
                name="spring"
                type="checkbox" 
                checked={checkSemester.spring}   
                onChange={handleCheckSemester}
            ></input>
            <p>autumn</p>
            <input
                name="autumn"
                type="checkbox" 
                checked={checkSemester.autumn}   
                onChange={handleCheckSemester}
            ></input>




            <p>1</p>
            <input
                name="1"
                type="checkbox" 
                checked={checkYear["1"]}   
                onChange={handleCheckYear}
            ></input>
            <p>2</p>
            <input
                name="2"
                type="checkbox" 
                checked={checkYear["2"]}   
                onChange={handleCheckYear}
            ></input>
            <p>3</p>
            <input
                name="3"
                type="checkbox" 
                checked={checkYear["3"]}   
                onChange={handleCheckYear}
            ></input>
            <p>4</p>
            <input
                name="4"
                type="checkbox" 
                checked={checkYear["4"]}   
                onChange={handleCheckYear}
            ></input>

            {displayCourses}
        </div>
        
    )
}

export default LoadCourses