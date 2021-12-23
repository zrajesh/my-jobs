import React, { useState } from 'react';
import ApplicantCard from './ApplicantCard';
import JobCard from './JobCard';

import "./PortalBody.scss";

const PortalBody = () => {
    const [popup, setPopup] = useState(false);

    function hideCandidates() {
        setPopup(false);
    }

    return (
        <div className="portal-body">
            {/* Empty message */}
            <div className="empty-message">
                <div>
                <i className="note-icon fas fa-clipboard-list"></i>
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
             setPopup={setPopup}
            />
            <JobCard 
             title="Front-end Designer"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…"
             location="Gurgaon"
             setPopup={setPopup}
            />
            <JobCard 
             title="Java Developer"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…"
             location="Bengaluru"
             setPopup={setPopup}
            />
        </div>
        {
            popup === true ?
            <>
            { /* Applicant listing */ }
            <div className="applicant">
            <div className="applicant-contents">
            <div className="applicant-head">
                <div className="applicant-nav">
                    <h3>Applicants for this job</h3>
                    <p>
                    <i 
                     onClick={hideCandidates}
                     className="cancel fas fa-times"></i>
                    </p>
                </div>
                <hr className="applicant-line" />
                <p className="app-count">
                Total 10 applications
                </p>
            </div>

            <div className="applicant-body">
                {/* Empty body */}
                <div className="empty-body">
                    <p>
                    <i className="empty-icon fas fa-file"></i>
                    </p>
                    <p className="empty-title">
                    No applications available!
                    </p>
                </div>
                { /* Applicant card list */ }
                <div className="applicant-list">
                    <ApplicantCard
                     name="Eliza Lucas"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Nick Gordon"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Matthew Pierce"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Emma Green"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Roger Reid"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Eliza Lucas"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Roger Reid"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Eliza Lucas"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Roger Reid"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                    <ApplicantCard
                     name="Roger Reid"
                     email="abc123@gmail.com"
                     skills="Coding, designing, graphics, website, app ui"
                    />
                </div>
            </div>
            </div>
            </div>
            </> 
            : null
        }
        </div>
    );
};

export default PortalBody;
