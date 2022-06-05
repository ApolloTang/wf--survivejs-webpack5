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

css-loader use this option to understand how many loader in the pipeline before itself.
