/** @type {import('next').NextConfig} */
module.exports = {
	basePath: "/cv",
	reactStrictMode: true,
	images: {
		domains: ["identicons.github.com",],
	},
	poweredByHeader: false,
	amp: true,
};
