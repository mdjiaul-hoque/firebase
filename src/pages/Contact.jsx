import React from 'react';
import { useNavigate } from 'react-router';

const Contact = () => {

    const navigate = useNavigate();

    const handleGoToHome = ()=>{
        navigate('/');
    };

    return (
        <div>
            <h1>contact</h1>
            <button onClick={handleGoToHome}>go to home</button>
        </div>
    );
};

export default Contact;