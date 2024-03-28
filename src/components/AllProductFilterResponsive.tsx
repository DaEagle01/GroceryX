import { Filter } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import AllProductFilter from "./AllProductFilter"

const AllProductFilterResponsive = () => {
    return (
        <div className="flex items-center sm:hidden w-max">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="flex sm:hidden gap-2 items-center bg-green-600 hover:bg-green-500">
                        <Filter />
                        <p className="font-bold">Filter</p>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[80%] p-4 z-[1000] overflow-y-auto">
                    <div className="">
                        <AllProductFilter />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default AllProductFilterResponsive