import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const navigate = useNavigate();
   
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        // console.log(email);
        // console.log(password);

        if (email === "abc@gmail.com" && password === "123456") 
        {
            const user = {
                name:'jiaul hoque',
                email : 'abc@gmail.com',
                city: 'comilla',
                country: 'Bangladesh',
            };
            navigate('/profile', {state:user});
        }
        else{
            navigate('/about');
        }

    }

    return (
        <div >
            <h2 className='text-5xl font-bold'>User SignIn</h2>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input className='border rounded'
                type="email"
                id='email'
                name='email'
                placeholder='Email'
                onChange={handleEmailChange}
                
                />
                <input  className='border rounded'
                type="password"
                id='password'
                name='password'
                placeholder='password'
                onChange={handlePasswordChange}
                
                />

                <button>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;