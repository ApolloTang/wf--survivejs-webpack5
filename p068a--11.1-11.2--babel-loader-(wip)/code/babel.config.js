const babelConfig = api => {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        debug: false,
        useBuiltIns: 'usage',
        corejs: '3.6',
        modules: false,
      },
    ],
  ];

  const plugins = [
    // '@babel/plugin-proposal-optional-chaining',
    // ['@babel/plugin-proposal-decorators', { legacy: true }],
    // ['@babel/plugin-proposal-class-properties', { loose: false }],
    // ['@babel/plugin-proposal-private-methods', { loose: false }],
    // ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    // '@babel/plugin-syntax-dynamic-import',
    // 'babel-plugin-dynamic-import-node',
    null
  ].filter(Boolean);

  return {
    presets,
    plugins,
  }
}

module.exports = babelConfig
