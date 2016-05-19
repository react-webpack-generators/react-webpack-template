/**
 * Default test configuration.
 */
'use strict';
const WebpackBaseConfig = require('./Base');
const webpack = require('webpack');

class WebpackTestConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      devtool: 'inline-source-map',
      externals: {
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'react/lib/ReactContext': true,
      },
      module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            loader: 'isparta-instrumenter-loader',
            include: [
              this.srcPathAbsolute
            ]
          }
        ],
        loaders: [
          {
            test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl|mp4|ogg|svg)$/,
            loader: 'null-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            query: {
              presets: ['airbnb']
            },
            include: [
              this.srcPathAbsolute,
              this.testPathAbsolute
            ]
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"test"'
        })
      ]
    };
  }

  /**
   * Set the config data.
   * Will remove the devServer config value as we do not need it in test environments
   * This function will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {

    const baseSettings = this.defaultSettings;
    delete baseSettings.devServer;
    this._config = Object.assign({}, baseSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @param {Object} config Final webpack config
   */
  get config() {
    return super.config;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'test';
  }
}

module.exports = WebpackTestConfig;
