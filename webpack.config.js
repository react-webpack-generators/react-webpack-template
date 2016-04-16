// const webpack = require('webpack');
const path = require('path');

const x = {
  context: path.resolve('./src'),
  debug: true,
  devtool: 'eval',
  devServer: {
    contentBase: './src/',
    publicPath: '/assets/',
    hot: true
  },
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
        loaders: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve('./dist/assets'),
    filename: 'app.js',
    publicPath: './assets/'
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  }
};

module.exports = (configName) => {

  x.configName = configName;
  return x;
};
