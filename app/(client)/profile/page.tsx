"use client"

import Protected from '@/hooks/userHook'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const ProfilePage = (props: Props) => {

    const { user } = useSelector((state: any) => state.auth);
    console.log(user, "from profile page")
    return (
        <Protected>
            <div className='min-h-screen'>ProfilePage
                <p>user Name: {user?.name}</p>
                <p>user Role: {user?.userRole}</p>
                <p>user email: {user?.email}</p>
            </div>
        </Protected>
    )
}

export default ProfilePage