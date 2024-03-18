import React, { useContext } from "react"
import CreateLabel, { ItemTypes } from "./CreateLabel"
import { useDrop } from "react-dnd"
import { Context } from "../../App"
import { useEffect } from "react"
import searchIcon from "./images/search.svg"

const LoadCourses = () =>{

    const {courseData, setCourseData} = useContext(Context);

    const courses = courseData;
    courses.sort((a, b) => a.code.localeCompare(b.code));
    console.log("coursesData", courseData);


    const [coursesList, setCoursesList] = React.useState(courses.map(course => (
        {...course, toggle: true}
    )))
    // console.log("courses list", coursesList);

        



    const [checkYear, setCheckYear] = React.useState({
        "1": false,
        "2": false,
        "3": false,
        "4": false
    })

    
    function handleCheckYear(event){
        const {name, checked} = event.target
        console.log(checked)

        setCheckYear(prevCheckYear => (
            {...prevCheckYear,
            [name]: checked
            }
        ))
    }

    function clearCheckYear(){
        setCheckYear({
            "1": false,
            "2": false,
            "3": false,
            "4": false
        })
    }

    const [checkTag, setCheckTag] = React.useState({
        "core": false,
        "elective": false,
        "minor": false,
    })

    
    function handleCheckTag(event){
        const {name, checked} = event.target
        console.log(checked)

        setCheckTag(prevCheckTag => (
            {...prevCheckTag,
            [name]: checked
            }
        ))
    }

    function clearCheckTag(){
        setCheckTag({
            "core": false,
            "elective": false,
            "minor": false,
        })
    }














    const [checkSemester, setCheckSemester] = React.useState({
        "spring": false,
        "autumn": false
    })
    
    function handleCheckSemester(event) {
        const { value } = event.target;
        console.log("value", value)

        if(value == "spring"){
            setCheckSemester({
                "spring": true,
                "autumn": false
            })
        }
        else if(value == "autumn"){
            setCheckSemester({
                "spring": false,
                "autumn": true
            })
        }
    }

    function clearCheckSemester(){
        setCheckSemester({
            "spring": false,
            "autumn": false
        })
    }


    const [checkCredits, setCheckCredits] = React.useState({
        "3": false,
        "6": false,
        "8": false
    })

    function handleCheckCredits(event) {
        const { value } = event.target;
        
        if(value == "3"){
            setCheckCredits({
                "3": true,
                "6": false,
                "8": false
            })
        }
        else if(value == "6"){
            setCheckCredits({
                "3": false,
                "6": true,
                "8": false
            })
        }
        else if(value == "8"){
            setCheckCredits({
                "3": false,
                "6": false,
                "8": true
            })
        }
    }



    function clearCheckCredits(){
        setCheckCredits({
                "3": false,
                "6": false,
                "8": false
        })
    }
    

    const [searchText, setSearchText] = React.useState("")



    function handleChange(event) {
        setSearchText(event.target.value.toLowerCase())
        console.log("searchText", searchText);
    }


    React.useEffect( () => {

        var newCourseList = coursesList

        // console.log(checkTag)
        for (const tag in checkTag){
            const name = tag
            const checked = checkTag[tag]
            // console.log("checked", checked)


            const updatedCoursesList = newCourseList.map(course => ({
                ...course,
                toggle: checked ? course.tag.includes(name) : true
            }))
            newCourseList = updatedCoursesList.filter(course => course.toggle)
        }





        // console.log(checkYear)
        for (var i = 1; i<=4; i++){
            const year = i.toString()
            const name = year
            const checked = checkYear[year]
            // console.log("checked", checked)


            const updatedCoursesList = newCourseList.map(course => ({
                ...course,
                toggle: checked ? course.year.includes(parseInt(name)) : true
            }))
            newCourseList = updatedCoursesList.filter(course => course.toggle)

        }


        for (const semester in checkSemester){
            console.log("semester", semester)
            const name = semester
            const checked = checkSemester[semester]
            console.log("checked", checked)


            const updatedCoursesList = newCourseList.map(course => ({
                ...course,
                toggle: checked ? course.semester == name : true
            }))
            newCourseList = updatedCoursesList.filter(course => course.toggle)
        }


        for (const credits in checkCredits){
            const name = credits
            const checked = checkCredits[credits]
            console.log("checked", checked)


            const updatedCoursesList = newCourseList.map(course => ({
                ...course,
                toggle: checked ? course.credits == parseFloat(name) : true
            }))
            newCourseList = updatedCoursesList.filter(course => course.toggle)
        }

        console.log(searchText)
        const updatedCoursesList = newCourseList.map(course => ({
            ...course,
            toggle: course.title.toLowerCase().includes(searchText) || course.code.toLowerCase().includes(searchText)
        }))
        
    
        newCourseList = updatedCoursesList.filter(course => course.toggle)

        setCourseData(newCourseList)

    }, [checkTag, checkYear, checkSemester, checkCredits, searchText])









    const [, dropCourse] = useDrop(
        () => ({
            accept: ItemTypes.COURSES,
            drop: (item, monitor) => {
              console.log("course dropped");



            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
         // Add fallSem as a dependency
    );

    

    return (
        <div className="load-courses-cont">
            <div className="search-bar">
                <img src={searchIcon} alt="" />
                <input 
                    type="text"
                    placeholder="Enter course"
                    onChange={handleChange}
                ></input>
            </div>
            


            <div className="filter">
                <div className="filter-title">
                    <p>Semester</p>
                    <button onClick={clearCheckSemester}>&#10060;</button>
                </div>
                <div className="filter-elements">
                    <p>spring</p>
                    <input
                        name="semester"
                        type="radio" 
                        value="spring" 
                        checked={checkSemester.spring}
                        onChange={handleCheckSemester}
                        className="filter-element"
                    ></input>
                    <p>autumn</p>
                    <input
                        name="semester"
                        type="radio" 
                        value="autumn"   
                        checked={checkSemester.autumn}
                        onChange={handleCheckSemester}
                        className="filter-element"
                    ></input>
                </div>
            </div>
            


            <div className="filter">
                <div className="filter-title">
                    <p>Year</p>
                    <button onClick={clearCheckYear}>&#10060;</button>
                </div>
                <div className="filter-elements">
                    <p>1</p>
                    <input
                        name="1"
                        type="checkbox" 
                        checked={checkYear["1"]}   
                        onChange={handleCheckYear}
                        className="filter-element"
                    ></input>
                    <p>2</p>
                    <input
                        name="2"
                        type="checkbox" 
                        checked={checkYear["2"]}   
                        onChange={handleCheckYear}
                        className="filter-element"
                    ></input>
                    <p>3</p>
                    <input
                        name="3"
                        type="checkbox" 
                        checked={checkYear["3"]}   
                        onChange={handleCheckYear}
                        className="filter-element"
                    ></input>
                    <p>4</p>
                    <input
                        name="4"
                        type="checkbox" 
                        checked={checkYear["4"]}   
                        onChange={handleCheckYear}
                        className="filter-element"
                    ></input>
                </div>
            </div>


            <div className="filter">
                <div className="filter-title">
                    <p>Tag</p>
                    <button onClick={clearCheckTag}>&#10060;</button>
                </div>
                <div className="filter-elements">
                    <p>core</p>
                    <input
                        name="core"
                        type="checkbox" 
                        checked={checkTag.core}   
                        onChange={handleCheckTag}
                        className="filter-element"
                    ></input>
                    <p>elective</p>
                    <input
                        name="elective"
                        type="checkbox" 
                        checked={checkTag.elective}   
                        onChange={handleCheckTag}
                        className="filter-element"
                    ></input>
                    <p>minor</p>
                    <input
                        name="minor"
                        type="checkbox" 
                        checked={checkTag.minor}   
                        onChange={handleCheckTag}
                        className="filter-element"
                    ></input>
                    </div>
            </div>

            <div className="filter">
                <div className="filter-title">
                    <p>Credits</p>
                    <button onClick={clearCheckCredits}>&#10060;</button>
                </div>
                <div className="filter-elements">
                    <p>3</p>
                    <input
                        name="credits"
                        type="radio" 
                        value="3"  
                        checked={checkCredits["3"]}
                        onChange={handleCheckCredits}
                        className="filter-element"
                    ></input>
                    <p>6</p>
                    <input
                        name="credits"
                        type="radio" 
                        value="6"
                        checked={checkCredits["6"]}
                        onChange={handleCheckCredits}
                        className="filter-element"
                    ></input>
                    <p>8</p>
                    <input
                        name="credits"
                        type="radio" 
                        value="8" 
                        checked={checkCredits["8"]}
                        onChange={handleCheckCredits}
                        className="filter-element"
                    ></input>
                </div>
            </div>

            <div className="course-cont" ref={dropCourse}>

            {
                //cant use useEffect because it cant return anything other than a funcion
                
                courseData.map(course => (
                    <CreateLabel course={course} key={course.code} />
                ))
            }
            </div>
        </div>
        
    )
}

export default LoadCourses