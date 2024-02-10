"use client"

import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setPersistence(auth, browserSessionPersistence).then(async () => {
                await signInWithEmailAndPassword(auth, email, password);
            })
        } catch (error) {
            setError(error.message);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default Login;

