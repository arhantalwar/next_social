"use client"

import { redirect } from "next/navigation"

const Protected = () => {

    const session = localStorage.getItem('user')

    if (session == null) {
        redirect('/login/students')
    }

    let user = JSON.parse(session);
    console.log(user)

    return(
        <>
            <h1>FROM PROTECTED</h1>
        </>
    )

}

export default Protected
