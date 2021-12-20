const { mode } = require("webpack-nano/argv");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");

const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
  watch: mode === 'development',

  // Poll is more resource-intensive than the file watching
  watchOptions: {
    aggregateTimeout: 300,   // Delay the first rebuild (in ms)
    poll: 1000,              // Poll using interval (in ms or a boolean)
    ignored: /node_modules/, // Ignore to decrease CPU usage
  },

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
