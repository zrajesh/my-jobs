import React from 'react';
import { Link } from 'react-router-dom';
import recruiter from "../assets/recruitment.png";
import candidate from "../assets/candidate.png";

import "./SignUp.scss";

const SignUp = () => {
    return (
        <div className="signUp">
            <div className="signup-card">
                <h3 className="signup-title">Signup</h3>
                
                <div className="user-type">
                    <p>I'm a*</p>
                    <button className="recruitment-btn">
                    <img 
                    className="user-logo" 
                    src={recruiter} 
                    alt="recruiter" />
                    <span className="user-text">Recruiter</span>
                    </button>
                    <button className="candidate-btn">
                    <img 
                    className="user-logo" 
                    src={candidate} 
                    alt="candidate" />
                    <span className="user-text">Candidate</span>
                    </button>
                </div>

                <form className="signup-form">

                <div className="field">
                    <label className="label" for="name">
                    FullName*
                    </label>
                    <input
                     className="inputBox" 
                     type="text" 
                     id="name" 
                     placeholder="Enter your email"
                     required
                    />
                </div>

                <div className="field">
                    <label className="label" for="email">
                    Email address*
                    </label>
                    <input
                     className="inputBox" 
                     type="email" 
                     id="email" 
                     placeholder="Enter your email"
                     required
                    />
                </div>

                <div className="field password-wrap">

                    <div>
                    <label className="label" for="password">Create Password*</label>
                    <input
                     className="inputBox" 
                     type="password" 
                     id="password" 
                     placeholder="Enter your password"
                     required
                    />
                    </div>

                    <div>
                    <label className="label" for="cpassword">Confirm Password*</label>
                    <input
                     className="inputBox" 
                     type="password" 
                     id="cpassword" 
                     placeholder="Enter your password"
                     required
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label" for="skills">
                    Skills
                    </label>
                    <input
                     className="inputBox" 
                     type="text" 
                     id="skills" 
                     placeholder="Enter your comma separated skills"
                     required
                    />
                </div>

                <input
                 className="submit" 
                 type="submit" 
                 value="Signup" 
                />

                </form>

                <div className="info">
                    <span className="info-text">
                    Have an account? <Link 
                     className="create-account" 
                     to="/signin">
                    Login
                    </Link>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default SignUp;
