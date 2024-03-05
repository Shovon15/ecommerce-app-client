"use client"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation } from 'swiper/modules';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';


// }

const SwiperCarousel = () => {
    const swiperRef = useRef(null);
    const swiper = useSwiper();
    const data = [
        {
            id: 1,
            image: "https://picsum.photos/200/200",
            title: "potato",
            price: "price",
        },
        {
            id: 2,
            image: "https://picsum.photos/200/200",
            title: "frouts",
            price: "price",
        },
        {
            id: 3,
            image: "https://picsum.photos/200/200",
            title: "fish",
            price: "price",
        },
        {
            id: 4,
            image: "https://picsum.photos/200/200",
            title: "vegitable",
            price: "price",
        },
        {
            id: 5,
            image: "https://picsum.photos/200/200",
            title: "potato",
            price: "price",
        },
        {
            id: 6,
            image: "https://picsum.photos/200/200",
            title: "frouts",
            price: "price",
        },
        {
            id: 7,
            image: "https://picsum.photos/200/200",
            title: "fish",
            price: "price",
        },
        {
            id: 8,
            image: "https://picsum.photos/200/200",
            title: "vegitable",
            price: "price",
        },
        {
            id: 9,
            image: "https://picsum.photos/200/200",
            title: "potato",
            price: "price",
        },
        {
            id: 10,
            image: "https://picsum.photos/200/200",
            title: "frouts",
            price: "price",
        },
        {
            id: 11,
            image: "https://picsum.photos/200/200",
            title: "fish",
            price: "price",
        },
        {
            id: 12,
            image: "https://picsum.photos/200/200",
            title: "vegitable",
            price: "price",
        },
    ];

    return (
        <>
            <div className='h-[400px] rounded-md p-3 bg-green-500'>
                <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>

                <Swiper>
                    {data.map((item) => (
                        <SwiperSlide key={item.id} className="p-0.5 rounded-lg">
                            <>p</>
                            {/* <ProductCard product={item} /> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <Swiper
                // ref={swiperRef}
                navigation
                slidesPerView={2}
                spaceBetween={5}
                pagination={{ type: "fraction" }}
                // breakpoints={{
                //     0: {
                //         slidesPerView: 1,
                //     },
                //     350: {
                //         slidesPerView: 2,
                //     },
                //     500: {
                //         slidesPerView: 3,
                //     },
                //     768: {
                //         slidesPerView: 4,
                //     },
                //     1024: {
                //         slidesPerView: 5,
                //     },
                //     1200: {
                //         slidesPerView: 7,
                //     },
                // }}
                className='w-full h-[400px]'
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="p-0.5 rounded-lg">
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </>
    )
}

export default SwiperCarousel