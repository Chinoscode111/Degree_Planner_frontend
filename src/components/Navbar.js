import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) =>{
    let navBarStyle1, navBarStyle2
    if(props.page == 0){
        navBarStyle1 = {
            fontWeight: "bold",
        }
        navBarStyle2 = {
            fontWeight: "normal"
        }
    }
    else if(props.page == 1){
        navBarStyle1 = {
            fontWeight: "normal",
        }
        navBarStyle2 = {
            fontWeight: "bold"
        }
    }
    return(
        <div className="navbar">
            <Link to={"/"} style={navBarStyle1}>Home</Link>
            <Link to={"/progress"}>Degree Progress</Link>
        </div>
    )
}

export default Navbar