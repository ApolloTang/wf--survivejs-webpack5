const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const extractCSS = () => {
  const module = {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          'css-loader'
        ],
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
