
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../../public/logo.png";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { publicRoutes } from "@/constants";

const Navbar = () => {

    return (
        <header className="fixed z-[999] top-0 h-14 sm:h-16 py-4 sm:py-6 w-full bg-white border-b rounded-br-md rounded-bl-md shadow-sm">
            <nav className="w-full h-full max-w-[90rem] mx-auto flex justify-between sm:justify-start items-center px-4 lg:px-20">
                <Link href="/" className='flex items-center gap-3'>
                    <Image className="h-full rounded-md" width={40} height={40} src={logo} alt="" />
                    <h1 className="font-bold text-xl">
                        GroceryX
                    </h1>
                </Link>
                <ul className="flex-grow space-x-4 lg:space-x-11 hidden sm:flex justify-center items-center">
                    {
                        publicRoutes.map(route => (
                            <Link key={route.path} href={route.path} className={cn("text-xs lg:text-base font-semibold leading-5 group flex flex-col mt-[2px]")}>
                                <p>{route.name}</p>
                                <span className="mt-[1px] h-[3px] w-[0px] rounded-full bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))
                    }
                </ul>
                <div className="flex items-center gap-4 sm:hidden drawer drawer-end w-max">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="">
                                <HiOutlineMenuAlt3 size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent className="w-1/2 z-[1000] pt-10">
                            <ul className="menu p-4 w-full min-h-full text-base-content space-y-3">
                                {
                                    publicRoutes.map(route => (
                                        <Link key={route.path} href={route.path} className={cn("block w-full")}>
                                            <SheetClose asChild className="w-full">
                                                <div className="space-y-1">
                                                    <p className="text-lg text-gray-700 font-semibold leading-5">
                                                        {route.name}
                                                    </p>
                                                    <div className="w-full bg-gray-300 dark:bg-gray-100 h-[1px]"></div>
                                                </div>
                                            </SheetClose>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}

export default Navbar