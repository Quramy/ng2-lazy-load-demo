const webpack = require("webpack");
const path = require("path");
module.exports = {
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      {test: /.ts$/, loader: "ts-loader", exclude: /node_modules/},
    ],
    noParse: [
      path.join(__dirname, "node_modules/zone.js/dist"),
      path.join(__dirname, "node_modules/reflect-metadata/Reflect.js"),
    ]
  },
  entry: {
    // client: "./src/index"
    client: "./src/index-aot"
  },
  output: {
    path: path.resolve(__dirname, "bundle"),
    publicPath: "http://localhost:3000/bundle/",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["client"]
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ],
};
