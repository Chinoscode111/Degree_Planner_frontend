import React from "react";
import PieChart from "../components/Home/PieChart";
import Navbar from "../components/shared/Navbar";
import Progress_Bar from "../components/Home/Progress_Bar";

const Home = () => {
    const style = {
        backgroundColor : "blue"
    }

    const rightStyle = {
        
        width:"90%",
        height:"30vh",
        backgroundColor : "blanchedalmond",
    }
    return (
        <div className="home-cont">
            <Navbar page={0}/>
            <div className="home--top">
                <div className="home--left">
                    <p>96 units</p>
                    <PieChart />
                </div>
                <div className="home--right" style={rightStyle}>
                    <h2>Units per course type</h2>
                    <p>Required units</p>

                    <Progress_Bar name = "Core" credits = {36} />
                    <Progress_Bar name = "Major" credits = {42} />
                    <Progress_Bar name = "Liberal arts" credits = {45} />
                    <Progress_Bar name = "Elective" credits = {9} />
                </div>
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