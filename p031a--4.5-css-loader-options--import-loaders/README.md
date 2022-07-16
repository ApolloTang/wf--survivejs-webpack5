# css-loader options: importLoader

```js
const config = {
  test: /\.css$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,  // <-- css-loader use this option to understand how many loader in the pipeline before itself.
      },
    },
    "sass-loader",
  ],
};
```

The options `importLoader` has something to do with the `@import` statement in  css, for example:
```
@import "./variables.sass";
```

css-loader use this option to understand how many loader in the pipeline before itself.   As see in [documentation](https://github.com/webpack-contrib/css-loader#importloaders) : 

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
```

Here is an example from [link](https://github.com/webpack-contrib/css-loader/issues/1447#issuecomment-1123248368): 

```js
{
        test: TEST_CSS,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              // allow CSS modules?
              modules: {
                mode: 'local',
                // outputted className template
                localIdentName: isProd
                  ? CSS_MODULES_PATTERN_PROD
                  : CSS_MODULES_PATTERN_STAGING,
                // useful with CSS modules
                exportOnlyLocals: false,
              },
              // enable @import handling in css
              import: true,
              // this is the number of additional loaders in use
              importLoaders: 2,
              // this must be false in order to work with CSS Modules
              esModule: false,
            },
          },
          {
            loader: 'postcss-loader',
            // https://github.com/postcss/postcss-loader
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie >= 10'],
                  }),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      },
```

