[mini-html-webpack-plugin](https://github.com/styleguidist/mini-html-webpack-plugin) is a miniature version of [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) with only necessary features

```json
/// package.json

  "scripts": {
    "p7_1": "wp --mode production"
  },
  ...
  ...
  "devDependencies": {
    "mini-html-webpack-plugin": "^3.1.3",
    "webpack": "^5.64.4",
    "webpack-nano": "^1.1.1"
  }
```


```js
/// webpack.config.js

const { mode } = require("webpack-nano/argv") 
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin")

module.exports = { 
  mode, 
  plugins: [ 
    new MiniHtmlWebpackPlugin(
      { context: { title: "Demo" } }
    ) 
  ] 
};
```