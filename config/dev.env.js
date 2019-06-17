var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE: '"/"',
  API_LOCATION: '"https://appapi.greattimemusic.com/v1"',
});
