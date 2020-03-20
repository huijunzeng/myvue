'use strict'
//开发环境配置文件
const merge = require('webpack-merge')
//引入本路径下的prod.env.js文件
const prodEnv = require('./prod.env')

//合并这两个配置文件对象并生成一个新的配置文件
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
