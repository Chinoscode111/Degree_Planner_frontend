import React from "react";
import Navbar from "../components/shared/Navbar";
import LoadCourses from "../components/DegreeProgress/LoadCourses";
import CourseManager from "../components/DegreeProgress/CourseManager";

const DegreeProgress = () => {
    return(
        <div>
            <Navbar page={1}/>
            <div className="degree-progress-cont">
                <LoadCourses />
                <CourseManager />
            </div>
            
        </div>
        
    )
}

export default DegreeProgress