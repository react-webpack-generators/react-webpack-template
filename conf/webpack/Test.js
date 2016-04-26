/**
 * Default test configuration.
 */
'use strict';
const WebpackBaseConfig = require('./Base');
const path = require('path');

class WebpackTestConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      externals: {
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
      module: [
        {
          test: /\.(css|less|sass|scss|png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
          loader: 'null'
        },
        {
          test: /\.(js|jsx)$/,
          /*include: [
            path.resolve('src'),
            path.resolve('test')
          ],*/
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
          }
        }
      ]
    };
  }
}

module.exports = WebpackTestConfig;
