const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function.
const addCssModules = require('../../tools/webpack/addCssModules.js');

module.exports = (config) => {
  config = nrwlConfig(config);

  addCssModules(config);

  return config;
};
