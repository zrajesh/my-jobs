import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate, createJob } from '../Auth/auth';

import "./PostJobComp.scss";

const PostJobComp = ({setPostClick}) => {
    let userToken = JSON.parse(localStorage.getItem("token")).data.token;

    let navigate = useNavigate();

    const [values, setValues] = useState({
        "title": "",
        "description": "",
        "location": "",
        error: "",
        redirect: false
    });

    const {title, description, location} = values;

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const onSubmitHandle = event => {
        event.preventDefault();
        setValues({
            ...values,
            error: false
        })
        createJob({
            title: title,
            description: description,
            location: location
        }, userToken)
        .then(data => {
            if (data.errors) {
                setValues({
                    ...values,
                    error: true,
                })
            } 
            else if (data.success === false) {
                setValues({
                    ...values,
                    error: true
                })
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        error: false,
                        redirect: true
                    })
                })
            }
        })
        .catch(err => console.log("JOB POST ERR: ", err))
        // close form
        setPostClick(false);
    }

    return (
        <div className="postjob">
            <div className="postjob-card">
                <h3 className="postjob-title">Post a Job</h3>
                <form 
                onSubmit={onSubmitHandle}
                className="postjob-form">
                <div className="field">
                    <label className="label" htmlFor="title">Job title*</label>
                    <input
                    className="inputBox" 
                    type="text" 
                    id="title" 
                    placeholder="Enter job title"
                    onChange={handleChange("title")}
                    value={title}
                    required
                    />
                </div>

                <div className="field">
                    <label className="label" htmlFor="description">Description*</label>
                    <textarea
                    className="inputBox" 
                    type="text" 
                    id="description" 
                    placeholder="Enter job description"
                    onChange={handleChange("description")}
                    value={description}
                    required
                    ></textarea>
                </div>

                <div className="field">
                    <label className="label" htmlFor="location">Location*</label>
                    <input
                    className="inputBox" 
                    type="text" 
                    id="location" 
                    placeholder="Enter location"
                    value={location}
                    onChange={handleChange("location")}
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
