import React from 'react';
import PortalHeader from '../components/PortalHeader';
import PostJobComp from '../components/PostJobComp';

const PostJob = () => {
    return (
        <div>
            <PortalHeader />
            <div
             style={{
                backgroundColor: "#EDF6FF",
                height: "600px"
             }}
            >
                <PostJobComp />
            </div>
        </div>
    );
};

export default PostJob;
