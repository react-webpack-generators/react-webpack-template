/* eslint no-param-reassign: 0 */
const path = require('path');

/**
 * Basic noop function. Does nothing
 * @return {null}
 */
function noop() {
  return null;
}

/**
 * Basic file export function. Returns the basename of the file
 * @param {Object} loadModule The webpack module
 * @param {String} filename The filename as received from code
 */
function loadFileName(loadModule, filename) {
  loadModule.exports = path.basename(filename);
}

/**
 * List of require extensions we should skip completely
 * @type {Array}
 */
const completelySkippedExtensions = [
  'css',
  'less',
  'scss',
  'sass'
];

/**
 * List of require extensions we should skip with returning the filename
 * Usefull for unit tests
 * @type {Array}
 */
const mediaExtensions = [
  'png',
  'jpg',
  'gif',
  'mp4',
  'ogg',
  'svg',
  'woff',
  'woff2'
];

completelySkippedExtensions.forEach((ext) => {
  require.extensions[`.${ext}`] = noop;
});

mediaExtensions.forEach((ext) => {
  require.extensions[`.${ext}`] = loadFileName;
});
