var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, { // 環境變數
  NODE_ENV: '"development"',
  BASE: '"/"',
  API_LOCATION: '"https://api-happiness.luciditv.app/api"',
});
