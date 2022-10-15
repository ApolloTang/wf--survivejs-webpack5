const pathResolve = require('path').resolve

const { mode } = require('webpack-nano/argv')
const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_devServer = require('./webpack-part--dev-server--webpack-plugin-serve.js')
const part_loadCss = require('./webpack-part--load-css.js')
const part_extractCss = require('./webpack-part--extract-css.js')
const part_eliminateUnusedCSS = require('./webpack-part--eleminate-unused-css.js')
const part_loadImages = require('./webpack-part--load-images.js')
const part_loadFonts = require('./webpack-part--load-fonts.js')
const part_loadJs_BabelLoader = require('./webpack-part--load-js--babel-loader.js')

const cssloader_postcss = require('./webpack-part--cssloader--postcss/')

const ABS_PATH_TO_FONTS_DEFAULT = pathResolve(__dirname, '../src/fonts')

const commonConfig = merge([
  {
    entry: [ './src/main.js' ],
    output: {
      environment: {
        arrowFunction: false, // Do not use arrowfunction in webpack internal
      },
    },
    target: ['web', 'es5'] // Webpack internal is es5 so that it work in IE11
  },
  part_page({title:'demo'}),
  part_extractCss({
    loaders: [cssloader_postcss()]
  }),
  part_loadImages(),
  // part_loadImages({ absPathToFonts: ABS_PATH_TO_FONTS_DEFAULT }),
  part_loadFonts({ absPathToFonts: ABS_PATH_TO_FONTS_DEFAULT }),
  part_loadJs_BabelLoader(),
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

// const config = getConfig(mode, true)  // <-- {mode: 'none'} does not work for IE
const config = getConfig(mode)
// console.dir(config, {depth: 8})

module.exports = config
