import React from 'react';
import { Link } from 'react-router-dom';

import "./RegularHeader.scss";

const RegularHeader = () => {
    return (
        <div className="regular-header">
            <div className="nav-items">
                <div className="nav-logo">
                    <Link to="/" className="logo">
                    My<span className="jobs">Jobs</span>
                    </Link>
                </div>
            </div>
            <hr className="line" />
        </div>
    );
};

export default RegularHeader;
