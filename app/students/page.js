"use client";

import { redirect } from "next/navigation";
import Posts from "../components/posts";
import { useEffect, useState } from "react";
import { get_all_posts } from "../firebase/firestore";

const Student = () => {
	const session = localStorage.getItem("user");

    if (session == null) {
        redirect("/login/students");
    }

    const [post_data, setPostData] = useState([]);

    useEffect(() => {
        get_all_posts().then((data) => {
            setPostData(data);
        });
    }, []);

	return (
		<>
			<div className="w-screen h-16 flex items-center justify-between px-10 bg-gradient-to-r from-blue-400 to-purple-300 text-white shadow-lg">
				<h1 className="text-2xl font-bold">Nextians</h1>
				<h1 className="text-xl cursor-pointer hover:underline">Sign Out</h1>
			</div>

			<div className="w-screen h-screen bg-gradient-to-br from-slate-300 to-slate-600 flex items-center justify-center gap-5 p-10">
				<div className="w-96 h-full bg-white rounded-xl px-5 py-5">
					<div
						className="w-full h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-300 flex items-center justify-start pl-6 my-2 text-xl rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
						onClick={() => {
						}}
					>
						<h1 className="text-white">👤 My Profile</h1>
					</div>

					<div
						className="w-full h-24 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 flex items-center justify-start pl-6 my-2 text-xl rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
						onClick={() => {
						}}
					>
						<h1 className="text-white">🔔 Notifications</h1>
					</div>

					<div
						className="w-full h-24 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-200 flex items-center justify-start pl-6 text-xl rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
						onClick={() => {
						}}
					>
						<h1 className="text-white">🔄 Switch User</h1>
					</div>
				</div>

				<div className="w-2/5 h-full bg-white rounded-xl px-5">
					<Posts />
                        { post_data.map((item, i) => {
                                return (
                                    <div key={i} className="w-full h-28 rounded-xl text-xl px-5 mt-5
                                    bg-slate-400 text-white flex justify-start items-center">
                                    {item.post_content}
                                    </div>
                                )
                            })
                        }
				</div>

				<div className="w-96 h-full bg-white rounded-xl flex justify-center items-center">
					<h1>Messages</h1>
				</div>
			</div>
		</>
	);
};

export default Student;
