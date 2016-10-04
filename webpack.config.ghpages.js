const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.config.prod");

module.exports = merge({}, config, {
  output: {
    publicPath: "https://quramy.github.io/ng2-lazy-load-demo/dist/"
  },
});
