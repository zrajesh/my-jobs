import React from 'react';

import "./JobCard.scss";

const JobCard = ({title, description, location}) => {
    return (
        <div className="job-card">
            <div className="contents">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">
                {description}
                </p>

                <div className="card-footer">
                <p>
                <i class="location-icon fas fa-map-marker-alt"></i>
                <span className="location">{location}</span>
                </p>
                <div>
                <button className="view-btn">
                View Applications
                </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
