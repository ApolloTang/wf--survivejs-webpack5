const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin')
const { WebpackPluginServe } = require("webpack-plugin-serve")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
              }
            }
          ]
        }
      ]
    }
  }
  return out
}


const extractCSS = (
  { options_MiniCssExtractPlugin = {}, loaders = [] } = {}
) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: options_MiniCssExtractPlugin
            },
            "css-loader",
          ].concat(loaders),
          sideEffects: true,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(
        {
          filename: "[name].css"
        }
      )
    ]
  }
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
  page,
  extractCSS,
}

