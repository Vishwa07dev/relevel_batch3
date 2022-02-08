/**
 * Modules 
 * What ?  -- self contained unit of related functionalities - which can be shared or re-used
 * 
 * better readability, usability
 * 
 * 
 * Node.js :
 * 
 * There 3 types of modules :
 * 
 * 1. Core module 
 * 2. Local Modules/User defined 
 * 3. External modules
 * 
 */

//Using core modules -  file system module

/**
 * fs module -> This is used to handle the files and the folders
 */

/**
 * How to use an existing module
 * 
 * 1. import the module - using 'require' keyword
 * 2. Use the module imported to do the action
 * 
 * FS module
 */


//console.log(fs);

/**
 * Arrow functions
 */

//Example1

var hello = function(){
    console.log("Hello Students");
}

//hello();

//Using arrow syntax

hello = () => {console.log("Hello Students")};

//Example 2

var sum = function(a,b){
    return a+b;
}

//console.log(sum(5,6));

//sum = (a,b) => { return a+b ;};

sum = (a,b) =>  a+b ;

//console.log(sum(6,10));

var name= "Vishwa";

//console.log( "my name is " + name);

//console.log( "my name is  `${name}`" ); //` is used to resolve a variable


/**
 * Every one is clear on the Arrow function ???
 */

 const fs = require('fs');  // it has imported the fs module
 const pathOfTheFolder = "/Users/vimohan/work/node/batch3";
 

 //console.log("before fs call");
 fs.readdir(pathOfTheFolder , (err, files)=>{   // Aysnc way of reading content inside a folder
     //console.log(err);
     files.forEach(file =>{
         //console.log(file);
     })
 })

 //console.log("after  fs call");


 /**
  * User defined modules/ local modules
  */
 // I want to read the content of the file2 in file1

 const file2Content = require("./file2");
 console.log(file2Content);

 console.log(file2Content.car);

 console.log(file2Content.getTheName())


