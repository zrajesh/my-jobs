import React from 'react';
import ForgotComp from '../components/ForgotComp';
import RegularHeader from '../components/RegularHeader';

const Forgot = () => {
    return (
        <div>
            <RegularHeader />
            <div
             style={{
                backgroundColor: "#EDF6FF",
                height: "500px"
             }}
            >
            <ForgotComp />
            </div>
        </div>
    );
};

export default Forgot;
