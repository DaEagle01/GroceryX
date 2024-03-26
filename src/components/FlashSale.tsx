import { ChevronRight, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { staticProducts } from "@/constants"
import ProductCard from "./shared/ProductCard"

const FlashSale = () => {
    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pt-[106px] pb-[170px]">
            <div className="flex justify-between items-center mb-9">
                <h1 className="text-4xl font-bold">
                    Flash Sale
                </h1>
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

export default FlashSale