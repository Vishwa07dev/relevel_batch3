const exp = require("constants");

/**
 * Creating and exporting a module
 */
const getTheName = () =>{
    return 'Vishwa';     
}



const  car  = {
    brand :"ford",
    model : "Fiesta"
}
/**
 * exporting multiple objects 
 */
/** 
module.exports = {
    getTheName : getTheName,
    car : car
};
**/

/**
 * Another way to do the same
 */

exports.getTheName = getTheName;
exports.car = car;

/**
 * Another way of exporting a function as we create is like this
 */
exports.add = (a,b) =>{
    return a+b;
}