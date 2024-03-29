/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				// Routes this applies to
				source: "/api/:path*",
				// Headers
				headers: [
					// Allow for specific domains to have access or * for all
					{
						key: "Access-Control-Allow-Crediantials",
						value: "true",
					},
					{
						key: "Access-Control-Allow-Origin",
						// value: "*",
						value: process.env.NEXT_PUBLIC_SERVER_URL,
						// DOES NOT WORK
						// value: process.env.ALLOWED_ORIGIN,
					},
					// Allows for specific methods accepted
					{
						key: "Access-Control-Allow-Methods",
						value: "GET, POST, PUT, DELETE, OPTIONS",
					},
					// Allows for specific headers accepted (These are a few standard ones)
					{
						key: "Access-Control-Allow-Headers",
						value: "Content-Type, Authorization",
					},
				],
			},
		];
	},
	images: {
		domains: ["picsum.photos"],
	},
};

export default nextConfig;

