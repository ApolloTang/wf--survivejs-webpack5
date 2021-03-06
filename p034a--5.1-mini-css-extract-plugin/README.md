p034a--5.1-mini-css-extract-plugin



Different between `extract css` and `load css`

```js
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

module.exports = loadCSS
```



```js
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


module.exports = extractCSS
```

