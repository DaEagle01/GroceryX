/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/dashboard',
                destination: '/dashboard/all-products',
                permanent: true,
            }
        ]
    },
};

export default nextConfig;
