var path = require('path');
var srcPath = __dirname + '/src/';

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    files: [
      'test/loadtests.js'
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    client: {
      mocha: {

      }
    },
    singleRun: true,
    reporters: ['mocha'],
    preprocessors: {
      'test/loadtests.js': ['webpack', 'sourcemap']
    },
    webpack: {
      cache: true,
      devtool: 'eval',
      module: {
        loaders: [
          {
            test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
            loader: 'null-loader'
          },
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: [
              path.join(__dirname, 'src'),
              path.join(__dirname, 'test')
            ]
          }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
          actions: srcPath + '/actions/',
          helpers: path.join(__dirname, 'test', 'helpers'),
          components: srcPath + '/components/',
          sources: srcPath + '/sources/',
          stores: srcPath + '/stores/',
          styles: srcPath + '/styles/'
        }
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
