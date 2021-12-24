import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin, authenticate, isAuthenticated, getToken } from '../Auth/auth';

import "./ForgotComp.scss";

const ForgotComp = () => {
    let navigate = useNavigate();

    const [values, setValues] = useState({
        "email": "",
        error: "",
        redirect: false
    });

    const {email, error, redirect} = values;
    const {user} = isAuthenticated;

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const doRedirect = () => {
        return navigate("/resetpassword");
    }

    const onSubmitHandle = event => {
        event.preventDefault();
        setValues({
            ...values,
            error: false
        })
        getToken({
            email: email
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
                        
                        email: "",
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
        <div className="forgot">
            { /* Error message */ }
            <div 
             style={{display: error ? "block" : "none"}}
             className="message">
                <h3>Incorrect Email.</h3>
            </div>

            <div className="forgot-card">
                <h3 className="forgot-title">Forgot your password?</h3>
                <p className="message">
                Enter the email associated with your account and we’ll send you instructions to reset your password.
                </p>
                <form
                 onSubmit={onSubmitHandle}
                 className="forgot-form">
                <div className="field">
                    <label className="label" htmlFor="email">Email address</label>
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

                <input
                 className="submit" 
                 type="submit" 
                 value="Submit"
                />
                </form>

            </div>
        </div>
    );
};

export default ForgotComp;
