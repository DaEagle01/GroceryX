'use client';

import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import ProductCard from "./shared/ProductCard";
import { staticProducts } from "@/constants";

const Hero = () => {
    return (
        <div className="max-w-[90rem] mx-auto pt-[5.5rem] pb-16 relative">
            <div className="flex flex-col justify-center items-center mb-8 w-full text-center sm:mb-16">
                <h1 className="mb-1 text-4xl font-semibold md:text-5xl">
                    Sea’s Bounty, Your Kitchen.
                </h1>
                <h1 className="mb-9 text-4xl font-semibold md:text-5xl">
                    Delight in Every Dish!
                </h1>
                <p className="text-center mb-6 max-w-[48%] text-base text-[#636262] md:mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
                </p>
                <div className="flex items-center justify-center">
                    <Link href='/products'>
                        <button className="w-48 h-16 border-2 border-green-300 text-green-800 font-black rounded-full hover:text-white duration-300 relative group">
                            <span className="absolute w-11 group-hover:w-[91%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-green-300 group-hover:bg-green-500 group-hover:duration-500 -z-10"></span>
                            Explore Groceries
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mx-auto w-[70%]">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,

                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="ml-1">
                        {staticProducts.map((product, index) => (
                            <CarouselItem key={product.name} className="md:basis-1/2 lg:basis-[32%] p-3 border rounded-lg ml-4">
                                <ProductCard product={product} heroProduct />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-green-400 text-white" />
                    <CarouselNext className="bg-green-400 text-white" />
                </Carousel>
            </div>
        </div>
    );
};

export default Hero;
