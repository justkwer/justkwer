module.exports = {
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
  reactStrictMode: true,
};
