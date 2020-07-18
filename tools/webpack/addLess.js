const lessRegex = /\.less$/;

module.exports = (config) => {
  // Add new rule to handle .less files.
  // This is used only by storybook, as less is working by default in apps.
  // Go figure

  config.module.rules.push({
    test: lessRegex,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: false,
          importLoaders: 1
        }
      },
      {
        loader: 'less-loader'
      }
    ]
  });
};
