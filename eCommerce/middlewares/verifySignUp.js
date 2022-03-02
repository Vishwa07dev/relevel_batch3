/**
 * Validation for the dupliate email or username
 */

const db = require("../models");
const User = db.user;
const ROLES = db.ROLES;

const checkDuplicateUsernameOrEmail = (req, res, next) => {


    //check for the username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed !, Username already exists"
            });
            return;
        }

        //If user is not already present, then also validate for email
        //Check for the email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed !, email already exists"
                });
                return;
            }
            next();
        })
    })
}


/**
 * Validation for correct roles
 */
checkRolesExisted = (req, res, next)=>{
    if(req.body.roles){
        //I need to iterate through the roles provided by the customer and see if it's valid

        for(let i=0;i<req.body.roles.length;i++){
            //if the req.body.roles[i] is present in the allowed list of roles


            //I am trying to check if roils  ROLES = ['customer', 'admin']
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message : " Failed ! Role doesn't exist" + req.body.roles[i]
                })
                return;
            }

        }
        next();
    }
}

/**
 * Validate if the username and email is valid
 */


const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
}
module.exports = verifySignUp;