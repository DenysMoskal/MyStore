const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@containers': 'src/containers',
    '@components': 'src/components',
    '@routes': 'src/routes',
  })(config);
  return config;
};
