const webpack = require("webpack");
const path = require("path");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: ["awesome-typescript-loader", "angular2-load-children-loader"],
      }
    ],
    noParse: [
      path.join(__dirname, "node_modules/zone.js/dist"),
    ]
  },
  entry: {
    bundle: "./src/index",
    bundle_aot: "./src/index-aot"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/dist/",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  plugins: [
    new ForkCheckerPlugin()
  ]
};
