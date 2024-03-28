import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-[90vh] max-w-[90rem] mx-auto flex justify-center items-center gap-4 px-4 lg:px-20 py-12 '>
            <div className="w-16 h-16 rounded-full bg-green-100 animate-pulse"></div>
            <div className="w-24 h-24 rounded-full bg-green-100 animate-pulse"></div>
            <div className="w-32 h-32 rounded-full bg-green-100 animate-pulse"></div>
        </div>
    )
}

export default Loading