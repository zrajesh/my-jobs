import React from 'react';
import JobCard from './JobCard';

import "./PortalBody.scss";

const PortalBody = () => {
    return (
        <div className="portal-body">
        {/* Empty message */}
            <div className="empty-message">
                <div>
                <i class="note-icon fas fa-clipboard-list"></i>
                </div>
                <p className="empty-title">
                Your posted jobs will show here!
                </p>
                <button className="empty-btn">
                Post a Job
                </button>
            </div>
        {/* Job listings */}
        <div className="appiled-cards">
            <JobCard 
             title="UI UX Designer"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…"
             location="Bengaluru"
            />
            <JobCard 
             title="Front-end Designer"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…"
             location="Gurgaon"
            />
            <JobCard 
             title="Java Developer"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…"
             location="Bengaluru"
            />
        </div>
        </div>
    );
};

export default PortalBody;
