"use client"

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function register_user_on_platform(email, pass) {

    await createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
        const user = userCredential.user
        console.log(user)
    }).catch((err) => {
        console.log(err)
    })

}

async function login_user_on_platform(email, pass) {

    await signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem('user', JSON.stringify(user))
    }).catch((err) => {
        console.log(err)
    })

}

export { register_user_on_platform, login_user_on_platform }
