import React from 'react';
import { useLocation } from 'react-router';

const Profile = () => {
const {state} = useLocation();
console.log(state);


    return (
        <div className='pt-5'>
            {state? (<>
            <h2 className='text-5xl font-bold'>User Profile</h2>
            <p><span className='text-cyan-400 font-semibold'>Name:</span>{state.name}</p>
            <p><span className='text-cyan-400 font-semibold'>Email:</span>{state.email}</p>
            <p><span className='text-cyan-400 font-semibold'>City:</span>{state.city}</p>
            <p><span className='text-cyan-400 font-semibold'>County:</span>{state.country}</p>
            </>): <p>No Profile exist</p>}
        </div>
    );
};

export default Profile;