/**
 * This file will have the logic to connect with the database
 */
const Sequelize = require('sequelize');

// Make a MYSQL connection
const sequelize = new Sequelize('sequelize_demo', 'root', 'Welcome1', {
    dialect : "mysql",
    host : "localhost"
});

//I wannt to export sequelize
module.exports = sequelize; 