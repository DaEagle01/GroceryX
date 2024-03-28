import "../globals.css"
import type { Metadata } from "next";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";

export const metadata: Metadata = {
    title: "GroceryX: Hooking you up with the freshest fish",
    description: "GroceryX: Your one-stop shop for the freshest catch of the day.",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <DashboardNavbar />
            <div className="grid grid-cols-12">
                <div className="hidden sm:block col-span-3 h-[calc(100vh-64px)] pt-8">
                    <div className="w-[25%] bg-green-50 h-[calc(100vh-64px)] fixed top-16 pt-6">
                        <DashboardSidebar />
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-9 bg-white py-7 px-4 sm:px-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
