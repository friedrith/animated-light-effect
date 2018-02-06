# Animated light effect

Demo available [here](https://friedrith.github.io/animated-light-effect/)

This project is a demo using SVG and animation on scroll like Invision studio. This demo is explained
in this [Medium article](https://medium.com/@Daneel_Olivaw/how-to-create-a-handsome-gradient-scroll-animation-like-invision-studio-landing-page-fbc890d7e318).


## Getting started

```bash
$ npm install

# development
$ npm run start

# production
$ npm run build
```

## Project initialization

### Development setup

```bash
# initialization npm module
$ npm init -y

# install webpack
$ npm install --save-dev cross-env webpack webpack-dev-server html-webpack-plugin

# install sass for webpack
$ npm install --save-dev css-loader style-loader sass-loader node-sass

# install babel for webpack
$ npm install --save-dev babel-loader babel-core babel-preset-react babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-plugin-transform-es2015-modules-commonjs babel-preset-es2017 babel-preset-es2015 babel-preset-stage-0 # using babel-preset-react to load style file from js file
```

## useful libraries:


* https://github.com/necolas/normalize.css/
* https://designmodo.com/animate-svg-gradients/
* http://svgjs.com/
* https://github.com/svgdotjs/svg.filter.js#examples
* http://scrollmagic.io/
