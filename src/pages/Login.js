import React from "react";
import { useState } from "react";
// import usePasswordToggle from "../components/ShowPassword/usePasswordToggle";
import { Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register"

function LoginForm() {
    // const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <div className="Welcome">
      <div className="create">
        <div className="increate">
          <p>Welcome Back</p>
        </div>
      </div>

      <div className="cover">
        <div rno>
            <svg width="15" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11C11.7614 11 14 8.76142 14 6C14 3.23858 11.7614 1 9 1C6.23858 1 4 3.23858 4 6C4 8.76142 6.23858 11 9 11Z" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 19C17 16.8783 16.1571 14.8434 14.6569 13.3431C13.1566 11.8429 11.1217 11 9 11C6.87827 11 4.84344 11.8429 3.34315 13.3431C1.84285 14.8434 1 16.8783 1 19" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <input id="first" type="text" placeholder="Roll No." background-image="./Group.jpg" />
        </div>
        <div ps>
            <svg width="14" height="24" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 8.46957 0.210714 7.96086 0.585786 7.58579C0.960859 7.21071 1.46957 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z" fill="#4B4B4B"/>
</svg>
            <input id="second" type="password" placeholder="Password" background-image="./mdi_password.png"/>
            {/* <span className="password-toogle-icon">{ToggleIcon}</span> */}
        </div>

        <div className="centerline">
          <div>
            <input id="third" type="checkbox" />
            <label for="third">Remember me</label>
          </div>
          <a>Forgot Password?</a>
        </div>

        <div className="log">
          <Link to={"/home"} element={<Home />}><p>Log in</p> </Link>
        </div>

        <div className="acc">
        <Link to={"/register"} element={<Register />}><p>Register</p> </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
