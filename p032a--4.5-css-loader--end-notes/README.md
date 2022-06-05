# CSS loader end notes:



**css-loader** evaluates the @import and url(), **style-loader** converts it to JavaScript and implements webpack’s Hot Module Replacement interface.

**PostCSS** allows you to inject functionality to CSS in through its plugin system.

css-loader doesn’t touch **absolute** nor **root relative imports** `url(/foo/bar/)`

Using **Bootstrap** with webpack requires special care. You can either go through generic loaders or a Bootstrap specific loader for more customization options.