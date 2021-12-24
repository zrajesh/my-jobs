import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recruiter from "../assets/recruitment.png";
import candidate from "../assets/candidate.png";
import { signup } from '../Auth/auth';

import "./SignUp.scss";

const SignUp = () => {
    const [values, setValues] = useState({
        "email": "",
        "password": "",
        "confirmPassword": "",
        "name": "",
        "skills": "",
        error: "",
        success: false
    });

    const {email, password, confirmPassword, name, skills, error, success} = values;
    
    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const onSubmitHandle = event => {
        event.preventDefault();
        setValues({
            ...values,
            error: false
        })
        signup({
            email: email,
            userRole: 0,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
            skills: skills
        })
        .then(data => {
            if (data.errors) {
                setValues({
                    ...values,
                    error: true,
                    success: false
                })
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    error: false,
                    success: true
                })
            }
        })
        .catch(err => console.log("SIGNUP ERR: ", err))
    }

    return (
        <div className="signUp">
            { /* Success message */ }
            <div 
             style={{display: success ? "block" : "none"}}
             className="message">
                <h3>Account created successfully. <br />
                Please <Link className="link" to="/signin">login here</Link>
                </h3>
            </div>
            { /* Error message */ }
            <div 
             style={{display: error ? "block" : "none"}}
             className="message">
                <h3>Error. Please enter all the fields correctly</h3>
            </div>

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

                <form
                 onSubmit={onSubmitHandle}
                 className="signup-form">

                <div className="field">
                    <label className="label" htmlFor="name">
                    FullName*
                    </label>
                    <input
                     className="inputBox" 
                     type="text" 
                     id="name" 
                     placeholder="Enter your email"
                     onChange={handleChange("name")}
                     value={name}
                     required
                    />
                </div>

                <div className="field">
                    <label className="label" htmlFor="email">
                    Email address*
                    </label>
                    <input
                     className="inputBox" 
                     type="email" 
                     id="email" 
                     placeholder="Enter your email"
                     onChange={handleChange("email")}
                     value={email}
                     required
                    />
                </div>

                <div className="field password-wrap">

                    <div>
                    <label className="label" htmlFor="password">Create Password*</label>
                    <input
                     className="inputBox" 
                     type="password" 
                     id="password" 
                     placeholder="Enter your password"
                     onChange={handleChange("password")}
                     value={password}
                     required
                    />
                    </div>

                    <div>
                    <label className="label" htmlFor="confirmPassword">Confirm Password*</label>
                    <input
                     className="inputBox" 
                     type="password" 
                     id="confirmPassword" 
                     placeholder="Enter your password"
                     onChange={handleChange("confirmPassword")}
                     value={confirmPassword}
                     required
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="skills">
                    Skills
                    </label>
                    <input
                     className="inputBox" 
                     type="text" 
                     id="skills" 
                     placeholder="Enter your comma separated skills"
                     onChange={handleChange("skills")}
                     value={skills}
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
