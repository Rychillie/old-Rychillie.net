module.exports = {
  reactStrictMode: true,

  images: {
    domains: ["rychillie.net", "localhost"],
  },

  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });

    return config;
  },
};
