/**
 * This the main starting file. In this we will make use of model to create
 * table in the database
 */

//Get the hold of db connection
const sequelize = require('./utils/database');

//Get hold of Student schema
const Student = require('./models/student');

//Get hold of Marksheet schema
const Marksheet = require('./models/marksheet');

// one to many 
Student.hasMany(Marksheet); // this will be used to establish the relationship
/**
 * Game begings : Main logic to create table
 * {force : true} -> every time application is run, tables will be deleted and created new
 * 
 * 
 * sequelize.sync({force : true}) -> this returns a promise
 * 
 * 
 */
 sequelize.sync({force : true}).then( result =>{
     //console.log(result);
     /**
      * Add logic to insert data in the table
      */
      return Student.create({name:"Vishwa Mohan", email : "kankvish@gmaiil.com"})
 }).then(student =>{
     //console.log("Student got inserted ", student);
     /**
      * Now we should have the logic to insert marsheet record
      * 
      */

     //Marksheet.create({marks: 49});
     return student.createMarksheet({marks:99}); // return promise
 }).then(marksheet=>{
     console.log("Marksheet got updated for the student");
 })
 .catch(err => {
     console.log(err);
 })
