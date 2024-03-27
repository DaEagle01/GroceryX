import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import ProductCard from './shared/ProductCard'
import { Product } from '@/types'
import Link from 'next/link'

const PopularProducts = async () => {
    const response = await fetch("http://localhost:5000/api/v1/products", {
        next: {
            revalidate: 30
        }
    });
    const products = await response.json() as Product[];
    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pb-[170px]">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold mb-5">
                        Trending  Products
                    </h1>
                    <p className="text-base font-normal text-gray-600 max-w-[60%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
                    </p>
                </div>
                <Link href="/fishes">
                    <Button className="font-semibold text-xl text-white bg-green-600 hover:bg-green-500 px6 py-4 rounded-full">
                        See All Products <ChevronRight className="ml-2" strokeWidth={3} />
                    </Button>
                </Link>
            </div>
            <div>
                <div className="grid grid-cols-12 gap-7">
                    {products?.
                        sort((a, b) => Number(b.rating) - Number(a.rating))?.
                        slice(0, 6)?.
                        map((product) => (
                            <div key={product.name} className="col-span-12 sm:col-span-4 p-3 border rounded-lg">
                                <ProductCard product={product} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PopularProducts