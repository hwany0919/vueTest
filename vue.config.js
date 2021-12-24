'use strict'

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 0,
        minChunks: 1,
      }
    }
  }
}