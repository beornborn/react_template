var config = require('./webpack.config.js')
var webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
)

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    })
  ]
}

module.exports = config
