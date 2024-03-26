import Image from "next/image"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

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
                <div className="col-span-4 border rounded-xl h-[513px] relative overflow-y-hidden">
                    <Image src="https://chaldn.com/_mpimage/chaldal-premium-pangas-fish-headless-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151604&q=best&v=1" width={392} height={513} alt="Freshwater Fish" />
                    <h3 className="text-base font-normal text-gray-800 absolute left-[20px] bottom-[25px]">Freshwater Fish</h3>
                </div>
                <div className="col-span-4 grid grid-rows-12 gap-8 h-[513px] relative">
                    <div className="row-span-6 border rounded-xl h-[240px] relative">
                        <div className="w-[392px] h-[240px] relative overflow-y-hidden">
                            <Image src="https://chaldn.com/_mpimage/chaldal-premium-rui-fish-headless-curry-cut-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151603&q=best&v=1" alt="Sport Fish" layout="fill" objectFit="contain" fill={true} className="-mt-8" />
                        </div>
                        <h3 className="text-base font-normal text-gray-800 absolute left-[20px] bottom-[25px]">Sport Fish</h3>
                    </div>
                    <div className="row-span-6 border rounded-xl h-[240px] relative overflow-y-hidden">
                        <Image src="https://chaldn.com/_mpimage/chaldal-premium-koi-fish-medium-and-deshi-roshun-combo-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151602&q=best&v=1" alt="Coldwater Fish" layout="fill" objectFit="contain" fill={true} className="-mt-8" />
                        <h3 className="text-base font-normal text-gray-800 absolute left-[20px] bottom-[25px]">Coldwater Fish</h3>
                    </div>
                </div>
                <div className="col-span-4 border rounded-xl relative overflow-y-hidden">
                    <Image src="https://chaldn.com/_mpimage/horina-chingri-shrimp-60-70-pcs-15-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103440&q=best&v=1" width={392} height={513} alt="Tropical Fish" />
                    <h3 className="text-base font-normal text-gray-800 absolute left-[20px] bottom-[25px]">Tropical Fish</h3>
                </div>
            </div>
            <Button className="font-semibold text-xl text-white bg-green-600 hover:bg-green-500 px6 py-4 mt-16 rounded-full flex mx-auto">
                View All <ChevronRight className="ml-2" strokeWidth={3} />
            </Button>
        </div>
    )
}

export default TopCategories