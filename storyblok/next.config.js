/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: [
      'docrdsfx76ssb.cloudfront.net',
      'tailwindui.com',
      'a.storyblok.com'
    ]
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Home'
      }
    ];
  }
};
