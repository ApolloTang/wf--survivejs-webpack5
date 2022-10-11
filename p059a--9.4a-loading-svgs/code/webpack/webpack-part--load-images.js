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
      },
      {
        test: /\.svg$/,
        type: 'asset',
      },
    ]
  }

  return {
    output: {
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    module
  }
}


module.exports = loadImages
