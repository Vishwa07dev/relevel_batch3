/**
 * This is the starting file of my project
 */

const express = require("express");
const bodyParser = require("body-parser");  // middleware
const app  = express();


app.use(bodyParser.json()); // This middleware will parse the json


/**
 * I need to create the tables
 */

const db  = require("./models/db");
console.log(db);

db.sequelize.sync({force:true}).then(()=>{
    console.log("Tables got re-created");
}).catch(err=>{
    console.log("Error in creating tables");
})

/**
 * Import the routes and use it
 */
require('./routes/idea.route')(app);

/**
 * Start the server
 */

app.listen(7777, ()=>{
    console.log("App is started");
})

