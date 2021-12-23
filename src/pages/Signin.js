import React from 'react';
import RegularHeader from '../components/RegularHeader';
import SignIn from '../components/SignIn';

const Signin = () => {
    return (
        <div>
            <RegularHeader />
             <div
             style={{
                backgroundColor: "#EDF6FF",
                height: "600px"
             }}
            >
            <SignIn />
            </div>
        </div>
    );
};

export default Signin;
