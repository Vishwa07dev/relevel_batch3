/**
 * This file will be used to create the marksheet table
 */

 const Sequelize = require("sequelize");

 //I will need DB connection sequelize
 const sequelize = require("../utils/database");


 const Marksheet = sequelize.define('marksheet', {
     id : {
         type: Sequelize.INTEGER,
         autoIncrement : true,
         primaryKey : true
     },
     marks : {
        type : Sequelize.INTEGER,
        allowNull : false
     }
 })

 module.exports = Marksheet ;
 