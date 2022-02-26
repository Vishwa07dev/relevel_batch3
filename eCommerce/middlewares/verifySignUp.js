/**
 * Validation for the dupliate email or username
 */

const db = require("../models");
const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res, next)=>{
    

    //check for the username
    User.findOne({
        where : {
            username : req.body.username
        }
    }).then(user =>{
        if(user){
            res.status(400).send({
                message : "Failed !, Username already exists"
            });
            return;
        }
    })

    //Check for the email
    User.findOne({
        where : {
            email : req.body.email
        } 
    }).then(user=>{
        if(user){
            res.status(400).send({
                message : "Failed !, email already exists"
            });
            return;
        }
    })
    next();
}


/**
 * Validation for correct roles
 */

/**
 * Validate if the username and email is valid
 */