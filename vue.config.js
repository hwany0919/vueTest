'use strict'

const path = require('path');
const isEnv = process.env.NODE_ENV == 'production';

process.env.VUE_APP_VERSION = require('./package.json').version
const version = process.env.VUE_APP_VERSION

console.log("process.env.NODE_ENV :: ", process.env.NODE_ENV, " /// ", isEnv);
console.log("base_url :: ", process.env.BASE_URL, " /// version :: ", version);

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:9090"
      }
    }
  },
  configureWebpack: config => {
    // console.log("config :: ", config);
    if (isEnv) {
      console.log("vue config js build-prd production!!!");
    } else {
      console.log("vue config js build-dev development!!!", config.output.publicPath);
      config.output.publicPath = "/";
    }

    // optimization: {
    //   splitChunks: {
    //     chunks: 'async',
    //     minSize: 0,
    //     minChunks: 1,
    //   }
    // }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/common.scss";`
      }
    }
  }
}