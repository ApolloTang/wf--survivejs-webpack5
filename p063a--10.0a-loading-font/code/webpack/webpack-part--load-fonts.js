const pathResolve = require('path').resolve

const loadFonts = () => {
  const absPathToFont = pathResolve(__dirname, '../src/fonts');
  console.log('xxxx absPathToFont: ',absPathToFont)

  const module = {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash][ext][query]'
        },
        include: absPathToFont
      },
    ]
  }

  return {
    module
  }
}


module.exports = loadFonts
