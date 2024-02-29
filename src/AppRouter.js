import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DegreeProgress from "./pages/DegreeProgress";

const AppRouter = () =>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/progress" element={<DegreeProgress />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter