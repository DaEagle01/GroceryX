import { Product } from '@/types';
import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image';
import dummyFish from "../../../../../public/dummyFish.svg";
import ReviewStar from '@/components/ReviewStar';

export async function generateStaticParams() {
    const response = await fetch("http://localhost:5000/api/v1/products");
    const products = (await response.json()) as Product[];

    return products.slice(0, 10).map((product) => ({
        id: String(product.objectID),
    }))
}

const SingleFishDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const response = await fetch(`http://localhost:5000/api/v1/products/${id}`);
    const product = (await response.json()) as Product;
    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pt-8 pb-[230px]">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/fishes">All Fishes</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{product.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='mt-5'>
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="pb-20 mx-auto">
                        <div className="grid grid-cols-12 gap-4">
                            <div className='col-span-6 flex justify-center relative'>
                                {product?.picturesUrls?.length ? (
                                    <Image src={product?.picturesUrls[0] || dummyFish} width={500} height={532} alt="ecommerce" className=" w-[500px] h-[532px] object-cover object-center rounded border border-gray-200" />
                                ) : (
                                    <Image src={dummyFish} alt="ecommerce" className="object-cover object-center rounded border border-gray-200" />
                                )}
                            </div>
                            <div className="col-span-6 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    {product.category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {product.name}
                                </h1>
                                <div className="flex mb-4">
                                    <ReviewStar rating={product.rating} />
                                </div>
                                {product?.shortDesc && (
                                    <p className="leading-relaxed">
                                        {product?.shortDesc?.split('\n').map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                )}
                                <div className="flex items-center gap-4 mt-8">

                                    <p className="title-font font-medium text-2xl text-gray-500 line-through">৳{product.mrp}</p>
                                    <p className="title-font font-medium text-2xl text-gray-900">৳{product.price}</p>
                                    <button className="rounded-full w-10 h-10 bg-green-200 p-0 border-0 inline-flex items-center justify-center text-green-500 ml-4">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {product?.longDesc && (
                        <div className='bg-green-50 p-4 rounded-l'>
                            <p className='font-bold mb-2'>
                                Description:
                            </p>
                            <p className="leading-relaxed">
                                {product?.longDesc?.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}

export default SingleFishDetail