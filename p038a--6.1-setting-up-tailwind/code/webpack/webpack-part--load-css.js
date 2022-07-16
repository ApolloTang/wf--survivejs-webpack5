const loadCSS = (
  { loaders = [] } = {}
) => {
  const module = {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ].concat(loaders),
      }
    ]
  }

  return {
    module
  }
}


module.exports = loadCSS
