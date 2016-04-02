"use strict";

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

// module.exports = {
//   context: __dirname+"/app/src",
//   devtool: debug ? "inline-sourcemap": null,
//   // this is where we start off
//   entry: "./js/app.js",
//   module: {
//     loaders: [
//       {
//         exclude: [/bower_components/, /node_modules/, /lib/],
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-0'],
//           plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
//         }
//       }
//     ]
//   },
//   output: {
//     path: __dirname + "/app/src/",
//     filename: "app.min.js"
//   }
//   plugins: [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
//   ]
//
// };

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
