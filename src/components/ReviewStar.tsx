
const ReviewStar = ({ rating }: { rating: number }) => {
    const starFilled = Math.floor(rating);
    const starOutlined = 5 - Math.floor(rating);
    return (
        <span className="flex items-center">
            {Array.from({ length: starFilled }, (_, i) => (
                <svg key={i} fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
            ))}
            {Array.from({ length: starOutlined }, (_, i) => (
                <svg key={i} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
            ))}
            <span className="text-gray-600 ml-3">{Math.floor(rating)} Reviews</span>
        </span>
    )
}

export default ReviewStar