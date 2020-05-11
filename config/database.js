const Sequelize = require('sequelize');

module.exports = new Sequelize('afinitiTest', 'umershaikh', '12345', {
    host: 'localhost',
    dialect: 'postgres',
});