/**
 * Webpack configuration base class
 */
'use strict';

const path = require('path');

class WebpackBaseConfig {

  constructor() {
    this._config = {};
  }

  /**
   * Set the config data.
   * This will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @param {Object} config Final webpack config
   */
  get config() {
    return this._config;
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {
    return {
      context: path.resolve('./src'),
      debug: false,
      devtool: 'eval',
      devServer: {
        contentBase: './src/',
        publicPath: '/assets/',
        historyApiFallback: true
      },
      entry: './index.js',
      module: {
        loaders: [
          {
            test: /\.css$/,
            loaders: ['style', 'css']
          },
          {
            test: /\.sass$/,
            loaders: ['style', 'css', 'sass']
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          },
          {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
          },
          {
            test: /\.styl$/,
            loaders: ['style', 'css', 'stylus']
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loaders: ['file']
          },
          {
            test: /\.(js|jsx)$/,
            include: [
              path.resolve('src')
            ],
            loaders: ['babel']
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
  }
}

module.exports = WebpackBaseConfig;
