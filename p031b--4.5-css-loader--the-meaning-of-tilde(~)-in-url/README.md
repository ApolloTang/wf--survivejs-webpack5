# The meaning of tilde(~) in css-loader's URL

The tilde(~) refer to asset in a `node_modules`. For example: 

```css
@import "∼bootstrap/less/bootstrap"
```

means load an asset from `node_module/boostrap`.

Also see: [https://github.com/webpack-contrib/css-loader#url](https://github.com/webpack-contrib/css-loader#url)

However, this is configurable through the `resolve.module` field in `webpack.confdig.js`  (see: https://webpack.js.org/configuration/resolve/#resolve-modules)


## ⚠️The meaning of tilde(~) is over written with postcss-loader

see:  [https://github.com/webpack-contrib/postcss-loader/issues/166](https://github.com/webpack-contrib/postcss-loader/issues/166)

