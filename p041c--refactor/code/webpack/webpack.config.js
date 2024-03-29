const { mode } = require('webpack-nano/argv')
const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_devServer = require('./webpack-part--dev-server--webpack-plugin-serve.js')
const part_loadCss = require('./webpack-part--load-css.js')
const part_extractCss = require('./webpack-part--extract-css.js')
const part_eliminateUnusedCSS = require('./webpack-part--eleminate-unused-css.js')

const cssloader_postcss = require('./webpack-part--cssloader--postcss/')

const commonConfig = merge([
  {
    entry: [ './src/main.js' ]
  },
  part_page({title:'demo'}),
  part_extractCss({
    loaders: [cssloader_postcss()]
  }),
])


const productionConfig = merge([
  part_eliminateUnusedCSS()
])


const developmentConfig = merge([
  part_devServer(),
  // part_loadCss({
  //   loaders: [cssloader_postcss()]
  // })
])


const getConfig = (mode, debug=false) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, {mode: !debug ? mode : 'none'})
    case 'development':
      return merge(commonConfig, developmentConfig, {mode})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }
}


const config = getConfig(mode)
// console.dir(config, {depth: 8})

module.exports = config
