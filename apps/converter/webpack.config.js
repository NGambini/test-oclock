const getConfig = require('@nrwl/react/plugins/webpack');
const addCssModules = require('../../tools/webpack/addCssModules.js');
const addDotEnv = require('../../tools/webpack/addDotEnv.js');

module.exports = (config) => {
  config = getConfig(config);

  addCssModules(config);
  addDotEnv(config);

  return config;
};
