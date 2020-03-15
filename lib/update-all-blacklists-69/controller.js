require('../../config/load');

const {SAT} = require('verifier-core');
const database = require('verifier-database');

module.exports = () => SAT.updateAllBlacklists69({database});
