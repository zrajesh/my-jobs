import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, signout } from '../Auth/auth';

import "./Navigation.scss";

const Navigation = () => {
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    const logOutUser = () => {
        setIsAuth(!isAuthenticated())
        signout(() => {
            console.log("Logging out...");
        })
    }

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-items">
                    <div className="nav-logo">
                        <Link to="/" className="logo">
                        My<span className="jobs">Jobs</span>
                        </Link>
                    </div>
                    {
                        isAuth ? 
                        <div
                         onClick={logOutUser}
                         className="nav-btn"> 
                            <Link className="auth authLink" to="/">
                            Logout
                            </Link>
                        </div>
                        : 
                        <div className="nav-btn"> 
                            <Link className="auth authLink" to="/signin">
                            Login/Signup
                            </Link>
                        </div>
                    }
                </div>
                <hr className="line" />
            </div>
        </nav>
    );
};

export default Navigation;
