const { mode } = require("webpack-nano/argv");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");

const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
  watch: mode === 'development',
  entry: [
    './src',
    'webpack-plugin-serve/client' // not sure what this is for
  ],

  mode,
  plugins: [
   new MiniHtmlWebpackPlugin({ context: { title: "Demo" } }),
   new WebpackPluginServe(
     {
       port: process.env.PORT || 8080,
       static: './dist',
       liveReload: true,
       waitForBuild: true
       // , host:127.0.0.1 // you have set host if you use safary
     }
   )
  ]
};
