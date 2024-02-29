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
    
    // const baseStyle = {
    //     fontWeight: "normal"
    // }
    const styles = {
        0: {fontWeight : "bold"},
        1: {fontWeight : "normal"}
    }


    return(
        <div className="navbar">
            <Link to={"/"} style={styles[props.page === 0 ? 0 : 1]}>Home</Link>
            <Link to={"/progress"} style={styles[props.page === 1 ? 0 : 1]}>Degree Progress</Link>
        </div>
    )
}

export default Navbar