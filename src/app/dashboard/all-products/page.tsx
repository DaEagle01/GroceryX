import { Product } from "@/types";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import dummyFish from "../../../../public/dummyFish.svg";

const AllProducts = async () => {
    const response = await fetch("http://localhost:5000/api/v1/products", {
        cache: "no-cache"
    });
    const products = await response.json() as Product[];
    return (
        <>
            <h1 className="text-3xl font-semibold text-gray-700 mb-7">All Products</h1>
            <div>
                <Table>
                    <TableCaption>A list of all your currently available products at GroceryX.</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-green-200 hover:bg-green-100">
                            <TableHead className="w-[100px]">SL No</TableHead>
                            <TableHead>Item</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.objectID} className="border">
                                <TableCell className="font-medium">{product.objectID}</TableCell>
                                <TableCell className="flex items-center gap-2">
                                    <div className="w-[60px] h-[76px] relative">
                                        {product?.picturesUrls?.length ? (
                                            <Image src={product?.picturesUrls[0]} width={60} height={76} alt="fish image" className="w-[60px] h-[76px] object-contain object-center rounded" />
                                        ) : (
                                            <Image src={dummyFish} alt="fish image" className="object-contain object-center rounded border" />
                                        )}
                                    </div>
                                    <p>{product.name}</p>
                                </TableCell>
                                <TableCell>
                                    {product.category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </TableCell>
                                <TableCell className="text-right">৳{product.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default AllProducts