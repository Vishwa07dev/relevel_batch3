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
        Category.findAll().then(categories =>{
            res.status(200).send(categories);
        }).catch(err =>{
            res.status(500).send({
                message :  "Some internal error happened"
            })
        })
}

/**
 * Handler for getting the categories based on the id
 * 
 * 127.0.0.1:8080/ecomm/api/v1/categories/:id
 */

exports.findOne = (req,res)=>{
    const categoryId = req.params.id;

    Category.findByPk(categoryId).then(categoryId =>{
        res.status(201).send(categoryId);
    }).catch(err=>{
        res.status(500).send({
            message :  "Some internal error happened"
        })
    })
}