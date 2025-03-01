module.exports = function override(config) {
  config.resolve.fallback = {
    url: require.resolve("url/"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    util: require.resolve("util/"),
    zlib: require.resolve("browserify-zlib"),
    stream: require.resolve("stream-browserify"),
  };
  return config;
};
