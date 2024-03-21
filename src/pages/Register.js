import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import "../../src/components/shared/login.css";

import { MdLock } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { PiDotsNineBold } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";

const RegisterForm = () => {
  return (
    <div className="Whole">
      <div className="createacc">
        <div className="increateacc">
          <p>Create Account</p>
        </div>
      </div>

      <div className="cover2">
        <div>
          <GoPerson />
          <input id="roll" type="text" placeholder="Roll No." />
        </div>

        <div>
          <MdLock />
          <input id="pass" type="password" placeholder="Password" />
        </div>

        <div>
          <MdLock />
          <input id="conpass" type="password" placeholder="Confirm Password" />
        </div>

        <div>
          <PiDotsNineBold />
          <input id="dept" type="text" placeholder="Department" />
        </div>

        <div>
          <LuGraduationCap />
          <input id="degree" type="text" placeholder="Degree" />
        </div>
        <div className="SignUp">
          <Link to={"/home"} element={<Home />}>
            <p>Sign up</p>{" "}
          </Link>
        </div>

        <div className="already">
          <p>Already have an account? </p>
          <Link to={"/"} element={<Login />}>
            <b>Login</b>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
