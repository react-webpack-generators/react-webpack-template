# react-webpack-template - Changelog

## 1.7.2:

1. Updated the list of dependencies
2. Fixed README and package.json links (links now default to [react-webpack-generators](https://github.com/react-webpack-generators/react-webpack-template) org)

## 1.7.1:

1. Added support for missing rest/spread operator (using babel-stage-0 per default now)

## 1.7.0:

1. Added back absolute paths to [make subroutes in react-router work](https://github.com/newtriks/generator-react-webpack/issues/228)
2. Updated package dev dependencies to latest stable (karma-coverage, karma-mocha)
3. Updated karma.conf.js to set test env automatically, adjusted run port to match default webpack port (8000 instead 8080)

## 1.6.1:

1. Updated eslint-plugin-react to 5.x

## 1.6.0:

1. Updated react to new stable (15.0.0)

## 1.5.3:

1. Asset paths are now relative (makes it easier to use bundles in subdirectories)
2. Removed loading problems for webpack configurations overriding (see https://github.com/newtriks/generator-react-webpack/issues/194)
3. Added missing loader configuration for movies and svg file types

## 1.5.2:

1. Updated dependencies to latests (babel-eslint, eslint, karma-mocha-reporter, normalize.css)

## 1.5.1:

1. Emergency fix for correct eslint version (2.3 is currently buggy). Fixes https://github.com/newtriks/generator-react-webpack/issues/196
2. Added mocha to eslint global config as requested in https://github.com/newtriks/generator-react-webpack/issues/195

## 1.5.0:

1. Added babel polyfill to tests per default (provided by [Igonato](https://github.com/Igonato))
2. Updated eslint to version 2.0
3. Updated glob package to version 7.0

## 1.4.0:

1. Refactored webpack config to use Object.assign instead of lodash
2. Added dynamic port for webpack dev server (provided by [kashiif](https://github.com/kashiif))

## 1.3.1:

1. Removed karma-phantomjs-shim (with PhantomJS 2 there is no need for shims anymore)

## 1.3.0:

1. Updated phantomjs to 2.0

## 1.2.1:

1. Updated lodash to latest stable version
2. Cleaned up formatting of unittests

## 1.2.0:

1. Updated core-js to new 2.0 stable
2. Moved lodash and react-addons-testutils to devDependencies (provided by [harunhasdal](https://github.com/harunhasdal))
3. Moved run component from ```src/components/run.js``` to ```src/index.js``` (provided by [stylesuxx](https://github.com/stylesuxx))

## 1.1.0:

1. Added support for easier webpack include management (can now be set via cfg/base.js, see README.md)

## 1.0.3:

1. Support for config independent settings in ```src/config/base.js``` (provided by [sthzg](https://github.com/sthzg))
2. Fixed eslint loader path (provided by [HelloYie](https://github.com/HelloYie))
3. Added support for babel-eslint (as suggested in https://github.com/newtriks/generator-react-webpack/issues/173)

## 1.0.2:

1. Added babel-eslint (as suggested in https://github.com/newtriks/generator-react-webpack/issues/173)

## 1.0.2:

1. Updated css-loader to current stable (0.23)
2. Updated glob to new major (5.x to 6.x)

## 1.0.1:
___Upgrades___:

1. Updated isparta-instrumenter-loader to new version 1.0

## 1.0.0:
___Upgrades___:

1. Updated to babel core version (6.0.x)
2. Replaced isparta-loader with the more current (and better maintained) isparta-instrumenter-loader.

## 0.3.2:
___Features___:

1. Added support for bower components in webpack
2. Added coverage reporting via karma-coverage

## 0.3.1:
___Upgrades___:

1. Added bugfix for tests in watch mode (could be overridden by config)
2. Added new badges to README
3. Updated devDependencies to current ones

## 0.3.0:
___Upgrades___:

1. Added webpacks define plugin for dist version
2. Added new task ```test:watch``` to watch for changes

## 0.2.0:
___Upgrades:___

1. Updated React from 0.13 to 0.14 (using ```^0.14```) as version string. This included minor code changes for components (now use the splitted "React"-Package) and the runner (Using React-DOM).
2. Updated the shallow renderer for unit tests.

___Backwards incompatible changes:___

1. Default unit tests do not need to traverse down to `Component._store.props`, but directly to `Component.props`. Please keep this in mind when using properties in your tests.
