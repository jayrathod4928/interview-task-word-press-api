import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* existing config options */
    reactCompiler: true,

    // ✅ Add external domains for next/image
    images: {
        domains: ["earthmintgold.com"], // allow images from this host
    },
};

export default nextConfig;
