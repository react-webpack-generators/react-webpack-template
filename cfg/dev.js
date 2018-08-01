
'use strict';
let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here

let config = Object.assign({}, baseConfig.pureConfig, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed rules (loaders in Webpack 1.x) to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot-loader/webpack!babel-loader',
  include: [].concat(
    baseConfig.extras.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = {
  pureConfig: config,
  extras: baseConfig.extras,
};
