import React from "react";
import { useState } from "react";
// import usePasswordToggle from "../components/ShowPassword/usePasswordToggle";
import { Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import { MdLock } from "react-icons/md";
import { GoPerson } from "react-icons/go";

import "../../src/login.css";

function LoginForm() {
  // const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <div className="Welcome">
      <div className="create">
        <div className="increate">
          <p>Welcome Back</p>
        </div>
      </div>
      <form>
        <div className="cover">
          <div rno>
            <GoPerson />
            <input
              id="first"
              required
              type="text"
              placeholder="Roll No."
              background-image="./Group.jpg"
            />
          </div>
          <div ps>
            <MdLock />
            <input
              id="second"
              required
              type="password"
              placeholder="Password"
              background-image="./mdi_password.png"
            />
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
            <Link to={"/register"} element={<Register />}>
              <p>Register</p>{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
