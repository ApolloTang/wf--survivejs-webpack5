const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const forkTsCheckerWebpackPlugin = () => {

  const plugins = [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: "../tsconfig.json",
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ];

  return {
    plugins,
  };
};

module.exports = forkTsCheckerWebpackPlugin;
