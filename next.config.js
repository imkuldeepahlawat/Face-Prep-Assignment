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
  