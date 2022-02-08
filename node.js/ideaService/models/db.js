/**
 * This file contains the logic to connect to the database
 */

// I need db configs
const config = require("../configs/db.config");  //user defined

const Sequelize = require("sequelize");  // Sequilize class

// sequelize -> Connection object created with the help of Sequilize class
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host : config.HOST,
        dialect : config.dialect
    }
);

const db = {}; //object

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.idea = require('./idea.model')(sequelize, Sequelize);


/**
 * I am exporting multile attributes
 */
module.exports = db ; 



