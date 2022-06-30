# About module.rules.sideEffect

p035a--5.1-mini-css-extract-plugin--module.rules.sideEffect=false/code/webpack/webpack-part--extract-css.js

```js
  const module = {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: options_MiniCssExtractPlugin },
          'css-loader'
        ].concat(loaders),
        sideEffects: true, // <--- if sideEffect is false css will be tree shaked
      },
    ],
  }
```



## `module.rules.sideEffects` what does it do?

Imported css such as:  

```js
import main from './main.css'
```

are considered to be side-effects. During tree shaking side-effects will not be included in the output bundle.  

So if when dealing with css, we have to tell webpack, `test: /\.css$/`  are side-effect by setting `module.rules.sideEffects` to true. That way webpack wil exclude `*.css` from tree shaking.

Ref: 

https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free

https://webpack.js.org/configuration/module/#rulesideeffects