import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/terms#donations-and-refunds",
        permanent: true,
      },
      {
        source: "/refunds",
        destination: "/terms#donations-and-refunds",
        permanent: true,
      },
      {
        source: "/refund",
        destination: "/terms#donations-and-refunds",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
