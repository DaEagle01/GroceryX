import CountdownTimer from "@/components/countdownTimer";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

const FlashSalePage = async () => {
    const response = await fetch(`${process.env.SERVER_URL}/api/v1/products`, {
        cache: "no-cache"
    });
    const products = await response.json() as Product[];

    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pt-8 pb-[230px]">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-9">
                <h1 className="text-2xl sm:text-4xl font-bold">
                    Flash Sale
                </h1>
                <CountdownTimer />
            </div>
            <div>
                <div className="grid grid-cols-12 gap-7">
                    {products?.
                        filter(item => item.flashSale === true)?.
                        map((product) => (
                            <div key={product.name} className="col-span-12 sm:col-span-4 p-3 border rounded-lg">
                                <ProductCard product={product} pageName="flashSale" />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default FlashSalePage