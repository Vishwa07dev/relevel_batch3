/**
 * This file will consists of middlewares for validating the request body
 */

const { category } = require("../models");

/**
 * 
 * const db =  require("../models"); 
 * 
 * category = db.category
 */



/**
 * Validate the request body for categories
 */

const validateCategoryRequest = (req, res, next) => {

    /**
     * check for name
     */
    if (!req.body.name) {
        res.status(400).send({
            message: "Name of the category is not provided"
        });
        return ;
    }

    /**
     * Check for the description
     */
    if (!req.body.description) {
        res.status(400).send({
            message: "Description of the category is not provided"
        });
        return;
    }

    //Go to the controller
    next();
}

/**
 * Validator for the Products request body
 */

const validateProductRequest = (req,res, next)=>{
    /**
     * check for name
     */
     if (!req.body.name) {
        res.status(400).send({
            message: "Name of the provided is not provided"
        })
        return;
    }

    /**
     * Check for the description
     */
     if (!req.body.description) {
        res.status(400).send({
            message: "Description of the product is not provided"
        })
        return;
    }

    /**
     * Check for the code
     */
   
    if(!req.body.cost || req.body.cost <=0){
        res.status(400).send({
            message: "Cost doesn't seem to be in place"
        })
        return;

    }

    /**
     * Validation for the category id
     */

    if(req.body.categoryId){
        console.log("Inside the if")
        //Check if it's valid value
        category.findByPk(req.body.categoryId).then(category=>{
            if(!category){
                res.status(400).send({
                    message: "Category Id is not valid"
                }) 
                return;
            }
            console.log("Did I come here ?");
            next();
        })
    }else{
        res.status(400).send({
            message: "Category Id is not provided"
        })
        return; 
    }
    console.log("Did I come at the last");
    
    
}


module.exports = {
    validateCategoryRequest: validateCategoryRequest,
    validateProductRequest : validateProductRequest
}