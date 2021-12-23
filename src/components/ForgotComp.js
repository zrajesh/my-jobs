import React from 'react';

import "./ForgotComp.scss";

const ForgotComp = () => {
    return (
        <div className="forgot">
            <div className="forgot-card">
                <h3 className="forgot-title">Forgot your password?</h3>
                <p className="message">
                Enter the email associated with your account and we’ll send you instructions to reset your password.
                </p>
                <form className="forgot-form">
                <div className="field">
                    <label className="label" for="email">Email address</label>
                    <input
                     className="inputBox" 
                     type="email" 
                     id="email" 
                     placeholder="Enter your email"
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
