// Note: You must restart bin/webpack-dev-server for changes to take effect
//
const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig, {
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        query: {
          presets: ['airbnb']
        }
      }
    ],

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'istanbul-instrumenter-loader',
        query: {
          esModules: true
        }
      }
    ]
  },
  externals: {
    'react-dom/server': true,
    'react-addons-test-utils': true,
    'react-dom': true,
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react'
  }

  // externals: {
  //   'jsdom': 'window',
  //   'cheerio': 'window',
  //   'react/addons': true,
  //   'react/lib/ExecutionEnvironment': true,
  //   'react/lib/ReactContext': true
  // }
})
