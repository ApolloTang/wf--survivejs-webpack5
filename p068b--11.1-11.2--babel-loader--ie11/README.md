# Babel loader (IE11 support)

## Top level function (IIFE) is still arrow (on Webpack 5)

The following is required for bundle generate by webpack5 to work in IE11 because Webpack5 itself now uses arrow fuction in its  code for internal functionalities  (IE11 does not support arrow function): 

```js
output: {
  environment: {
    arrowFunction: false, // Do not use arrowfunction in webpack internal
  },
},
```

Ref:

https://stackoverflow.com/questions/66872123/arrow-functions-in-webpack-output-despite-using-babel-loader-and-browser-targets

https://github.com/babel/babel-loader#top-level-function-iife-is-still-arrow-on-webpack-5

https://webpack.js.org/configuration/output/#outputenvironment



## Cannot use `{mode:'none'}`

Cannot use `{mode: none}` as described in this comment in this [Stackoverflow answer](https://stackoverflow.com/a/52264800/3136861) .

It may have something to do with IE11 dislike `eval()` code that gets inserted by webpack, although `eval` is supported in IE11 (possibly related see [this](https://stackoverflow.com/questions/59132233/javascript-error-syntaxerror-syntax-error-in-eval-function) and [this](https://stackoverflow.com/questions/64846101/how-i-can-build-webpack-5-for-ie11)). 



## Webpack needs to know it is targeting web, it also needs to emmit ES5 so it can run on IE11

Try the following, but there still more problem: 

```
target: ['web', 'es5'] // Webpack internal is es5 so that it work in IE11
```

as described in:

https://stackoverflow.com/a/64494479/3136861

> By default, webpack's runtime code uses ES2015 syntax to build smaller bundles. If your build targets environments that don't support this syntax **(like IE11)**, you'll need to set `target: ['web', 'es5']` to revert to ES5 syntax (`'web'` if target environment is browser).

also see: 

https://webpack.js.org/migrate/5/#need-to-support-an-older-browser-like-ie-11

https://stackoverflow.com/questions/64846101/how-i-can-build-webpack-5-for-ie11



