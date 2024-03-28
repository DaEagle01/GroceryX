
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
import { LayoutDashboard } from "lucide-react";
import DashboardSidebar from "../DashboardSidebar";

const DashboardNavbar = () => {

    return (
        <header className="sm:block fixed z-[999] top-0 h-14 sm:h-16 py-4 sm:py-6 w-full bg-green-50">
            <nav className="w-full h-full flex justify-between items-center px-4 lg:px-8">
                <Link href="/" className='hidden sm:flex items-center gap-3'>
                    <Image className="h-full rounded-md" width={40} height={40} src={logo} alt="" />
                    <h1 className="font-bold text-xl">
                        GroceryX
                    </h1>
                </Link>
                <div className="flex items-center gap-4 sm:hidden drawer drawer-end w-max">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="">
                                <LayoutDashboard size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[80%] z-[1000] overflow-y-auto">
                            <div className="bg-green-50">
                                <Link href="/" className='flex items-center gap-3 p-4'>
                                    <Image className="h-full rounded-md" width={40} height={40} src={logo} alt="" />
                                    <h1 className="font-bold text-xl">
                                        GroceryX
                                    </h1>
                                </Link>
                                <div className="w-full pt-6">
                                    <DashboardSidebar />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="space-x-2 lg:space-x-3 flex justify-center items-center">
                    <div className="flex flex-col items-end">
                        <p className="text-base leading-0 font-bold -mb-[3px]">Fahad Bin Karim</p>
                        <p className="text-base leading-0 font-normal -mt-[3px]">Super Admin</p>
                    </div>
                    <div>
                        <Image src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?t=st=1711548873~exp=1711552473~hmac=a105f3293e053973bd5a829dd712ba5e983f40e0c5cb6a55dbc6a4c535e001d1&w=740" width={40} height={40} className="rounded-full" alt="admin photo" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default DashboardNavbar