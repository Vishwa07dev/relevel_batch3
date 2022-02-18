/**
 * THIS FILE will expose the functionaliteis of all the model files defined under
 * the models directory
 */


//Create the connection  with the db

const Sequelize = require('sequelize');
const config = require('../configs/db.config');


/**
 * creating the db connection
 */

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,{
        host : config.HOST,
        dialect : config.dialect,
        pool : {
            max : config.pool.max,
            min : config.pool.min,
            acquire : config.pool.acquire,
            idle : config.pool.idle

        }
    }
);

/**
 * I need to expose the seqelize and category model
 */
var db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.category = require('./category.model')( sequelize, Sequelize);

module.exports = db;