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
db.product = require('./product.model')( sequelize, Sequelize);
db.user = require('./user.model')( sequelize, Sequelize);
db.role = require('./role.model')( sequelize, Sequelize);


/**
 * Many to Many relationships
 */
db.role.belongsToMany(db.user, {
   through : "user_roles",
   foreignKey : "role_id",
   otherKey : "user_id"

});

db.user.belongsToMany(db.role, {
    through : "user_roles",
    foreignKey : "user_id",
    otherKey : "role_id"
})




module.exports = db;