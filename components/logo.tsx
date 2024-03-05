import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Link href="/">
            <p className="font-bold text-2xl text-orange-500">FashionFusion</p></Link>
    )
}

export default Logo