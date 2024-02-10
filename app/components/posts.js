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
        <div className="w-full max-w-xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
            
            <textarea
                className="w-full h-32 p-3 border border-gray-300 rounded-md mb-4 resize-none"
                placeholder="What's on your mind?"
                value={content}
                onChange={handleContentChange}
            ></textarea>

            <label className="block mb-4">
                <span className="text-gray-700 mb-2 block">Add an Image</span>
                <div className="flex items-center">
                    <label htmlFor="image-upload" className="cursor-pointer bg-blue-500 
        text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
            </label>

            <div className="flex items-center justify-between">
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
