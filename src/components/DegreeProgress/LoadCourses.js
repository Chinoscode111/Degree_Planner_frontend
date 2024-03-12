import React from "react"
import data from "../../data.json"
import CreateLabel from "./CreateLabel"

const LoadCourses = () =>{

    const courses = data

    const [coursesList, setCoursesList] = React.useState(courses.map(course => (
        {...course, toggle: true}
    )))
    console.log("courses list", coursesList);


    function createLabel(dict){
        console.log("creating label")
        return(
            <CreateLabel course={dict}/>
        )
    }



    const [displayCourses, setDisplayCourses] = React.useState(coursesList.map(course => (
        createLabel(course)
    )))



    function handleChange(event) {
        const searchText = event.target.value.toLowerCase();
        console.log("searchText", searchText);
    
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







    const [selectedSemester, setSelctedSemester] = React.useState(null)
    
    function handleCheckSemester(event) {
        const { value } = event.target;
        setSelctedSemester(value)
        const filteredCourses = courses.filter(
            course => course.semester == value
        )
        setDisplayCourses(filteredCourses.map(course => createLabel(course)));
    }

    function clearCheckSemester(){
        setSelctedSemester(null)
        setDisplayCourses(courses.map(course => createLabel(course)));
    }

    




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






    React.useEffect( () => {

        var newCourseList = coursesList

        console.log(checkTag)
        for (const tag in checkTag){
            const name = tag
            const checked = checkTag[tag]
            console.log("checked", checked)


            const updatedCoursesList = newCourseList.map(course => ({
                ...course,
                toggle: checked ? course.tag.includes(name) : true
            }))
            newCourseList = updatedCoursesList.filter(course => course.toggle)
        }





        console.log(checkYear)
        for (var i = 1; i<=4; i++){
            const year = i.toString()
            const name = year
            const checked = checkYear[year]
            console.log("checked", checked)


            const updatedCoursesList = newCourseList.map(course => ({
                ...course,
                toggle: checked ? course.year.includes(parseInt(name)) : true
            }))
            newCourseList = updatedCoursesList.filter(course => course.toggle)

        }
        setDisplayCourses(newCourseList.map(course => (
            createLabel(course)
        )))

    }, [checkTag, checkYear])







    const [selectedCredits, setSelectedCredits] = React.useState(null);

    function handleCheckCredits(event) {
        const { value } = event.target;
        setSelectedCredits(value)
        const filteredCourses = courses.filter(
            course => course.credits == value
        )
        setDisplayCourses(filteredCourses.map(course => createLabel(course)));
    }



    function clearCheckCredits(){
        setSelectedCredits(null)
        setDisplayCourses(courses.map(course => createLabel(course)))
    }

    

    return (
        <div className="load-courses-cont">
            <h1>load courses</h1>
            <input 
                type="text"
                placeholder="Enter course"
                onChange={handleChange}
            ></input>


<           button onClick={clearCheckSemester}>Clear credits</button>
            <p>spring</p>
            <input
                name="semester"
                type="radio" 
                value="spring" 
                checked={selectedSemester == "spring"}
                onChange={handleCheckSemester}
            ></input>
            <p>autumn</p>
            <input
                name="semester"
                type="radio" 
                value="autumn"   
                checked={selectedSemester == "autumn"}
                onChange={handleCheckSemester}
            ></input>



            <button onClick={clearCheckYear}>Clear year</button>
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




            <button onClick={clearCheckTag}>Clear tag</button>
            <p>core</p>
            <input
                name="core"
                type="checkbox" 
                checked={checkTag.core}   
                onChange={handleCheckTag}
            ></input>
            <p>elective</p>
            <input
                name="elective"
                type="checkbox" 
                checked={checkTag.elective}   
                onChange={handleCheckTag}
            ></input>
            <p>minor</p>
            <input
                name="minor"
                type="checkbox" 
                checked={checkTag.minor}   
                onChange={handleCheckTag}
            ></input>

            
            <button onClick={clearCheckCredits}>Clear credits</button>
            <p>3</p>
            <input
                name="credits"
                type="radio" 
                value="3"  
                checked={selectedCredits == "3"}
                onChange={handleCheckCredits}
            ></input>
            <p>6</p>
            <input
                name="credits"
                type="radio" 
                value="6"
                checked={selectedCredits == "6"}
                onChange={handleCheckCredits}
            ></input>
            <p>8</p>
            <input
                name="credits"
                type="radio" 
                value="8" 
                checked={selectedCredits == "8"}
                onChange={handleCheckCredits}
            ></input>

            

            {displayCourses}
        </div>
        
    )
}

export default LoadCourses