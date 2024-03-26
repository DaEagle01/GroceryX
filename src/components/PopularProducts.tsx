import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { staticProducts } from '@/constants'
import ProductCard from './shared/ProductCard'

const PopularProducts = () => {
    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pb-[170px]">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold mb-5">
                        Most Popular Products
                    </h1>
                    <p className="text-base font-normal text-gray-600 max-w-[60%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
                    </p>
                </div>
                <Button className="font-semibold text-xl text-white bg-green-600 hover:bg-green-500 px6 py-4 rounded-full">
                    View All <ChevronRight className="ml-2" strokeWidth={3} />
                </Button>
            </div>
            <div>
                <div className="grid grid-cols-12 gap-7">
                    {staticProducts.slice(0, 6).map((product, index) => (
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