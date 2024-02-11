"use client";

import { redirect } from "next/navigation";
import Posts from "../components/posts";

const Student = () => {
	const session = localStorage.getItem("user");

	if (session == null) {
		redirect("/login/students");
	}

	return (
		<>
			<div className="w-screen h-16 flex items-center justify-between px-10 bg-gradient-to-r from-blue-500 to-purple-300 text-white shadow-lg">
				<h1 className="text-2xl font-bold">Nextians</h1>
				<h1 className="text-xl cursor-pointer hover:underline ">Sign Out</h1>
			</div>

			<div className="w-screen h-screen bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center gap-5 p-10">
				<div className="w-96 h-full bg-white rounded-xl px-5 py-5">
					<div
						className="w-full h-24 bg-gradient-to-r from-purple-300 via-pink-400 to-red-200 flex items-center justify-start pl-6 my-2 text-xl rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
						onClick={() => {
							/* Handle click for My Profile */
						}}
					>
						<h1 className="text-white">👤 My Profile</h1>
					</div>

					<div
						className="w-full h-24 bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 flex items-center justify-start pl-6 my-2 text-xl rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
						onClick={() => {
							/* Handle click for Notifications */
						}}
					>
						<h1 className="text-white">🔔 Notifications</h1>
					</div>

					<div
						className="w-full h-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-start pl-6 text-xl rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
						onClick={() => {
							/* Handle click for Switch User */
						}}
					>
						<h1 className="text-white">🔄 Switch User</h1>
					</div>
				</div>

				<div className="w-2/5 h-full bg-white rounded-xl">
					<Posts />
				</div>

				<div className="w-96 h-full bg-white rounded-xl flex justify-center items-center">
					<h1>Messages</h1>
				</div>
			</div>
		</>
	);
};

export default Student;
