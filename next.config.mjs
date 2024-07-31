/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/companies/:companyName',
        destination: '/companies/[companyName]',
      },
    ];
  }
};

export default nextConfig;
