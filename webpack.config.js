"use strict";

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

const ignore = new webpack.IgnorePlugin(/^(react|jquery|lodash|react-dom)$/);
module.exports = {
  entry: {
    app: "./app/src/js/app.js",
     vendor: ["react","react-dom","jquery","lodash"],
  },
  output:{
    filename: "./app/src/app.min.js"
  },
   module: {
     loaders: [
       {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
     ]
   },
   plugins: [
     new webpack.optimize.CommonsChunkPlugin( "vendor", "./app/src/vendor.bundle.js"),
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.OccurenceOrderPlugin()
   ]
}
