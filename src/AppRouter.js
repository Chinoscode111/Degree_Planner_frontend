import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DegreeProgress from "./pages/DegreeProgress";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRouter = () =>{
    return(
        <Router>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/progress" element={<DegreeProgress />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter