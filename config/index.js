'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
// path是node.js的路径模块，用来处理路径统一的问题
const path = require('path')

module.exports = {
  // 下面是dev也就是开发环境下的一些配置
  dev: {
    //env: require('./dev.env'), // 使用 config/dev.env.js 中定义的编译环境 默认配置
    // Paths
    assetsSubDirectory: 'static', //指的是静态资源文件夹，默认“static
    assetsPublicPath: '/', //指的是发布路径
    proxyTable: {// 是我们常用来配置代理API的地方
      '/apis': {
        target: 'http://192.168.0.78:8080', // 项目的访问地址或者域名
        secure: false, // 如果是https接口，需要配置这个参数为true
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置为true
        pathRewrite: { // 路径重写
          // 如果接口不带api，则设置以下，最终效果是localhost:8080/api/login  =>  http://www.xx.com/login
          // '^/apis': '/rest/' 如果接口不带api，则设置以下，最终效果是localhost:8080/api/login  =>  http://www.xx.com/rest/login
          '^/apis': '/'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false, // 是否自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  // 下面是build也就是production生产环境下的一些配置
  build: {
    //env: require('./pro.env'), // 使用 config/pro.env.js 中定义的编译环境 默认配置
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
