/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecruiterJobs } from '../Auth/auth';
import ApplicantCard from './ApplicantCard';
import JobCard from './JobCard';

import "./PortalBody.scss";

const PortalBody = () => {
    let navigate = useNavigate();
    const [popup, setPopup] = useState(false);
    let userToken = JSON.parse(localStorage.getItem("token")).data.token;

    const [jobs, setJobs] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getRecruiterJobs(userToken)
        .then(data => {
            setJobs(data.data.data)
            setSuccess(data.success)
            return data;
        })
        .catch(err => console.log(err))
    },[])

    function hideCandidates() {
        setPopup(false);
    }
    
    
    return (
        <div className="portal-body">
            
            {
                success === true ?
                /* Job listings */
                <div className="appiled-cards">
                {
                    jobs.map(item => {
                        return (
                        <JobCard
                        key={item.id} 
                        title={item.title}
                        description={item.description}
                        location={item.location}
                        setPopup={setPopup}
                        />
                    )})
                    
                }
                </div>
                :
                /* Empty message */
                <div className="empty-message">
                <div>
                <i className="note-icon fas fa-clipboard-list"></i>
                </div>
                <p className="empty-title">
                Your posted jobs will show here!
                </p>
                <button
                 onClick={() => navigate("/portal/postjobs")}
                 className="empty-btn">
                Post a Job
                </button>
            </div>
            }
            
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
