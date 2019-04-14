/**
 * @author Nam NH
 * Common webpack config
 */

'use strict'

let webpack = require('webpack')
let _ = require('lodash')
let autoprefixer = require('autoprefixer')
let CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function(options) {
  return {
    devtool: options.devtool,
    entry: options.entry,
    output: _.assign(
      {
        publicPath: '/'
      },
      options.output
    ),
    module: {
      loaders: [
        // {
        //   enforce: 'pre',
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader',
        //   options: options.eslint || {
        //     failOnWarning: false,
        //     failOnError: false
        //   },
        // },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          loader: options.styleLoader || 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ['file-loader']
        }
      ]
    },
    plugins: _.concat(options.plugins, [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          BASENAME: JSON.stringify(process.env.BASENAME),
          AUTOAPI: JSON.stringify(process.env.AUTOAPI)
        }
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ])
  }
}
