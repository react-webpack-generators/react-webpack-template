# react-webpack-template - Changelog

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
