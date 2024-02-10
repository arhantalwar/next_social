import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebase';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const signup_student_to_student_collection = collection(db, 'Users/USERS/students');

async function add_student_to_firestore_db (
    firstname,
    lastname,
    mobileno,
    branch,
    regnumber,
    email
)  {

    const data = {
        firstName: firstname,
        lastName: lastname,
        mobileNumber: mobileno ,
        branch: branch,
        regNumber: regnumber,
        email: email
    };

    const docRef = await addDoc(signup_student_to_student_collection, data);
    console.log('Document added with ID: ', docRef.id);

}

const post_collection = collection(db, 'Posts/POSTS');

async function add_new_post_to_collection (
    post_content,
    img_url
)  {

    const data = {
        post_content: post_content,
        img_url: img_url,
    };

    const docRef = await addDoc(post_collection, data);
    console.log('Document added with ID: ', docRef.id);

}

export { add_student_to_firestore_db, add_new_post_to_collection }

