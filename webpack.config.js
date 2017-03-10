const webpack = require("webpack");
const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: ["babel-loader", "angular2-load-children-loader", "light-ts-loader"],
      }
    ],
    noParse: [
      /zone\.js\/dist/,
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
};
