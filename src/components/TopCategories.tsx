import Image from "next/image"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { categories } from "@/constants"

const TopCategories = () => {

    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pb-[170px]">
            <div className="flex flex-col items-center justify-center gap-3 mb-[68px]">
                <h1 className="text-4xl font-bold text-gray-800">
                    Top Categories
                </h1>
                <h6 className="text-base font-normal text-gray-600 max-w-[45%] text-center">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
                </h6>
            </div>
            <div className="grid grid-cols-12 gap-8">
                {categories.map(item => (
                    <Link href={`/fishes?category=${item.path}`} key={item.category} className="col-span-4 border rounded-xl h-[240px] relative flex flex-col items-center">
                        <div className="w-[392px] h-[80%] relative overflow-y-hidden">
                            <Image src={item.image} alt="Sport Fish" layout="fill" objectFit="contain" fill={true} />
                        </div>
                        <h3 className="text-base font-normal text-gray-800 absolute right-0 left-0 bottom-[16px] text-center">{item.category}</h3>
                    </Link>
                ))}
            </div>
            <Link href="/products">
                <Button className="font-semibold text-xl text-white bg-green-600 hover:bg-green-500 px6 py-4 mt-16 rounded-full flex mx-auto">
                    View All <ChevronRight className="ml-2" strokeWidth={3} />
                </Button>
            </Link>
        </div>
    )
}

export default TopCategories