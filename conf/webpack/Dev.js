/**
 * Default dev server configuration.
 */
'use strict';

const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      devtool: 'cheap-module-source-map',
    };
  }
}

module.exports = WebpackDevConfig;
