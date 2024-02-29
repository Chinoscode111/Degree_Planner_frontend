import React from "react";
import PieChart from "../components/Home/PieChart";
import Navbar from "../components/shared/Navbar";

const Home = () => {
    const style = {
        backgroundColor : "blue"
    }
    return (
        <div className="home-cont">
            <Navbar page={0}/>
            <div className="home--top">
                <div className="home--left">
                    <p>96 units</p>
                    <PieChart />
                </div>
                <div className="home--right"></div>
            </div>
            <div className="home--bottom">
                <ul>
                    <li><span className="bold">Total undergraduate units earned : </span> 99</li>
                    <li><span className="bold">GPA : </span> 2.542</li>
                    <li><span className="bold">Academic standing : </span> Good as of spring 2024</li>
                </ul>
            </div>
            
            
            
        </div>
    )
}

export default Home