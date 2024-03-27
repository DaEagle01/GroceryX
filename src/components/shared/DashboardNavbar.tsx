
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

const DashboardNavbar = () => {

    return (
        <header className="hidden sm:block fixed z-[9999] top-0 h-12 sm:h-16 py-4 sm:py-6 w-full bg-green-50">
            <nav className="w-full h-full flex justify-between items-center px-4 lg:px-8">
                <Link href="/" className='flex items-center gap-3'>
                    <Image className="h-full rounded-md" width={40} height={40} src={logo} alt="" />
                    <h1 className="font-bold text-xl">
                        GroceryX
                    </h1>
                </Link>
                <div className="space-x-2 lg:space-x-3 hidden sm:flex justify-center items-center">
                    <div className="flex flex-col items-end">
                        <p className="text-base leading-0 font-bold -mb-[3px]">Fahad Bin Karim</p>
                        <p className="text-base leading-0 font-normal -mt-[3px]">Super Admin</p>
                    </div>
                    <div>
                        <Image src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?t=st=1711548873~exp=1711552473~hmac=a105f3293e053973bd5a829dd712ba5e983f40e0c5cb6a55dbc6a4c535e001d1&w=740" width={40} height={40} className="rounded-full" alt="admin photo" />
                    </div>
                </div>
                <div className="flex items-center gap-4 sm:hidden drawer drawer-end w-max">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="">
                                <HiOutlineMenuAlt3 size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent className="w-1/2">
                            <ul className="menu p-4 w-full min-h-full text-base-content space-y-2">
                                {
                                    publicRoutes.map(route => (
                                        <div key={route.path}>
                                            <Link href={route.path} style={{ width: "100%" }} className={cn("text-xs lg:text-base font-semibold leading-5")}>{route.name}</Link>
                                            <div className="w-full bg-gray-300 dark:bg-gray-100 h-[1px]"></div>
                                        </div>
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

export default DashboardNavbar