"use client"

import Link from 'next/link';
import { useState } from 'react';
import { login_user_on_platform } from '@/app/firebase/auth';
import { useRouter } from 'next/navigation';

function Signin() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            await login_user_on_platform(email, password)

        } catch (error) {
            setError(error.message);
        }
        
        router.push('/students')

    };

    return (

        <form onSubmit={handleSubmit} className='w-2/3 mx-auto h-screen flex justify-center items-center bg-white'>

        <div>

            <div className='w-full flex justify-start items-center mb-10'>
                <h1 className='text-6xl font-bold'>Student Login</h1>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='w-full flex justify-center items-center gap-10'>
                <button 
                    className='p-4 border-none outline-none rounded-xl text-white text-xl w-full bg-[#AD00FF]'
                    type="submit">
                    Login
                </button>
            </div>

            <div className='mt-4 w-full flex justify-center items-center gap-10'>
          <p>
            Not a student?{' '}
            <Link href="/login/faculty">
    <span className='text-violet-500'>Faculty Login</span>
            </Link>
          </p>
        </div>

            <div className='mt-4 w-full flex justify-center items-center gap-10'>
          <p>
            Dont Have an Account?{' '}
            <Link href="/signup/faculty">
    <span className='text-violet-500'>Sign Up Here</span>
            </Link>
          </p>
        </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>

        </form>
    );
}

export default Signin;
