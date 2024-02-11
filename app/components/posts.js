import { useState } from 'react';
import { add_new_post_to_collection, update_student_user_post_array } from '../firebase/firestore';

const Posts = () => {

    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    const handlePost = async () => {

        const session = localStorage.getItem('user')
        let parseSession = JSON.parse(session)
        let email = parseSession.email

        const postId = await add_new_post_to_collection(content, image)

        await update_student_user_post_array(email, postId);
        
        setContent('');
        setImage(null);

    };

    return (
        <div className="w-screen max-w-xl mx-auto mt-5 p-8 bg-white rounded-lg drop-shadow-xl">

            <textarea
                className="w-full h-32 p-3 text-2xl
                           rounded-md mb-4 resize-none outline-none border-none"
                placeholder="What's on your mind?"
                value={content}
                onChange={handleContentChange}>
            </textarea>


            <div className="flex items-center justify-start">
                <button
                    onClick={handlePost}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md
        hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Post
                </button>
            </div>
        </div>
    );
};

export default Posts;
