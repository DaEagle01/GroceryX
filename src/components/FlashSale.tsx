import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import ProductCard from "./shared/ProductCard"
import { Product } from "@/types"
import Link from "next/link"

const FlashSale = async () => {
    const response = await fetch(`${process.env.SERVER_URL}/api/v1/products`, {
        next: {
            revalidate: 30
        }
    });
    const products = await response.json() as Product[];

    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pt-12 sm:pt-[106px] pb-20 sm:pb-[170px]">
            <div className="flex justify-between items-center mb-9">
                <h1 className="text-2xl sm:text-4xl font-bold">
                    Flash Sale
                </h1>
                <Link href="/flash-sale">
                    <Button className="font-semibold text-lg sm:text-xl text-white bg-green-600 hover:bg-green-500 px6 py-4 rounded-full">
                        See All <ChevronRight className="ml-2" strokeWidth={3} />
                    </Button>
                </Link>
            </div>
            <div>
                <div className="grid grid-cols-12 gap-7">
                    {products?.
                        filter(item => item.flashSale === true)?.
                        slice(0, 4)?.
                        map((product) => (
                            <div key={product.name} className="col-span-12 sm:col-span-3 p-3 border rounded-lg">
                                <ProductCard product={product} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default FlashSale