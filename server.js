/**
 * @author Nam NH
 * Simple static server for dev and prod mode
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.dev');
var isDev = process.env.NODE_ENV !== 'production';

var express  = require('express');
var compression = require('compression');
var app = express();

var SERVER_PORT = 3030;

if (isDev) {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },
    open: true
  }).listen(SERVER_PORT, '0.0.0.0');

  return;
}

app.use(compression());
app.use(express.static(__dirname + '/build_prod'));
app.listen(SERVER_PORT);
