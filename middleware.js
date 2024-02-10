import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './app/firebase/firebase';
import { redirect } from 'next/navigation';

export default function Middleware() {

    const protectedRoutes = ['/protected'];
    
    onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (!user) {
            redirect('/login')
        }
    });

}
