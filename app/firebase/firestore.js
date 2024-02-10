import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebase';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const signup_student_to_student_collection = collection(db, 'Users/USERS/students');

export default async function add_student_to_firestore_db (
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
