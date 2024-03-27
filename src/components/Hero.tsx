import Link from "next/link";
import ProductsCarousel from "./ProductsCarousel";
import { Product } from "@/types";

const Hero = async () => {
    const response = await fetch(`${process.env.SERVER_URL}/api/v1/products`);
    const products = await response.json() as Product[];
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
                    GroceryX: Your online marketplace for all things fish! From the tranquility of rivers to the depths of oceans, we’ve got it all. Cast your net into our abundant selection and let your kitchen tell a delightful, fish-filled story!
                </p>
                <div className="flex items-center justify-center">
                    <Link href='/fishes'>
                        <button className="w-48 h-16 border-2 border-green-300 text-green-800 font-black rounded-full hover:text-white duration-300 relative group">
                            <span className="absolute w-11 group-hover:w-[91%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-green-300 group-hover:bg-green-500 group-hover:duration-500 -z-10"></span>
                            Explore Groceries
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mx-auto w-[70%]">
                <ProductsCarousel products={products} />
            </div>
        </div>
    );
};

export default Hero;
