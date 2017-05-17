const webpack = require('webpack');
const path = require('path');

const env = process.env.NODE_ENV;

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
];

const filename = env === 'production'
  ? 'cssinjs-animations.min.js'
  : 'cssinjs-animations.js';

if (env === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: filename,
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
