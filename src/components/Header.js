import React from 'react';
import Navigation from './Navigation';
import employee from "../assets/employee.png";
import { useNavigate } from 'react-router-dom';

import "./Header.scss";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <Navigation />
            <div className="header-content">
                <div className="header-text">
                    <h1 className="title">
                    Welcome to <br />
                    My<span className="title-jobs">Jobs</span>
                    </h1>
                    <div className="head-btn-wrap">
                        <button
                        onClick={() => navigate("/signin")}
                        className="head-btn"
                        >
                        Get Started
                        </button>
                    </div>
                </div>
                <div className="header-image-wrap">
                    <img className="header-image" src={employee} alt="employee" />
                </div>
            </div>
        </header>
    );
};

export default Header;
