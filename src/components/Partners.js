import React from 'react';
import brands from "../assets/clients.png";

import "./Partners.scss";

const Partners = () => {
    return (
        <div className="partners">
            <h2 className="partners-title">
            Companies Who Trust Us
            </h2>
            <div className="brands">
                <img className="brands-image" src={brands} alt="brands" />
            </div>
        </div>
    );
};

export default Partners;

