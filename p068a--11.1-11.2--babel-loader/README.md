# Babel-loader

## Recent change in babel transpiler:

The following babel's pluggin is now included in `@babel/preset-env` 

```js
  const plugins = [
    // 'plugin-proposal-optional-chaining',
    // ['@babel/plugin-proposal-class-properties', { loose: false }],
    // ['@babel/plugin-proposal-private-methods', { loose: false }],
    // ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    // '@babel/plugin-syntax-dynamic-import',
  ].filter(Boolean);
```



These are probably still required but I have not check:

```js
  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-dynamic-import-node',
  ].filter(Boolean);
```

