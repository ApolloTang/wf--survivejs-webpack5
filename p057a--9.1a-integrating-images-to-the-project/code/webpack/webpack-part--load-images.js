const loadImages = (
  { limit } = { limit:1500 }
) => {
  const module = {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: limit
          }
        }
      }
    ]
  }

  return {
    module
  }
}


module.exports = loadImages
