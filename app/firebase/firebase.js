import { getApps, initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLn5wotHF6VAfyPOrTXrc-Rtkbqkx0BHY",
    authDomain: "next-firebase-56395.firebaseapp.com",
    projectId: "next-firebase-56395",
    storageBucket: "next-firebase-56395.appspot.com",
    messagingSenderId: "1004447138758",
    appId: "1:1004447138758:web:00738fa643726fbd0ee8c7"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app);

export { app, auth, firebaseConfig };
