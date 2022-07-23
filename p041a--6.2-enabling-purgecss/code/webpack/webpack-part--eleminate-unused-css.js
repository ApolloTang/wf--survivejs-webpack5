const path = require('path')
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')

const ALL_FILES = [
  ...glob.sync( path.resolve(__dirname, '../', 'src/*.html')),
  ...glob.sync( path.resolve(__dirname, '../', 'src/*.js'))
]

eliminateUnusedCSS = () => ({
  plugins: [
    new PurgeCSSPlugin({
      paths: ALL_FILES, // Consider extracting as a parameter
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ['html'],
        },
      ],
    }),
  ],
});

module.exports = eliminateUnusedCSS;
