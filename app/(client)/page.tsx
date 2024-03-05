"use client"
import SwiperCarousel from '@/components/swiper/swiperCarousel'
import React, { useState } from 'react'
import { ShadcnCarousel } from './_components/shadcnCarousel'
import ProductCard from '@/components/product/ProductCard';
;
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import shartImage from "../../public/images/t-shart.jpg"
type Props = {}

const Data = [
    {
        id: "1",
        image: shartImage,
        title: "polo start",
        price: "600",
    },
    {
        id: "2",
        image: shartImage,
        title: "Formal Shart",
        price: "1200",
    },
    {
        id: "3",
        image: shartImage,
        title: "Men's shart",
        price: "500",
    },
    {
        id: "4",
        image: shartImage,
        title: "vegitable",
        price: "430",
    },

];




const HomePage = (props: Props) => {


    return (
        <div className=' min-h-screen p-10 w-full'>
            <p className='text-center '>HomePage</p>
            <div className='h-[400px] border'>

                <div className='grid grid-cols-4 gap-4'>
                    {
                        Data.map((item, i) => (
                            <>
                                p
                            </>
                            // <ProductCard key={i} product={item} />
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default HomePage