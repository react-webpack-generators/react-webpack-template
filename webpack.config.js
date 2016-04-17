'use strict';
const webpackConfigs = require('./conf/webpack');
const defaultConfig = 'dev';

module.exports = (configName) => {

  // Return a new instance of the webpack config
  // or the default one if it cannot be found.
  let loadedConfig = defaultConfig;

  if (webpackConfigs[configName] !== undefined) {
    loadedConfig = webpackConfigs[configName];
  } else {
    console.warn(`
      Provided environment "${configName}" was not found.
      Please use one of the following ones:
      ${Object.keys(webpackConfigs).join(' ')}
    `);
    loadedConfig = webpackConfigs[defaultConfig];
  }

  const LoadedInstance = new loadedConfig();
  return LoadedInstance.config;
};
