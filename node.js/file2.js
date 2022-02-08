const exp = require("constants");

//Object
const car  = {
    brand : "ford",
    model : "Fiesta"
}

//function
const getTheName = () =>{
    return "Vishwa";
}

const hobbies = ['Gaming', 'Flirting' , 'Killing time'];

/**
 * Make this available as a module to the other files
 **/

//module.exports = car ;  // exports the content of this file to other files

//module.exports = getTheName ;  // re-assigned it
/** 
module.exports = {
    car : car,
    getTheName : getTheName,
    hobbies : hobbies
}

**/

/**
 * Another way to acheive the same thing
 */
exports.car = car ;
exports.getTheName = getTheName;
exports.hobbies = hobbies;

/**
 * We can alse export the function while creating it
 */

exports.add = (a,b)=>a+b;   // defining and exporting in the same line