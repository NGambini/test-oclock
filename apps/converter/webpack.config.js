const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function.
const addCssModules = require('../../tools/webpack/addCssModules.js');
const addDotEnv = require('../../tools/webpack/addDotEnv.js');

module.exports = (config) => {
  config = nrwlConfig(config);

  addCssModules(config);
  addDotEnv(config);

  return config;
};
