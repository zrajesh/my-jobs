import React from 'react';

const Adcard = ({titleOne, titleTwo , desc}) => {
    return (
        <div className="why-card">
            <div className="card-title">
                <p>{titleOne}<br />{titleTwo}</p>
            </div>
            <div className="card-desc">
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Adcard;
