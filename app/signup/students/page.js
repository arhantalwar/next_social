"use client"

import { register_user_on_platform } from '@/app/firebase/auth';
import { auth } from '@/app/firebase/firebase';
import add_student_to_firestore_db from '@/app/firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

function Signup() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobileno, setMobileno] = useState('');

    const [branch, setBranch] = useState('');
    const [regnumber, setRegnumber] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {

           await register_user_on_platform(email, password)

            await add_student_to_firestore_db(
                firstname,
                lastname,
                mobileno,
                branch,
                regnumber,
                email
            )

        } catch (error) {

            setError(error.message);

        }

    };

    return (

        <form onSubmit={handleSubmit} className='w-2/3 mx-auto h-screen flex justify-center items-center bg-white'>

        <div>

            <div className='w-full flex justify-start items-center mb-10'>
                <h1 className='text-5xl font-bold'>Hello Students!</h1>
            </div>

            <div className='w-full flex justify-center items-center gap-2'>
                <input type="text"
                placeholder="firstname"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)} />

                <input type="text"
                placeholder="lastname"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input type="tel"
                placeholder="mobileno"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={mobileno}
                onChange={(e) => setMobileno(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input type="text"
                placeholder="branch"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={branch}
                onChange={(e) => setBranch(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input type="text"
                placeholder="regnumber"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={regnumber}
                onChange={(e) => setRegnumber(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input type="email"
                placeholder="Email"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input 
                type="password"
                placeholder="Password"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10 my-4'>
                <input 
                type="password"
                placeholder="Confirm Password"
                className='p-4 border-none outline-none rounded-xl bg-[#ECECEC] opacity-2 text-black placeholder-black w-full'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10'>
                <button 
                    className='p-4 border-none outline-none rounded-xl text-white text-xl w-full bg-[#AD00FF]'
                    type="submit">
                    Signup
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>

        </form>
    );
}

export default Signup;
