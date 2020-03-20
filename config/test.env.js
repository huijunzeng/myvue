'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

//dev.env.js配置文件同理
module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
