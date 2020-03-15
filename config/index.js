const {env = {}} = process;

module.exports = {
  getEnvironment: () => env.NODE_ENV
};
