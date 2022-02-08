/**
 * I want to make use of express
 * 1. is express installed  - yes
 */
const express = require('express');

const app = express() ; // app has all the powers that express owns


/**
 * I want to create a server
 */
app.listen(7777, ()=>{
    console.log("Server has started");
});


/**
 * I would like the client to call me ?
 * 
 * How the client will call - HTTP
 * 
 * 
 * What are the HTTP methods ? : GET | POST | PUT | DELETE | 
 */

/**
 * How to expose a GET method
 * 
 * http:localhost:7777/name
 * 
 * Client -> Server | req, res
 */

app.get("/name" , (req, res) =>{
   res.send("Hello Students");
} )