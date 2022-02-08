/**
 * Today's topics :
 * 
 * Callbacks
 * Timers
 * Promises
 * Async Await
 * 
 */

const { DH_UNABLE_TO_CHECK_GENERATOR } = require("constants");




/**
 * Callback
 * 
 * What is a call back  ?
 * 
 * 
 * Function passed as an argument
 */

function hello(fn){   // fn -> is the call back function
    fn();
    console.log("Welcome to the revision session");
}

/**
 * I want to execute the function hello
 * 1.I need to pass the arguments
 *     function with no arguments
 * 
 *     () => console.log("Hello Students")
 * 
 * hello(() => console.log("Hello Students"))
 */

//hello(()=>console.log('Hello Students'));
/** 
hello(function(){         
    console.log('Hello Students');
})**/


/**
 * 
 * 
 * setTimeout(callback, time in millisecond , optional argument);
 * 
 * callback function will be called after atleast after the time passed in argument
 */



//wakeUp();
//console.log('After');

/**
 * setInterval function
 */

/** 
const greet = setTimeout(()=>{
    console.log('HELLO');
},2000);

setTimeout(()=>{
    clearTimeout(greet);
},4000);


const sayHello = setInterval(()=>{
    console.log("Hello");
},1000);

setTimeout(()=>{
    clearInterval(sayHello)
},4000);

**/



 // it will simply cancel the timeout event


 /**
  * Promises :
  *     1. Completed  | resolve
  *     2. Broken     | reject
  *     3. Still in progress | pending
  */


 
 /**
  * 
  * @returns This function will return promise
  */

 //console.log("Stating to learn Promise");
 function func1(){
     return new Promise(function(resolve,reject){
         //Mimic some time that it will take for computation
         setTimeout(()=>{
             const err = true ;

             if(!err){
                 console.log("Promise fulfilled");
                 resolve();
             }else{
                console.log("Promise broken :( ");
                reject();
             }
         },3000);
     })
 }


 /**
  * What should I do if the promise is success
  */
 function dance(){
     console.log("See he fulfilled his promised, let's dance !!!");
 } 

 /**
  * If the promise is broken
  */
 function planB(){
     console.log("he broke his promise, let me prepare for IAS now .. #Thukrake mei intekaam ");
 }
 //.log(func1());
 //func1().then(dance).catch(planB);

 //console.log('Done');

 /**
  * You work for relvel, and you need to do following things
  * 
  * 1. Enroll a new student in a course
  * 2. Fetch the list of all the students enrolled in the course
  */

 /**
  * List of students
  */
 const students = [
     { name : "Vishwa" , age : 99},
     { name : "Mohan" , age : 96}
 ]

 /**
  * LOGIC to enrol the students
  */

 
 function enrollStudents(student,fetchStudents){
     
    setTimeout(() =>{
         students.push(student);
         console.log("Students enrolled");
     },3000);

     fetchStudents();
 }

 /**
  * Logic to fetch the students
  */
  function fetchStudents() {
      setTimeout(()=>{
          console.log("Fetching studetns :");
          console.log(students);
      },2000);
  }

  //enrollStudents({name:"Abc", age:99},fetchStudents);

  /**
   * This function will promise me that stundent will be enrolled
   */
  function enrollStudentPromise(student){

    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
           students.push(student);
           console.log("students got enrolled");
           resolve(); // fetchStudents()
        },3000);
    })
 }

 //enrollStudentPromise({name : "Akansha", age:34}).then(fetchStudents);

 /**
  * 
  * 
  * Async Await
  */

console.log("Start");

async function vishwa(){
    console.log("Inside the async function");
    /**
     * Some waiting operation
     */
    const response = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data");
            resolve();
        },2000);
    })

    console.log("Before returing");
    return response ;
}
const output = vishwa();

console.log(output); 

output.then(()=>{ console.log(arg)});

console.log("Completed");

















 






