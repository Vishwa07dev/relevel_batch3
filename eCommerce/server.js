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
const Product  = db.product;

console.log(typeof(Category));


/**
 * Setup the relationship between the tables
 */
Category.hasMany(Product);  // 1 to M relationship 
/**
 * Create the table
 */
db.sequelize.sync({force:true}).then(()=>{
    console.log("table dropped and recreated");
    Kareena();
}).catch(err=>{
    console.log(err.message);
})


/**
 * This function should be executed at the begining of the app startup
 */
function Kareena(){

    /**
     * create some initial categories
     * Bulk insert in Sequelize
     */
    var categories = [
        {
            name : 'Electronics',
            description : "This category will contain all the electronic products"
        },
        {
            name : 'KitechenItems',
            description : "This category will contain all the kitchen related products"
        },
    ];

    Category.bulkCreate(categories).then(()=>{
        console.log('categories are added');
    }).catch(err =>{
        console.log("Error in initializing the categories", e.message);
    })


}





//Initialize the routes
require('./routes/category.route')(app);
require('./routes/product.route')(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Application started on port no :",serverConfig.PORT );
})