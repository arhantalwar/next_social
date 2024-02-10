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

const post_collection = collection(db, 'Posts/');

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

const signup_faculty_to_faculty_collection = collection(db, 'Users/USERS/faculty');

async function add_faculty_to_firestore_db (
    firstname,
    lastname,
    mobileno,
    valid_code,
    email
)  {

    // check if valid_code

    const data = {
        firstName: firstname,
        lastName: lastname,
        mobileNumber: mobileno,
        email: email
    };

    const docRef = await addDoc(signup_faculty_to_faculty_collection, data);
    console.log('Document added with ID: ', docRef.id);

}

const signup_admin_to_admin_collection = collection(db, 'Users/USERS/admin');

async function add_admin_to_firestore_db (
    firstname,
    lastname,
    mobileno,
    valid_code,
    email
)  {

    // check if valid_code

    const data = {
        firstName: firstname,
        lastName: lastname,
        mobileNumber: mobileno,
        email: email
    };

    const docRef = await addDoc(signup_admin_to_admin_collection, data);
    console.log('Document added with ID: ', docRef.id);

}

export { add_student_to_firestore_db, add_faculty_to_firestore_db, add_admin_to_firestore_db, add_new_post_to_collection }

