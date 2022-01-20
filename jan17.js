
/**
 * Defining a new promise
 */

/** 
const promise = new Promise(function(resolve, reject){
    err = false ;
    if(err){
        reject("Promise is broken");// call this when not able to make promise
    }else{
        resolve("Promise is accepted");  // When able to make promise
    }
})

function fulfilledPromise(msg){
    console.log(msg);
}

function brokenPromise(msg){
    console.log(msg);
}

promise.then(fulfilledPromise).catch(brokenPromise);

**/



/**
 * This function tends to return the promise done by Vishwa
 * 
 *    I will take all the sessions
 */
/** 
function vishwaPromise(){
   /** 
    return new Promise(function(resolve,reject){
        setTimeout(function(){
           interestedStudents = false ;

           if(interestedStudents){
               resolve("module1" ); //No argument function
           }else{
               reject(); //No argument function
           }
        }, 2000);
    })

    **/

 /**    setTimeout(function(){
        interestedStudents = false ;

        if(interestedStudents){
            return "Promise fulfilled ";
        }else{
            return "Promise Broken " ;
        }
     }, 2000);

    


}

const promise = vishwaPromise();
console.log(promise);

function promiseFulFilled(msg1){
    console.log("See, Vishwa did what he said and taugh in "+ msg1 );
}

function promiseFailed(){
    console.log("See, Vishwa couldn't keep up his promise, sincere apologies");
}


//promise.then(promiseFulFilled).catch(promiseFailed);  // this line executes itself... 
/**
 * This line will wait for the promise to either complete - then()
 * or fail - catch() will be executed
 */


/**
 * Problem statement :
 * 
 * You are working for Relevel.
 * 
 * 1. Enroll a students
 * 2. Fetch the list of all the enrolled students
 */

/**
 * Data structure which will be used to store the students enrolled
 */
/** 
const students = [
    { name : "Vishwa" , age : 99},
    { name : "Shivani" , age : 98},
]
**/


/**
 * I should be able to enroll a student
 * 
 * Below function takes a stundent and enrol it
 * 
 * 1. Enrol 
 * 2. Then fetch all the students 
 */
/** 
function enrollStudents(student , fetchStudents){
   //logic to enrol students
   setTimeout(function(){
       //add the new stundet 
       students.push(student);
       console.log("Student has been enrolled")
   },5000);

   //fetch all the students
   fetchStudents();
} 

/**
 * This function has the logic to fetch the details of all the enrolled students
 */



//enrollStudents({name:"Abhishek", age:19}, fetchStudents);

/**
 * How we can solve this issue using Promises
 */

/**
 * 
 * this function is going to return a promise that the passed
 * student will be enrolled
 * 
 * return Promise
 */ 
/** 
function enrollStudentsPromise(student){
    //add some validation logic
   return new Promise(function(resolve, reject){
       setTimeout(function(){
           students.push(student);
           console.log("Student is getting enrolled");
           resolve(); // Student has been enrolled, so promise is a succees, so calling resolve
       },1000);
   });
}

function fetchStudents(){
    setTimeout(function(){
        console.log("Fetching all the students");
        console.log(students);
    },5000);
}

const enrollmentPromise = enrollStudentsPromise({name:"Akanksha", age:23}); // this will return the promise

//Using promise I can always ensure, the after student is enrolled, fetchStudent happens
enrollmentPromise.then(fetchStudents); **/


/**
 * 
 * Asynchronous processing
 * We are now trying to learn async await --- 
 */
/** 
console.log("start of the execution");

async function vishwa(){  // added async keyword before function
   console.log("Inside the Vishwa function");
   /**
    * We can write our own custom promise object and return
    */

   /**
    * I am doing some operation which can take time - external API call | DB call
    * 
    * Keep waiting here till, you get the response
    * 
    * await is a keyword, that we use, to wait for any processing
    */
/** 
   const response = await new Promise (function(resolve, reject){
       setTimeout(function(){
             resolve("data");
       },2000);
   });
   console.log("Wait finished");

   return response ;
}

console.log("Before calling the function Vishwa");

const variable = vishwa();

console.log("After calling the function Vishwa");
console.log(variable);

console.log("end of the execution"); **/


/**
 * We are going to learn about bind method
 */

const person = {
    name : "Vishwa",
    address : "Bangalore",
    getIntro : function (){
        console.log(this.name + " stays in "+ this.address);
    }
}

person.getIntro();  // scope is inside the object

const func = person.getIntro;  // you have taken out the function from object and assigned to func
func(); // What will be the outcome of this ?

/**
 * Is there a way, still , it should print as before ?
 * 
 * In order to do this, we need to explicitly tie the this keyword to the object
 * 
 * bind()
 */


const func2 = person.getIntro.bind(person); // getIntro function should always be binded to the object

func2();