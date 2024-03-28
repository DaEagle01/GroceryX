import Link from "next/link"

const DashboardSidebar = () => {
    return (
        <div>
            <Link href="/dashboard/all-products">
                <p className="px-6 sm:px-8 bg-green-200 py-2 text-gray-700 font-medium">
                    All Products
                </p>
            </Link>
        </div>
    )
}

export default DashboardSidebar