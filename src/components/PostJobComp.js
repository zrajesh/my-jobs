import React from 'react';

import "./PostJobComp.scss";

const PostJobComp = () => {
    return (
        <div className="postjob">
            <div className="postjob-card">
                <h3 className="postjob-title">Post a Job</h3>
                <form className="postjob-form">
                <div className="field">
                    <label className="label" for="title">Job title*</label>
                    <input
                     className="inputBox" 
                     type="text" 
                     id="title" 
                     placeholder="Enter job title"
                     required
                    />
                </div>

                <div className="field">
                    <label className="label" for="location">Description*</label>
                    <textarea
                     className="inputBox" 
                     type="text" 
                     id="location" 
                     placeholder="Enter job description"
                     required
                    ></textarea>
                </div>

                <div className="field">
                    <label className="label" for="location">Location*</label>
                    <input
                     className="inputBox" 
                     type="text" 
                     id="location" 
                     placeholder="Enter location"
                     required
                    />
                </div>
                <input
                 className="submit" 
                 type="submit" 
                 value="Post" 
                />
                </form>
            </div>
        </div>
    );
};

export default PostJobComp;
