# Welcome to react-webpack-template
This repository holds a base template for the new version of generator-react-webpack.
It can be understood as the prototype for newly generated projects.

## Features
The following features are planned to be included in the final version:

- [x] Webpack and Webpack-Dev-Server, including hot-loader
- [x] Babel and JSX
- [x] Mocha Unit tests (*optional*)
- [x] EsLint Support
- [x] No dependency on grunt, gulp or the next hot taskrunner!

## Todo
- [ ] Better performance for webpack builds
- [ ] The dynamic webpack configuration is clunky, there must be a better way to do that!
- [ ] Karmas webpack configuration is not included in the global webpack.config.js file, but it really should

## What is it for?
This template can be used directly for the creation of new projects.
Also it will be the "template" for the next version of generator-react-webpack.

## Using it
The template is available via webpack. The following commands are available:
```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

You can also use your globally installed version of webpack like this:
```bash
# Build or run the dev version:
webpack
webpack --env=dev

webpack-dev-server
webpack-dev-server --env=dev

# Build or run the dist version
webpack --env=dist
webpack-dev-server --env=dist
```

## License
react-webpack-template is available under MIT-License and can therefore be used in any project free of charge.

## Contributors
- Weblogixx (cs@weblogixx.de)
