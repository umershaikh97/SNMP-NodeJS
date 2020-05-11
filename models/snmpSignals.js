const Sequelize = require('sequelize');
const db = require('../config/database.js');

const SnmpSignals = db.define('snmpSignals', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    signalTime: {
        type: Sequelize.DATE,
    },
    signalValue: {
        type: Sequelize.STRING,
    },
});

module.exports = SnmpSignals;