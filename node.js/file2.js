/**
 * What are modules ?
 * 
 * They are the self contianed units of functionality that can be shared and reused
 * across the project
 * 
 * Organize and decouple are code, for better readabillity and understanding
 */

/**
 * Node.js comes with a set of built-in modules
 * 
 * We use a built-in module using a keyword require
 * 
 * 
 *3 types of modules :
 1. Local Modules
 2. Core Modules
 3. Third PartyModules
 */

const fs = require('fs'); // this built in module helps to deal with the fs
const { findSourceMap } = require('module');
const folderPath = "/Users/vimohan/work/node/batch3";



/**
 * Since going ahead we will be using arrow functions a lot so let's try to understand
 * 
 */

// No argument functions
var hello = function(){
    console.log("Hello Students");
}
hello();
hello = () => { console.log("Hello Students")} ;

hello = () => console.log("Hello Students");

hello();

//Multiple argument functions
var add1 = function(a, b ){
    return a+b ;
}

console.log(add1(5,6));

add1 = (a,b) => { return a+b ; }

add1 = (a , b ) => a+b ;

console.log(add1(7,5));


//Aysnc way of reading all the files inside a directory
fs.readdir(folderPath, (err, files)=>{
    files.forEach(file =>{
        console.log(file);
    })
})



//http module
/**
 * Using modules in Node
 */
//http module
var http = require('http'); 
var server = http.createServer(function(req, res){ 
    res.end("Hello World"); 
}); 
server.listen(5000);


/**
 * If  we add multiple modules, Node.js loads the modules always synchronously
 * one after the another
 */

const createdModule  = require("./file1");

console.log(createdModule.getTheName());
console.log(createdModule.car);
console.log(createdModule.add(11,12));


/**
 * Learning de-structuring and using it
 */

var names = ['Vishwa' , 'Mohann', 'Shivani' ,'Akansha'];

var firstElement = names[0];

var thirdElement  = names[2];

console.log(firstElement, thirdElement);

//Using the Array destructuring

 //[ a, b, c, d]  = names ;

 //console.log(a,b,c,d);

 //[a,,,d] = names ;
 //console.log(a,d);


 //[a,b] = names ;
 //console.log(a,b);

 [a,b,...remaining] = names ;
 console.log(a,b, remaining);

 /**
  * Objects destructuring
  */
//Type 1
  var marks = {x: 21, y: -34, z: 47 }; 
  const { x, y, z } = marks;  // x,y,z should match the key
  console.log(x);
//Type 2
 
const marks1 = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
  };
  const { section1 : { alpha: alpha1 }} = marks1;
  console.log(alpha1);


/**
 * Using the above concepts, what we infer is that we can use it to write
 * less lines of code
 */

//Using object destructuring

const{ car , add} = require("./file1");  //reading from another module

console.log(car, add);



 


 




