const { mode } = require("webpack-nano/argv")
const { merge } = require("webpack-merge")
const parts = require('./webpack.parts.js')

const commonConfig = merge([
  {
    entry: [ './src' ]
  },
  parts.page( {title:'demo'}),
])


const productionConfig = merge([
  {
    entry: [ 'webpack-plugin-serve/client' ]
  },
  parts.extractCSS()
])


const developmentConfig = merge([
  {
    entry: [ 'webpack-plugin-serve/client' ]
  },
  parts.loadCSS(),
  parts.devServer()
])


const getConfig = (mode) => {
  console.info('mode: ', mode)
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, {mode})
    case 'development':
      return merge(commonConfig, developmentConfig, {mode})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }

}

const config = getConfig(mode)
// console.dir(config, {depth: 3})

module.exports = config
