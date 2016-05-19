'use strict';
const webpackConfigs = require('./conf/webpack');
const defaultConfig = 'dev';

module.exports = (configName) => {

  // Return a new instance of the webpack config
  // or the default one if it cannot be found.
  let LoadedConfig = defaultConfig;

  if (webpackConfigs[configName] !== undefined) {
    LoadedConfig = webpackConfigs[configName];
  } else {
    console.warn(`
      Provided environment "${configName}" was not found.
      Please use one of the following ones:
      ${Object.keys(webpackConfigs).join(' ')}
    `);
    LoadedConfig = webpackConfigs[defaultConfig];
  }

  const loadedInstance = new LoadedConfig();

  // Set the global environment
  process.env.NODE_ENV = loadedInstance.env;

  return loadedInstance.config;
};
