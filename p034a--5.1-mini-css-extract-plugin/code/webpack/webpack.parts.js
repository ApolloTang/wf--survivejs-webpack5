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
  const module = {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }

  return {
    module
  }
}


const extractCSS = (
  { options_MiniCssExtractPlugin = {}, loaders = [] } = {}
) => {
  const module = {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: options_MiniCssExtractPlugin },
          'css-loader'
        ].concat(loaders),
        sideEffects: true, // <--- if sideEffect is false css will be tree shaked
      },
    ],
  }

  const plugins = [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css" // <--- css output file name
    })
  ]

  return {
    module,
    plugins
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

