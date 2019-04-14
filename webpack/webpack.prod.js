/**
 * @author Nam NH
 * Webpack config for production environment
 */

'use strict';

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let StatsPlugin = require('stats-webpack-plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = require('./webpack.base')({
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../app/index.js')
  ],
  output: {
    publicPath: process.env.BASENAME ? ('/' + process.env.BASENAME + '/') : '/',
    path: path.join(__dirname, '../build_prod'),
    filename: '[name]-[hash].min.js'
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),

    // extracts the css from the js files and puts them on a separate .css file.
    new ExtractTextPlugin('[name]-[hash].min.css'),

    // creates a stats.json
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    })
  ],
  styleLoader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
})
