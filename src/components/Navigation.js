import React from 'react';
import { Link } from 'react-router-dom';

import "./Navigation.scss";

const Navigation = () => {

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-items">
                    <div className="nav-logo">
                        <Link to="/" className="logo">
                        My<span className="jobs">Jobs</span>
                        </Link>
                    </div>
                    <div className="nav-btn"> 
                    <Link className="auth authLink" to="/signin">
                    Login/Signup
                    </Link>
                    </div>
                </div>
                <hr className="line" />
            </div>
        </nav>
    );
};

export default Navigation;
