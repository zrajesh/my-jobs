import React from 'react';
import Adcard from './Adcard';

import "./Why.scss";

const Why = () => {
    return (
        <div className="why">
            <div className="why-content">
                <h3 className="why-title">Why Us</h3>
                <div className="why-cards">
                    { /* <div className="why-card">
                        <div className="card-title">
                            <p>Get More <br /> Misibility</p>
                        </div>
                        <div className="card-desc">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div> */}
                    <Adcard 
                     titleOne="Get More" 
                     titleTwo="Misibility"
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." 
                    />
                    <Adcard 
                     titleOne="Organize" 
                     titleTwo="Your Candidates"
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    />
                    <Adcard 
                     titleOne="Verify" 
                     titleTwo="Their Abilities"
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." 
                    />
                </div>
            </div>
        </div>
    );
};

export default Why;
