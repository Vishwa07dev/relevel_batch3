const express = require("express"); // returns a function

const path = require("path");

const fs = require("fs");

const app = express();

// Above two lines will always come

// I would like to create the server
app.listen(5555, ()=>{
    console.log("Server is started");
})


/**
 * Crate a middleware, which 
 * 1. intercepts the request
 * 2. Based on the request, find the file
 * 3. return the the content of the file
 * 
 * 
 * localhost:5555/file1.txt ->  return the content of the files1.txt
 *    else some error message
 * 
 * middleware is a function : 
 * 1. req
 * 2. resp
 * 3. next middleware
 * 
 * __dirname : current directory complete path name
 */
/** 
app.use((req, res, next)=>{
    // localhost:5555/file1.txt  -- name of the file is url
    var filename = req.url ;

    var filePath = path.join(__dirname , "files" , filename);
    console.log(filePath);

    fs.stat(filePath, (err, fileInfo)=>{
        if(err){
            next(); //give control to the next MW
            return ;
        }
        if(fileInfo.isFile()){
            res.sendFile(filePath);
        }else{
            next(); // give contol to the next MW
        }
    })

    /**
     *  C:\temp\abc.txt
     *  /temp/abc.txt
     */
//});

/**
 * First middleware should create path
 */

app.use((req, res, next)=>{
    console.log("Incoming request");
    var filePath = path.join(__dirname, "files", req.url);
    console.log(filePath);
    //Associate filePath to req object, so that it can be used
    req.filePath = filePath ;  // we setting this here
    next(); // this will give control to the next middlware
});


/**
 * second middleware shoudl return response
 */
app.use((req, res, next)=>{
    console.log(req.filePath);
    fs.stat(req.filePath, (err, fileInfo)=>{
        console.log(fileInfo);
        if(err){
            next();
            return;
        }

        if(fileInfo.isFile()){
            res.sendFile(req.filePath);
        }else{
            next();
        }
    })
})



/**
 * Third middleware should handle error if any
 */

app.use((req, res, next)=>{
    console.log("Incorrect URL");
    console.log(req.url);
    next();
})