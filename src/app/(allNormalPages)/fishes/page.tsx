import AllProductFilter from "@/components/AllProductFilter";
import FilterHeader from "@/components/FilterHeader";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/types";
import { headers } from 'next/headers';

const Fishes = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string };
}) => {
    const queries = new URLSearchParams(searchParams);
    const filters = queries.toString();
    const response = await fetch(
        `http://localhost:5000/api/v1/products?${filters}`,
        {
            cache: "no-cache",
        }
    );
    const products = (await response.json()) as Product[];

    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pt-8 pb-[230px]">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <AllProductFilter />
                </div>
                <div className="col-span-9 ">
                    <div className="flex items-center gap-8 mb-9">
                        <h1 className="text-4xl font-bold">All Fishes</h1>
                    </div>
                    <div className="grid grid-cols-12 gap-7">
                        {products?.map((product) => (
                            <div
                                key={product.name}
                                className="col-span-12 sm:col-span-4 p-3 border rounded-lg"
                            >
                                <ProductCard product={product} pageName="flashSale" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fishes