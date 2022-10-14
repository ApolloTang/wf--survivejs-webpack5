const loadJs_BabelLoader = () => {

  const module = {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      }
    ]
  }

  return {
    module
  }
}


module.exports = loadJs_BabelLoader
