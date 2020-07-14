const cssModuleRegex = /\.module.less$/;
const path = require('path');

module.exports = (config) => {
  config.module.rules.forEach((rule, idx) => {
    // Find rule tests for CSS.
    // Then make sure it excludes .module.css files.
    if (rule.test.test('foo.less')) {
      rule.exclude = rule.exclude
        ? Array.isArray(rule.exclude)
          ? [...rule.exclude, cssModuleRegex]
          : [rule.exclude, cssModuleRegex]
        : cssModuleRegex;
    }
  });

  // Add new rule to handle .module.css files by using css-loader
  // with modules on.
  config.module.rules.push({
    test: cssModuleRegex,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-modules-typescript-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]'
          },
          importLoaders: 1
        }
      },
      {
        loader: 'less-loader',
        options: {
          paths: [path.resolve(__dirname)]
        }
      }
    ]
  });
};
