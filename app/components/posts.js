import { useState } from 'react';
import { add_new_post_to_collection, update_student_user_post_array } from '../firebase/firestore';

const Posts = () => {

    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

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

        try {

            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: content }),
            });

            if (!response.ok) {
                throw new Error('Failed to analyze content');
            }

            const result = await response.json();

            console.log('Prediction:', result.prediction);
            console.log('Probability:', result.probability);

            if (result.prediction || result.probability > 0.7) {
                setError(error.message);
            } else {

                const postId = await add_new_post_to_collection(content, image)

                await update_student_user_post_array(email, postId);

                setContent('');
                setImage(null);

            }


        } catch (err) {

             console.error('Error:', err.message);

        }

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
        {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default Posts;
