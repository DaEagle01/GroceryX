'use client';

import { useState, useEffect, useCallback } from 'react';
import { categories, priceRanges, ratings } from "@/constants";
import FilterHeader from "./FilterHeader";
import { Checkbox } from "./ui/checkbox";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type FilterType = 'priceRange' | 'category' | 'rating';
type Filters = {
    [key in FilterType]: string | number | null;
};

const AllProductFilter = () => {
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString())
    const [filters, setFilters] = useState<Filters>({
        priceRange: Number(searchParams.getAll("priceRange")[0]) || null,
        category: searchParams.getAll("category")[0] || null,
        rating: Number(searchParams.getAll("rating")[0]) || null
    });

    useEffect(() => {
        if (!searchParams.toString()) {
            setFilters({ priceRange: null, category: null, rating: null });
        }
    }, [searchParams])

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const query = params.getAll(name);
            if (query.length > 0 && query[0] === value) {
                params.delete(name)
            } else {
                params.set(name, value)
            }
            return params.toString()
        },
        [searchParams]
    )

    const handleFilterChange = (filterType: FilterType, value: string | number) => {
        setFilters(prevFilters => {
            return {
                ...prevFilters,
                [filterType]: filters[filterType] === value ? null : value
            }
        });
        router.push(pathname + '?' + createQueryString(filterType, value.toString()));
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="px-7 py-10 border rounded-sm space-y-6">
                <FilterHeader header="Price Range" />
                <div className="space-y-[14.5px]">
                    {priceRanges.map(price => (
                        <div key={`${price.start}${price.end}`} className="flex items-center space-x-5">
                            <Checkbox
                                id="priceRange"
                                onCheckedChange={() => handleFilterChange('priceRange', price.end)}
                                checked={filters.priceRange === price.end}
                            />
                            <label
                                htmlFor="priceRange"
                                className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                            >
                                ৳ {price.start} - {price.end}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-7 py-10 border rounded-sm space-y-6">
                <FilterHeader header="Categories" />
                <div className="space-y-[14.5px]">
                    {categories.map(item => (
                        <div key={item.category} className="flex items-center space-x-5">
                            <Checkbox
                                id="category"
                                onCheckedChange={() => handleFilterChange('category', item.path)}
                                checked={filters.category === item.path}
                            />
                            <label
                                htmlFor="category"
                                className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                            >
                                {item.category}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-7 py-10 border rounded-sm space-y-6">
                <FilterHeader header="Ratings" />
                <div className="space-y-[14.5px]">
                    {ratings.map(item => (
                        <div key={item} className="flex items-center space-x-5">
                            <Checkbox
                                id="rating"
                                onCheckedChange={() => handleFilterChange('rating', item)}
                                checked={filters.rating === item}
                            />
                            <label
                                htmlFor="rating"
                                className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                            >
                                {item} and Up
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProductFilter
