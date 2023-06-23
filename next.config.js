<<<<<<< HEAD
// next.config.js
module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        '@emotion/react': require.resolve('@emotion/react'),
        '@emotion/styled': require.resolve('@emotion/styled'),
      };
      return config;
    },
  };
  
=======
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3
