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
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dev';
  }

  /**
   * Get the absolute path to src directory
   * @return {String}
   */
  get srcPathAbsolute() {
    return path.resolve('./src');
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {
    return {
      context: this.srcPathAbsolute,
      debug: false,
      devtool: 'eval',
      devServer: {
        contentBase: './src/',
        publicPath: '/assets/',
        historyApiFallback: true
      },
      entry: './index.js',
      module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            include: this.srcPathAbsolute,
            loader: 'eslint'
          }
        ],
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
              this.srcPathAbsolute
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
        alias: {
          actions: `${this.srcPathAbsolute}/actions/`,
          components: `${this.srcPathAbsolute}/components/`,
          config: `${this.srcPathAbsolute}/config/${this.env}.js`,
          images: `${this.srcPathAbsolute}/images/`,
          sources: `${this.srcPathAbsolute}/sources/`,
          stores: `${this.srcPathAbsolute}/stores/`
        },
        extensions: ['', '.js', '.jsx'],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      }
    };
  }
}

module.exports = WebpackBaseConfig;
