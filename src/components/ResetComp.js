import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authenticate, resetPassword } from '../Auth/auth';

import "./ResetComp.scss";

const ResetComp = () => {
    let navigate = useNavigate();

    const [values, setValues] = useState({
        "password": "",
        "confirmPassword": "",
        "token": "",
        error: "",
        redirect: false
    });

    const {password, confirmPassword, error, token} = values;

    const handleChange = name => event => {
        setValues({
            ...values,
            token: localStorage.getItem("resetToken"),
            error: false,
            [name]: event.target.value
        })
    }

    const doRedirect = () => {
        return navigate("/signin");
    }

    const onSubmitHandle = event => {
        event.preventDefault();
        setValues({
            ...values,
            error: false
        })
        resetPassword({
            password: password,
            confirmPassword: confirmPassword,
            token: token
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
                        error: false,
                        redirect: true
                    })
                    /* Redirecting user to reset form */ 
                    doRedirect()
                })
            }
        })
        .catch(err => console.log("SIGNIN ERR: ", err))
    }
    return (
        <div className="reset">
        { /* Error message */ }
        <div 
         style={{display: error ? "block" : "none"}}
         className="message">
            <h3>Unable to reset.</h3>
        </div>

        <div className="reset-card">
            <h3 className="reset-title">Reset your password</h3>
            <form
             onSubmit={onSubmitHandle}
             className="reset-form">
            <div className="field">
            <label className="label" htmlFor="password">New Password</label>
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

            <div className="field">
                <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                <input
                 className="inputBox" 
                 type="password" 
                 id="confirmPassword" 
                 placeholder="Enter your password"
                 name='password'
                 value={confirmPassword}
                 onChange={handleChange("confirmPassword")}
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

export default ResetComp;

