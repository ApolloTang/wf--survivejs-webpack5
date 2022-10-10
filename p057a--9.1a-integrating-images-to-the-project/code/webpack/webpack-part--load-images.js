const loadImages = (
  { limit } = { limit: 1 * 1024 }
) => {
  const module = {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: limit // if images size is less than limit, injected into the bundle as a Base64-encoded string.
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
