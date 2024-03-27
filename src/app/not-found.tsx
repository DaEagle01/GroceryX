import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-full max-w-[90rem] mx-auto flex flex-col justify-center items-center gap-4 px-4 lg:px-20'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}