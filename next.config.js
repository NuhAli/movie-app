/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "custom",
    domains: ['cdn.sanity.io'],
  },
};

module.exports = withSvgr(nextConfig);
