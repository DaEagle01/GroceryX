'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='w-full h-full max-w-[90rem] mx-auto flex flex-col justify-center items-center gap-4 px-4 lg:px-20'>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}