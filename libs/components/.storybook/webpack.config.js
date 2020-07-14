const rootWebpackConfig = require('../../../.storybook/webpack.config');
const addCssModules = require('../../../tools/webpack/addCssModules.js');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  addCssModules(config);

  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    },
  });
  return config;
};