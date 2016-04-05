'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: `.${defaultSettings.publicPath}`
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      `${defaultSettings.srcPath}/actions`,
      `${defaultSettings.srcPath}/components`,
      `${defaultSettings.srcPath}/dispatchers`,
      `${defaultSettings.srcPath}/sources`,
      `${defaultSettings.srcPath}/stores`,
      `${defaultSettings.srcPath}/styles`,
      `${defaultSettings.srcPath}/helpers`,
      `${defaultSettings.srcPath}/data`,
      `${defaultSettings.srcPath}`
    ],
    alias: {
      config: `${defaultSettings.srcPath}/config` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {}
};
