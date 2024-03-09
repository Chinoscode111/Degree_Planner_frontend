import React from "react";

function LoginForm() {
  return (
    <div className="Welcome">
      <div className="create">
        <div className="increate">
          <p>Welcome Back</p>
        </div>
      </div>

      <div className="cover">
        <div rno>
            {/* <img src={require("./Group.jpg")} alt=""></img> */}
            <input id="first" type="text" placeholder="Roll No." background-image="./Group.jpg" />
            {/* <img src={require("./Group.jpg")} alt=""></img> */}
        </div>
        <div ps>
            {/* <img src={require("./mdi_password.png")}></img> */}
            <input id="second" type="password" placeholder="Password" background-image="./mdi_password.png"/>
            {/* <img src={require("./mdi_password.png")}></img> */}
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
