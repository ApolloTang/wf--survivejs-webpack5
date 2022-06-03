const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin')
const { WebpackPluginServe } = require("webpack-plugin-serve")

const devServer = () => {
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

const loadCSS = () => {
  const out = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: true
                // url: false
              }
            }
          ]
        }
      ]
    }
  }
  return out
}

const page = ({title}) => {
  const out = {
    plugins: [
      new MiniHtmlWebpackPlugin( {context: { title }} )
    ]
  }
  return out
}

module.exports = {
  devServer,
  loadCSS,
  page
}

