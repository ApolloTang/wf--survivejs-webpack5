

# 4.5 Understanding css-loader lookups

## Not all path works for url():


```
url(/*....*/)
```


Given this directory struture:
```
<root>
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── component.js
│   ├── index.js
│   ├── main.css
│   └── statics
│       ├── blue.png
│       ├── cyan.png
│       ├── green.png
│       └── red.png
├── statics
│   ├── cyan.css
│   └── margenta.png
└── webpack
    ├── webpack.config.js
    └── webpack.parts.js
```



#### Non relative url works (path does not starts with `./` or `../` or `/`):

```css
/* File: <root>/src/main.css */

.red {
  background-image: url(statics/red.png);   /* <root>/src/statics/red.png */
}
```



#### Relative url works (path starts with `./` or `../`):

```css
/* File: <root>/src/main.css */

.green {
  background-image: url(./statics/green.png); /* <root>/src/statics/green.png */
}
```



#### Root relative url does NOT work (path starts with `/`):

```css
/* File: <root>/src/main.css */

.blue {
  background-image: url(/statics/blue.png); /* <root>/src/statics/blue.png */
}
```



## Resolved-url-loader

This section also mentioned resolve-url-loader [https://www.npmjs.com/package/resolve-url-loader](https://www.npmjs.com/package/resolve-url-loader)

This webpack loader allows you to co-locate assets and SCSS files.
