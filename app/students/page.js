"use client"

import { redirect } from "next/navigation"
import Posts from "../components/posts"

const Student = () => {

    const session = localStorage.getItem('user')

    if (session == null) {
        redirect('/login/students')
    }

    return(
        <>
            <div className="w-screen h-16 flex text-xl items-center justify-between px-10">
                <h1>Nextians</h1>
                <h1>signout</h1>
            </div>

            <div className="w-screen h-screen bg-gray-200 flex justify-center gap-5 py-5">

                <div className="w-96 h-full bg-white rounded-xl px-5 py-5">

                    <div className="w-full h-24 bg-gray-200 flex items-center justify-start pl-5 my-2 text-xl rounded-lg">
                        <h1>My Profile</h1>
                    </div>

                    <div className="w-full h-24 bg-gray-200 flex items-center justify-start pl-5 my-2 text-xl rounded-lg">
                        <h1>Notifications</h1>
                    </div>

                    <div className="w-full h-24 bg-gray-200 flex items-center justify-start pl-5 text-xl rounded-lg">
                        <h1>Switch User</h1>
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
    )

}

export default Student
