"use client"

import { auth } from '@/app/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

function Signup() {

    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }

    };

    return (

      <form onSubmit={handleSubmit} className='w-2/3 mx-auto h-screen flex justify-center items-center bg-white'>

        <div>

            <div className='w-full flex justify-start items-center mb-10'>
                <h1 className='text-6xl font-bold'>Admin Login</h1>
            </div>

        
            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input type="email"
                placeholder="Email ID"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
        
            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input 
                type="password"
                placeholder="Password"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={Password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10'>
                <button 
                    className='p-4 border-none outline-none rounded-xl text-white text-xl w-full bg-[#AD00FF]'
                    type="submit">
                    Login
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>

        </form>
    );
}

export default Signup;
