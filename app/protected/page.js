"use client"

import { redirect } from "next/navigation"
import Posts from "../components/posts"

const Protected = () => {

    const session = localStorage.getItem('user')

    if (session == null) {
        redirect('/login/students')
    }

    let a = JSON.parse(session)
    console.log(a.email)

    return(
        <>
            <Posts />
        </>
    )

}

export default Protected
