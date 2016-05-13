# Generator-React-Webpack 2.0 (alpha)
> A flexible, easy to use boilerplate to quickly get started with Webpack, Babel and React.

[![Build Status](https://travis-ci.org/weblogixx/react-webpack-template.svg)](https://travis-ci.org/weblogixx/react-webpack-template) ![Amount of Downloads per month](https://img.shields.io/npm/dm/react-webpack-template.svg "Amount of Downloads") ![Dependency Tracker](https://img.shields.io/david/weblogixx/react-webpack-template.svg "Dependency Tracker") ![Dependency Tracker](https://img.shields.io/david/dev/weblogixx/react-webpack-template.svg "Dependency Tracker")

## Usage:
You may use this template either directly (by cloning this git repository) or by using [generator-react-webpack](https://github.com/newtriks/generator-react-webpack).

## Features
The following features are currently included out of the box:

- [x] Webpack 2 setup to get you started (including support for LESS/SASS/SCSS/Stylus and PostCSS)
- [x] Babel 6 to transpile ES2015 and JSX
- [x] React 15.0
- [x] Mocha, Chai and Enzyme for easy unit testing (without karma)
- [x] Istanbul and Isparta for collecting coverage information
- [x] Preconfigured .editorconfig file
- [x] Preconfigured eslint configuration, based on airbnb

## Common Questions:

- I want to use less/sass/whatever, but get an error when requiring the file:
We currently do not ship the needed modules. This is done on purpose, as we dont want you to install too much dependencies. If you do not use a css precompiler, chance is you wont even notice it. If you need one, just install the required webpack loader (e.g. for less via ```npm install --save-dev less-loader```).

- I want to change/add/remove one of the given configs for webpack:
The webpack configuration is located in ```conf/webpack```. All changes in Base.js will get delegated to all webpack configurations, so you will just have to update this file for adding loaders etc. You may add your own configurations at any time. Just make sure to extend ```WebpackBaseConfig``` to make it work. When ready, just update ```conf/webpack/index.js``` with your wanted options to make them work.

- Where do I find configuration options for *insert tool of choise here*:
Every configuration options are located either directly in the project root (as for .babelrc, base webpack...) or as a folder in the conf directory.

## Using it
The template uses webpack as build tool to serve files and run tests. The following commands are available:

```bash
# TODO
```

## License
react-webpack-template is available under MIT-License and can therefore be used in any project free of charge.

## Contributors
- Christian Schilling (cs@weblogixx.de)
- Martin Jul (martin@mjul.com)
- Stephan Herzog (sthzgvie@gmail.com)
- Kashif Iqbal Khan
- Ignat Shining (mail@igonato.com)
