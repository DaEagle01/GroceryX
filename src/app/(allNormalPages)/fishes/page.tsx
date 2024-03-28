import AllProductFilter from "@/components/AllProductFilter";
import AllProductFilterResponsive from "@/components/AllProductFilterResponsive";
import FilterHeader from "@/components/FilterHeader";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/types";

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
        `${process.env.SERVER_URL}/api/v1/products?${filters}`,
        {
            cache: "no-cache",
        }
    );
    const products = (await response.json()) as Product[];

    return (
        <div className="max-w-[90rem] mx-auto px-4 lg:px-20 pt-8 pb-[100px] sm:pb-[230px]">
            <div className="grid grid-cols-12 gap-0 sm:gap-8">
                <div className="hidden sm:block sm:col-span-3">
                    <AllProductFilter />
                </div>
                <div className="col-span-12 sm:col-span-9">
                    <div className="flex justify-between items-center mb-9">
                        <h1 className="text-2xl sm:text-4xl font-bold">All Fishes</h1>
                        <AllProductFilterResponsive />
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