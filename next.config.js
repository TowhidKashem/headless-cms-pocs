module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "docrdsfx76ssb.cloudfront.net",
      "tailwindui.com",
      "a.storyblok.com",
    ],
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    STORY_BLOK_ACCESS_TOKEN: process.env.STORY_BLOK_ACCESS_TOKEN,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Home",
      },
    ];
  },
};
