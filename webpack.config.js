var webpack = require('webpack');
var path = require('path');
var debug = process.env.NODE_ENV !== "production";

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: debug ? [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'react-hot-loader/patch',
    APP_DIR + '/index.jsx'
  ] : [
    'babel-polyfill',
    APP_DIR + '/index.jsx'      
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?/,
      include: APP_DIR,
      loader: ['babel-loader']
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;