const requestValidator = require("./requestValidator");
const verifySignUp = require("./verifySignUp");
const authJwt = require("./authjwt");


/**
 * This is returning the object
 */
module.exports ={
    requestValidator,
    verifySignUp,
    authJwt
}