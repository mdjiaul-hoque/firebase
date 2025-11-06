import React from 'react';
import { useLocation } from 'react-router';

const Profile = () => {
const location = useLocation();
console.log(location.state);

    return (
        <div className='pt-5'>
            <h2 className='text-5xl font-bold'>User Profile</h2>
            <p><span className='text-cyan-400'>Name:</span></p>
            <p><span className='text-cyan-400'>Email:</span></p>
            <p><span className='text-cyan-400'>City:</span></p>
            <p><span className='text-cyan-400'>County:</span></p>
        </div>
    );
};

export default Profile;