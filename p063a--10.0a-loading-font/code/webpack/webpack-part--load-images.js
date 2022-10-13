const loadImages = (
  { inlineAssetlimit } = {
    inlineAssetlimit: 1 * 1024
    // If asset size is less than inlineAssetlimit, injected into the bundle as a Base64-encoded string.
  }
) => {
  const module = {
    rules: [
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: inlineAssetlimit
          }
        },
        generator: {
          filename: 'imgs/[name]-[hash][ext][query]'
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: inlineAssetlimit
          }
        },
        generator: {
          filename: 'svg/[name]-[hash][ext][query]'
        },
      },
    ]
  }

  return {
    module
  }
}


module.exports = loadImages
