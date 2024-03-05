import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
type Props = {}

export const ShadcnCarousel = (props: Props) => {
    return (
        <div className='p-10'>

            <Carousel className='border border-red-500'>
                <div className='bg-red-500'>
                    <CarouselPrevious className='border border-red-500' />
                    <CarouselNext />
                </div>
                <CarouselContent className='w-44 h-44 flex gap-3'>
                    <CarouselItem className='w-44 bg-green-500'>.1..</CarouselItem>
                    <CarouselItem className='w-44 bg-blue-500'> .2..</CarouselItem>
                    <CarouselItem className='w-44 bg-red-500'>.3..</CarouselItem>
                    <CarouselItem className='w-44 bg-green-500'>.1..</CarouselItem>
                    <CarouselItem className='w-44 bg-blue-500'> .2..</CarouselItem>
                    <CarouselItem className='w-44 bg-red-500'>.3..</CarouselItem>
                    <CarouselItem className='w-44 bg-green-500'>.1..</CarouselItem>
                    <CarouselItem className='w-44 bg-blue-500'> .2..</CarouselItem>
                    <CarouselItem className='w-44 bg-red-500'>.3..</CarouselItem>
                    <CarouselItem className='w-44 bg-green-500'>.1..</CarouselItem>
                    <CarouselItem className='w-44 bg-blue-500'> .2..</CarouselItem>
                    <CarouselItem className='w-44 bg-red-500'>.3..</CarouselItem>
                    <CarouselItem className='w-44 bg-green-500'>.1..</CarouselItem>
                    <CarouselItem className='w-44 bg-blue-500'> .2..</CarouselItem>
                    <CarouselItem className='w-44 bg-red-500'>.3..</CarouselItem>
                </CarouselContent>

            </Carousel>
        </div>
    )
}