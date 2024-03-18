import React from "react";
import { useState } from "react";
import { MdLock } from "react-icons/md";
import { GoPerson } from "react-icons/go";
// import usePasswordToggle from "../components/ShowPassword/usePasswordToggle";

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
        <GoPerson />
            <input id="first" type="text" placeholder="Roll No." background-image="./Group.jpg" />
        </div>
        <div ps>
        <MdLock />
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
          <p>Log in</p>
        </div>

        <div className="acc">
          <a href="/Register">Create account</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
