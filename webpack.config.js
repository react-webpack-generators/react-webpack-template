var webpack = require('webpack');
var args = require('minimist')(process.argv.slice(2));
var path = require('path');
var env = args.env || 'dev';

var port = 8000;
var srcPath = __dirname + '/src/';
var publicPath = '/assets/';

var config = {
  port: port,
  debug: true,
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: srcPath + '/actions/',
      components: srcPath + '/components/',
      sources: srcPath + '/sources/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};

// Use config depending on environment
switch(env) {
  case 'dist':
    config.entry = './src/components/run';
    config.cache = false;
    config.devtool = 'sourcemap';
    config.plugins = [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoErrorsPlugin()
    ];

    // Add needed loaders
    config.module.loaders.push({
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    });
    break;

  default:
    config.entry = [
      'webpack-dev-server/client?http://127.0.0.1:' + port,
      'webpack/hot/only-dev-server',
      './src/components/run'
    ];
    config.cache = true;
    config.devtool = 'eval';
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ];

    // Add needed loaders
    config.module.loaders.push({
      test: /\.(js|jsx)$/,
      loader: 'react-hot!babel-loader',
      include: path.join(__dirname, 'src')
    });
}

module.exports = config;
