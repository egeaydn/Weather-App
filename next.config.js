const withNextIntl = require('next-intl/plugin')(
  './i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: ['localhost:3001', 'localhost:3000']
		}
	}
};

module.exports = withNextIntl(nextConfig);
