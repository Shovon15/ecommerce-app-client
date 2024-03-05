import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFoundPage = (props: Props) => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <p className='text-center py-4 font-semibold text-2xl'>page not found</p>
            <Button asChild><Link href="/">Home</Link></Button>
        </div>
    )
}

export default NotFoundPage