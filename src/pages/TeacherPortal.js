import React from 'react';
import { useState } from 'react/cjs/react.development';
import PortalBody from '../components/PortalBody';
import PortalHeader from '../components/PortalHeader';

const TeacherPortal = () => {
    const [postClick, setPostClick] = useState(false);
    return ( 
        <div>
            <PortalHeader setPostClick={setPostClick} />
            <PortalBody postClick={postClick} setPostClick={setPostClick} />
        </div>
    );
};

export default TeacherPortal;
