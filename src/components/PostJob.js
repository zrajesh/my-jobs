import React from 'react';
import PostJobComp from './PostJobComp';

const PostJob = ({setPostClick}) => {
    return (
        <div
        style={{
            backgroundColor: "#EDF6FF",
            height: "600px"
        }}
        >     
            <PostJobComp setPostClick={setPostClick} />
        </div>
    );
};

export default PostJob;
