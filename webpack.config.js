const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  context: __dirname,

  entry: {
    main: "./src/js/main",
  },

  output: {
    path: __dirname + '/docs/',
    publicPath: NODE_ENV == 'production' ? 'https://babakhanov.github.io/lets-webpack/' : '/',
    filename: '[name].js'
  },

  watch: NODE_ENV == 'development',

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      }
    },{
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    },{
      test: /\.jade$/,
      loader: 'jade-loader'
    },{
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'file-loader?name=[name]-[hash].[ext]'
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.jade',
      inject: false,
    })
  ],

  devtool: NODE_ENV == 'development' ? "cheap-inline-source-map" : false,
}

if (NODE_ENV == 'production'){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe:       true
      }
    })
  )
}

