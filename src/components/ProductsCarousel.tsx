'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import ProductCard from "./shared/ProductCard";
import { Product } from "@/types";

const ProductsCarousel = ({ products }: { products: Product[] }) => {
    return (
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
                {products?.slice(0, 8)?.map((product) => (
                    <CarouselItem key={product.name} className="md:basis-1/2 lg:basis-[32%] p-3 border rounded-lg ml-4">
                        <ProductCard product={product} heroProduct />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-green-400 text-white" />
            <CarouselNext className="bg-green-400 text-white" />
        </Carousel>
    )
}

export default ProductsCarousel