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
