import React from "react";
import Navbar from "../components/shared/Navbar";
import LoadCourses from "../components/DegreeProgress/LoadCourses";
import SemesterCourses from "../components/DegreeProgress/SemesterCourses";
import "../components/DegreeProgress/degreeprogress.css"
import Year from "../components/DegreeProgress/Year";

const DegreeProgress = () => {
    return(
        <div className="cont">
            <Navbar page={1}/>
            <div className="degprog-cont" style={{display:"flex"}} >

            <LoadCourses />
            <SemesterCourses />
            
            </div>
            
        </div>
        
    )
}

export default DegreeProgress