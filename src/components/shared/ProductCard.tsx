import { Product } from "@/types";
import Image from "next/image"
import { LuPlusCircle } from "react-icons/lu";
import dummyFish from "../../../public/dummyFish.svg";
import { calculatePercentageOff } from "@/lib/calculatePercentageOff";
import Link from "next/link";

const ProductCard = ({ product, heroProduct, pageName }: { product: Product, heroProduct?: boolean, pageName?: string }) => {

    return (
        <Link href={`fishes/${product.objectID}`}>
            <div className="relative rounded-xl flex flex-col justify-between ">
                <div className="relative flex justify-center">
                    {product?.picturesUrls?.length ? (
                        <Image src={product?.picturesUrls[0] || dummyFish} width={286} height={360} alt="Saltwater fish" className={`${heroProduct ? 'h-[216px]' : 'h-[286px]'}`} />
                    ) : (
                        <Image src={dummyFish} width={286} height={heroProduct ? 216 : 360} alt="Saltwater fish" className={`${heroProduct ? 'h-[216px]' : 'h-[286px]'}`} />
                    )}
                    <div className="absolute z-0 bg-[#3D3D3D] py-[6px] rounded-lg px-3 top-3 left-3">
                        <p className="text-white font-medium text-xs">
                            -{calculatePercentageOff(product.mrp, product.price)}%
                        </p>
                    </div>
                    {product.flashSale && (
                        <div className="absolute z-0 bg-green-500 py-[6px] rounded-lg px-3 top-3 right-3">
                            <p className="text-white font-medium text-xs">Flash sale</p>
                        </div>
                    )}
                </div>
                <div className="p-3 flex flex-col gap-3">
                    <h3 className="text-gray-700 font-medium text-base sm:text-xl">
                        {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 -mb-[2px]">
                            <p className="text-[14px] font-medium text-[#AFAFAF] line-through">৳{product.mrp}</p>
                            <p className="text-[14px] font-medium text-gray-700">৳{product.price}</p>
                        </div>
                        <div>
                            <LuPlusCircle className="text-green-700 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard