const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@containers': 'src/containers',
    '@components': 'src/components',
    '@routes': 'src/routes',
    '@store': 'src/store',
    '@hooks': 'src/hooks',
  })(config);
  return config;
};
