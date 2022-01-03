import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin, authenticate } from '../Auth/auth';

import "./SignIn.scss";

const SignIn = () => {
    let navigate = useNavigate();

    const [values, setValues] = useState({
        "email": "",
        "password": "",
        error: "",
        redirect: false
    });

    const {email, password, error} = values;

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const doRedirect = () => {
        return navigate("/portal");
    }

    const onSubmitHandle = event => {
        event.preventDefault();
        setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            error: false,
            redirect: false
        })
        signin({
            email: email,
            password: password
        })
        .then(data => {
            if (data.errors) {
                setValues({
                    ...values,
                    error: true,
                })
            } 
            else if (data.success === false) {
                setValues({
                    ...values,
                    error: true
                })
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        error: false,
                        redirect: true
                    })
                    /* Redirecting user to dashboard */ 
                    doRedirect()
                })
            }
        })
        .catch(err => console.log("SIGNIN ERR: ", err))
    }

    return (
        <div className="signIn">
            { /* Error message */ }
            <div 
             style={{display: error ? "block" : "none"}}
             className="message">
                <h3>Incorrect Email or Password.</h3>
            </div>

            <div className="signin-card">
                <h3 className="signin-title">Login</h3>
                <form
                 onSubmit={onSubmitHandle}
                 className="signin-form">
                <div className="field">
                    <label className="label" htmlFor="email">Email address</label>
                    <input
                     className="inputBox" 
                     type="email" 
                     id="email" 
                     placeholder="Enter your email"
                     name='email'
                     value={email}
                     onChange={handleChange("email")}
                     required
                    />
                </div>

                <div>
                <Link className="reset-forgot" to="/reset">Forgot your password?</Link>
                </div>

                <div className="field">
                    <label className="label" htmlFor="password">Password</label>
                    <input
                     className="inputBox" 
                     type="password" 
                     id="password" 
                     placeholder="Enter your password"
                     name='password'
                     value={password}
                     onChange={handleChange("password")}
                     required
                    />
                </div>
                <input
                 className="submit" 
                 type="submit" 
                 value="Login" 
                />
                </form>
                <div className="info">
                    <span className="info-text">
                    New to MyJobs? <Link 
                     className="create-account" 
                     to="/signup">
                    Create an account
                    </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
