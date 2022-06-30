const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
        sideEffects: false, // <--- if sideEffect is false css will be tree shaked
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


module.exports = extractCSS
