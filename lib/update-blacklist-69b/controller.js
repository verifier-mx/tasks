require('../../config/load');

const {SAT} = require('verifier-core');
const database = require('verifier-database');

module.exports = () => SAT.updateBlacklist69b({database});
