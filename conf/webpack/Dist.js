/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
'use strict';

const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDistConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      devtool: 'source-map',
      plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
      ]
    };
  }
}

module.exports = WebpackDistConfig;
