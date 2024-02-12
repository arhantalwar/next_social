import { getApps, initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.APIKEY, 
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app);

export { app, auth, firebaseConfig };
