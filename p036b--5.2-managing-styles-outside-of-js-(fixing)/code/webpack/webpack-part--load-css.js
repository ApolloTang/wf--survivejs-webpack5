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
