"use strict";

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

module.exports = {
  context: __dirname+"/app/src",
  // if we are in debug mode (not production), have debug tools else have nothing
  devtool: debug ? "inline-sourcemap": null,
  entry: "./js/app.js",
  module: {
    // anything that is a js file gets run through the babel loader with the exception of node modules and bower-components
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules | bower-components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/app/src/",
    filename: "app.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]

};
