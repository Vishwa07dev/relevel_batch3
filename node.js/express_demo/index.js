/**
 * How using express and we achieve the same thing much smoothly
 * 
 * 1. Bring express to my projects  npm install express --save
 * 
 * 2. import express in a file to use it
 */

const express = require("express"); // returns a function

const app = express();

// Above two lines will always come

// I would like to create the server
app.listen(5555, ()=>{
    console.log("Server is started");
})




/* 
 * client  ->  localhost:5555/names  , server should return "Hello Name"
 * 
 * client  ->  localhost:5555/hello  , server should return "Hello back"
 * 
 * client  ->  localhost:5555/questions  , server should return "Answers"
 */

app.get("/names", (req, res)=>{
    res.send("Hello Name");
})

app.get("/hello", (req, res)=>{
    res.send("Hello Back");
})

app.get("/questions", (req, res)=>{
   res.send("answer");
});

/**
 * I want provide data of the users based on user id
 * 
 * /users/1  -> data about user with id 1
 * 
 * /users/2 -> data about user with id 2
 */

app.get("/users/1", (req,res)=>{
    res.send("returning response for user 1");
})

app.get("/users/2", (req,res)=>{
    res.send("returning response for user 2");
})


/**
 * path param -> Path paramenter 
 * 
 * parameter - it change have different values
 * 
 * users/:userId
 */
app.get("/users/:userId", (req,res)=>{
    res.send("Returning response for the uuer id : "+ req.params.userId);
})

/**
 * 
 * Middleware
 * 
 */











/**
 * I don't know about express
 * 
 * 
 * 1. I need to start a server - 5555
 * 
 * 
 * Customers :
 * 
 * client  ->  localhost:5555/names  , server should return "Hello Name"
 * 
 * client  ->  localhost:5555/hello  , server should return "Hello back"
 * 
 * client  ->  localhost:5555/questions  , server should return "Answers"
 */

//Module to create server -- http

/** 
const http = require('http') ;


http.createServer((req, res)=>{
    
    //Write the logic of handling request and response
    switch(req.url){
        case "/names" :
            res.end("Hello Name");
            break;
        case "/hello" :
            res.end("Hello back");
            break;
        case "/questions" :
            res.end("answer");
            break;
        default :
            res.end("This is the wrong url");
    }

}).listen(5555);


/**
 * Challenges of this approach :
 * 1.For handling routes, we need to manage multiple conditionals
 * 2. Default support is only for GET, what if I need to support : POST, PUT....
 * 
 */