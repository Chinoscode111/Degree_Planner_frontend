import React from "react";
import Navbar from "../components/shared/Navbar";
import LoadCourses from "../components/DegreeProgress/LoadCourses";

const DegreeProgress = () => {
    return(
        <div>
            <Navbar page={1}/>
            <LoadCourses />
        </div>
        
    )
}

export default DegreeProgress