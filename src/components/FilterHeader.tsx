
const FilterHeader = ({ header }: { header: string }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="h-6 w-1 bg-green-600"></div>
            <p className="text-[20px] font-medium text-gray-700">
                {header}
            </p>
        </div>
    )
}

export default FilterHeader