const path = require("path");
const webpack = require('webpack');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader'
    ],
  });
  defaultConfig.resolve = {
   ...defaultConfig.resolve,
    alias: {
     ...defaultConfig.resolve.alias,
      src: path.resolve(__dirname, '../src'),
  }};
  return defaultConfig;
};
