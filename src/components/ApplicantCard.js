import React from 'react';

import "./ApllicantCard.scss";

const ApplicantCard = () => {

    return (
        <div className="applicant-card">
            <div className="applicant-card-header">
                <div className="profile">
                    <p>E</p>
                </div>
                <div className="info">
                    <p className="name">Eliza Lucas</p>
                    <p className="email">abc123@gmail.com</p>
                </div>
            </div>
            <div className="body">
                <p className="body-title">
                Skills
                </p>
                <p className="body-skills">
                Coding, designing, graphics, website, app ui
                </p>
            </div>
        </div>
    );
};

export default ApplicantCard;
