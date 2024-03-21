import React from "react";
import { useState } from "react";
// import usePasswordToggle from "../components/ShowPassword/usePasswordToggle";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import { MdLock } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import "../login.css";
import axios from "axios";

function LoginForm() {
  // const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");

  const navigate  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    // axios.post("http://localhost:8000/login", {
    //   rollnum: roll,
    //   password: password,
    // }).then((response) => {
    //   console.log(response);
    //   console.log(response.data);
    //   if(response.data === "Success"){
    //     navigate("/home");
    //   }
    //   else{
    //     alert("Invalid Credentials");
    //   }
    // }
    // );

    navigate("/home");


  }

  console.log(roll, password);


  return (
    <div className="Welcome">
      <div className="create">
        <div className="increate">
          <p>Welcome Back</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="cover">
          <div >
            <GoPerson />
            <input
              id="first"
              required
              type="text"
              placeholder="Roll No."
              background-image="./Group.jpg"
              
              onChange={(e) => { setRoll(e.target.value) }}

            />
          </div>
          <div>
            <MdLock />
            <input
              id="second"
              required
              type="password"
              placeholder="Password"
              background-image="./mdi_password.png"
              onChange={(e) => { setPassword(e.target.value) }}
            />
            {/* <span className="password-toogle-icon">{ToggleIcon}</span> */}
          </div>

          

          {/* <div className="log"> */}
            <input type="submit" className="log"  value={ "Log In" } />
          {/* </div> */}

          <div className="acc">
          <p>Don't have an account? </p>
            <Link to={"/register"} element={<Register />}>
              <b>Sign up</b>{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
