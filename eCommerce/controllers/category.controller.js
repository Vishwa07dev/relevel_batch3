/**
 * This file is the contoller aka the waiter in the hotel
 * 
 * This file will have all the logic that is needed for the processing of request
 */


/**
 * Handler for create a new category request
 */

const db = require('../models');
const Category = db.category;

exports.create = (req, res)=>{
    /**
     * Try to create the category object
     */
    //fething the data from the request body
    const category = {
        name : req.body.name,
        description : req.body.description
    }

    //Store this in the db
    Category.create(category).then(category =>{
        console.log(`category name : [ ${category.name}] got inserted in the db`);
        res.status(201).send(category);
    }).catch(err =>{
        console.log(`Issue in inserting the category name : [ ${category.name}]. Error message : ${err.message}`);
        res.status(500).send({
            message :  "Some internal error happened"
        })
    })

}

/**
 * Handler for getting all the categories
 */
exports.findAll = (req, res) =>{

    // localhost:8080/ecomm/api/v1/categories/?name="electronics"  -- Query parama


    /**
     * 
     * Path Param :   /ecomm/api/v1/categories/123   123 path parama
     * 
     * Query Param : /ecomm/api/v1/categories?name=Vishwa  Query param - cosidered to be optional
     * 
     * 
     */

    /**
     * I need to interecpt the query params and use it   : ?name=Vishwa
     */ 

        const categoryName = req.query.name ;  // will get Vishwa stored in categoryName

        /**
         * If I get a query param , which is name, I should apply the name filter
         * else, no filter
         */

         
        let promise ;
        if(categoryName){
          promise = Category.findAll({
                where : {
                    name : categoryName
                }
            })
        }else{
          promise =   Category.findAll()
        }

        promise.then(categories =>{
            res.status(200).send(categories);
        }).catch(err =>{
            res.status(500).send({
                message :  "Some internal error happened"
            })
        })

        
       /** 
        Category.findAll().then(categories =>{
            res.status(200).send(categories);
        }).catch(err =>{
            res.status(500).send({
                message :  "Some internal error happened"
            })
        })**/

}

/**
 * Handler for getting the categories based on the id
 * 
 * 127.0.0.1:8080/ecomm/api/v1/categories/:id
 */

exports.findOne = (req,res)=>{
    const categoryId = req.params.id;

    Category.findByPk(categoryId).then(categoryId =>{
        res.status(200).send(categoryId);
    }).catch(err=>{
        res.status(500).send({
            message :  "Some internal error happened"
        })
    })
}

/**
 * 
 * Provide support for updating the category
 * 
 * PUT 127.0.0.1:8080/ecomm/api/v1/categories/123
 * 
 * JSON Body
 *  */ 
exports.update = (req, res)=>{
    /**
     * I need to parse the request body, just like POST
     */
     const category = {
        name : req.body.name,
        description : req.body.description
    }
    /**
     * I need to know which Category has to be updated
     */
    const categoryId = req.params.id;

    /**
     * It's time to update the Category
     */

    Category.update(category,{
        where : {id : categoryId},
        returning : true
    }).then(updatedCategory =>{
        console.log(updatedCategory);
        /**
         * I need to return the updated category
         */
        Category.findByPk(categoryId).then(categoryRes =>{
            res.status(200).send(categoryRes);
        }).catch(err => {
            res.status(500).send({
                message :  "Some internal error happened"
            })
        })
        
    }).catch(err =>{
        res.status(500).send({
            message :  "Some internal error happened"
        })
    })
}

/**
 * Deleting the category
 */

exports.delete = (req, res)=>{
    const categoryId = req.params.id;

    Category.destroy({
        where : {
            id : categoryId
        }
    }).then(result =>{
        res.status(200).send({
            message : "Successfully deleted the message"
        })
    }).catch(err=>{
        res.status(500).send({
            message :  "Some internal error happened"
        })
    })
}