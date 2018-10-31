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

  // defaultConfig.plugins.push(
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "vendor",
  //     chunks: ['preview'],
  //     minChunks: function (module) {
  //       // this assumes your vendor imports exist in the node_modules directory
  //       return module.context && module.context.indexOf("node_modules") !== -1;
  //     },
  //   })
  // );

  defaultConfig.resolve = {
   ...defaultConfig.resolve,
    alias: {
     ...defaultConfig.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
  }};
  return defaultConfig;
};
