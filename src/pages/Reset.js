import React from 'react';
import RegularHeader from '../components/RegularHeader';
import ResetComp from '../components/ResetComp';

const Reset = () => {
    return (
        <div>
        <RegularHeader />
        <div
        style={{
           backgroundColor: "#EDF6FF",
           height: "600px"
        }}
       >
            <ResetComp />
       </div>
        </div>
    );
};

export default Reset;

