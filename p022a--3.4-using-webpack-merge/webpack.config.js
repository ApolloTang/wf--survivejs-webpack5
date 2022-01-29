const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");

const parts = {}
parts.devServer = () => {
  const out = {
    watch: true,
    plugins: [
     new WebpackPluginServe(
       {
         port: process.env.PORT || 8080,
         static: './dist',
         liveReload: true,
         waitForBuild: true,
         host:'127.0.0.1' // you have set host if you use Safary
       }
     )
   ]
  }
  return out
}

parts.page = ({title}) => {
  const out = {
    plugins: [
      new MiniHtmlWebpackPlugin( {context: { title }} )
    ]
  }
  return out
}


const commonConfig = merge([
  {
    entry: [ './src' ]
  },
  parts.page( {title:'demo'})
])


const productionConfig = merge([ ])


const developmentConfig = merge([
  { entry: [ 'webpack-plugin-serve/client' ] },
  parts.devServer()
])


const getConfig = (mode) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, {mode})
    case 'development':
      return merge(commonConfig, developmentConfig, {mode})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }
}


module.exports = getConfig(mode)
