const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './src',
    compress: true,
    port: 3000,
  },
  module: {
    rules: [{
      test: /index\.jsx?$/,
      use: [{
        loader: 'babel-loader',
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader', // creates style nodes from JS strings
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader', // creates style nodes from JS strings
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Toto',
      template: './src/index.html',
    }),
  ],
}



/* const path = require('path')
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dev = (process.env.NODE_ENV !== 'production')

module.exports = {
//  devtool: dev ? 'inline-source-map' : 'cheap-module-source-map',
  entry: [
    path.resolve('src/index.js'),
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './src'),
    hot: false,
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      hash: true,
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader?presets[]=es2015,presets[]=es2017,presets[]=stage-0',
      exclude: /node_modules/,
    }, {
      test: /\.(jpg|png)$/,
      loader: 'file-loader?emitFile=false!',
      exclude: /node_modules/,
    }, {
      test: /style\.scss/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
} */
