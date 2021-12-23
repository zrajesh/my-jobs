import React from 'react';
import RegularHeader from '../components/RegularHeader';
import SignUp from '../components/SignUp';

const Signup = () => {
    return (
        <div>
            <RegularHeader />
            <div
             style={{
                backgroundColor: "#EDF6FF",
                height: "600px"
            }}
            >
            <SignUp />
            </div>
        </div>
    );
};

export default Signup;

