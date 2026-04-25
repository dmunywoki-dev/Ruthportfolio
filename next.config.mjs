import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["src/app/work/projects/**/*", "src/app/blog/posts/**/*"],
      "/**/*": ["src/app/work/projects/**/*", "src/app/blog/posts/**/*"]
    }
  }
};

export default withMDX(nextConfig);
