# The meaning of tilde(~) in css-loader's URL

The meaning of tilde(~) is configured through the resolve.module field [https://webpack.js.org/configuration/resolve/#resolve-modules](https://webpack.js.org/configuration/resolve/#resolve-modules)

By default it refer to asset in a node_modules. For example: 

```css
@import "∼bootstrap/less/bootstrap"
```

means load an asset from `node_module/boostrap`.

Also see: [https://github.com/webpack-contrib/css-loader#url](https://github.com/webpack-contrib/css-loader#url)




## ⚠️The meaning of tilde(~) is over written with postcss-loader

see:  [https://github.com/webpack-contrib/postcss-loader/issues/166](https://github.com/webpack-contrib/postcss-loader/issues/166)

