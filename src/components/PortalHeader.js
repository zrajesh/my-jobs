import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../Auth/auth';

import "./PortalHeader.scss";

const PortalHeader = () => {
    let navigate = useNavigate();
    const logOutUser = () => {
        signout(() => {
            console.log("Logging out...");
        })
        navigate("/");
    }

    return (
        <div className="portal-header">
            <div className="nav-items">
                <div className="nav-logo">
                    <Link to="/" className="logo">
                    My<span className="jobs">Jobs</span>
                    </Link>
                </div>
                <div className="nav-links">
                    <div>
                        <Link className="link" to="/postjobs">
                        Post a Job
                        </Link>
                    </div>
                    <div
                     onClick={logOutUser}
                     className="link">
                        <p>Logout</p>
                    </div>
                    <div className="profile">
                        <p>R</p>
                    </div>
                </div>
            </div>
            <hr className="line" />
            <div className="header-body">
                <div className="header-home">
                <p>
                <i className="fas fa-home"></i>
                <span className="home">Home</span>
                </p>
                </div>
                <div>
                <p className="header-title">Jobs posted by you</p>
                </div>
            </div>
        </div>
    );
};

export default PortalHeader;
