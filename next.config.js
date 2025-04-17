/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['codehelp-portfolio-website.netlify.app','drive.google.com','replicate.delivery']
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals.push("pdf-parse");
      }
      return config;
    },
}

// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

  
module.exports = nextConfig