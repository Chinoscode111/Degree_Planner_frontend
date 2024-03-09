import React from "react";

const RegisterForm = () => {
    return (
        <div className="Whole">
            <div className="createacc">
                <div className="increateacc">
                    <p>Create Account</p>
                </div>
            </div>

            <div className="cover2">
                <input id='roll' type = "text" placeholder = "Roll No." />
                <input id='pass' type = "password" placeholder = "Password" />
                <input id='conpass' type = "password" placeholder = "Confirm Password" />

                <div className="SignUp">
                    <p>Sign up</p>
                </div>

                <div className="already">
                    <p>Already have an account? </p>
                    <a href="/Login"><b>Login here</b></a>
                </div>

            </div>
        </div>
    )
}

export default RegisterForm