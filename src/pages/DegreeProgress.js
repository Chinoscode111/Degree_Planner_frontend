import React from "react";
import Navbar from "../components/shared/Navbar";
import LoadCourses from "../components/DegreeProgress/LoadCourses";
import SemesterCourses from "../components/DegreeProgress/SemesterCourses"
import "./degprogress.css"

const DegreeProgress = () => {
    return(
        <div>
            <Navbar page={1}/>
            <div className="degprog-cont" style={{display:"flex"}} >

            <LoadCourses />
            <SemesterCourses />
            </div>
        </div>
        
    )
}

export default DegreeProgress