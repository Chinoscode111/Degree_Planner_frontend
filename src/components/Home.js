import React from "react";
import PieChart from "./PieChart";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="home-cont">
            <Navbar />
            <PieChart />
        </div>
    )
}

export default Home