/**
 * This file will have the logic to create student table in the database
 */

const Sequelize = require("sequelize");

//I will need DB connection sequelize
const sequelize = require("../utils/database");

/**
 * Logic to create the table
 */

const Student = sequelize.define('student',{
    name : {
        type : Sequelize.STRING,
        allownull : false
    },
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,  // I don't need to pass the value of id
        primaryKey : true
    },
    email : {
        type : Sequelize.STRING,
        allownull : false
    }
});

module.exports = Student;