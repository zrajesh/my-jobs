import React from 'react';
import { Link } from 'react-router-dom';

import "./SignIn.scss";

const SignIn = () => {
    return (
        <div className="signIn">
            <div className="signin-card">
                <h3 className="signin-title">Login</h3>
                <form className="signin-form">
                <div className="field">
                    <label className="label" for="email">Email address</label>
                    <input
                     className="inputBox" 
                     type="email" 
                     id="email" 
                     placeholder="Enter your email"
                    />
                </div>
                <p>
                    <Link className="forgot" to="/reset">
                    Forgot your password?
                    </Link>
                </p>
                <div className="field">
                    <label className="label" for="password">Password</label>
                    <input
                     className="inputBox" 
                     type="password" 
                     id="password" 
                     placeholder="Enter your password"
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
