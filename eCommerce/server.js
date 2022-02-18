const bodyParser = require('body-parser');
const express = require('express');
const serverConfig = require('./configs/server.config');

const app = express();

//Registering body-parser middleware
app.use(bodyParser.json());


/**
 * Code for the table initialization
 */

const db = require("./models");
const Category = db.category;

console.log(typeof(Category));

/**
 * Create the table
 */
db.sequelize.sync({force:true}).then(()=>{
    console.log("table dropped and recreated");
}).catch(err=>{
    console.log(err.message);
})





//Initialize the routes
require('./routes/category.route')(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Application started on port no :",serverConfig.PORT );
})