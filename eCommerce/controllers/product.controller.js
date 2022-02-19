/**
 * This is the controller class for the Product resource
 */

/**
 * Handler for creating product
 */


const model = require('../models');
const Product = model.product; // It gets me the PRODUCT schema object - CRUD opera
exports.create = (req, res)=>{

    /**
     * Get the req body
     */

    const prod = {
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost
    } 
    /**
     * Store this product in DB
     */
    Product.create(prod).then(product=>{
        console.log("Product added in the database with name ", prod.name);
        res.status(201).send(product);
    }).catch(err=>{
        console.log("Error while adding the product with name ", prod.name);
        res.status(500).send({
            message: "Some internal error happened"
        })
    })

}


/**
 * Handler for get all products
 */

exports.findAll = (req, res)=>{

    Product.findAll().then(products=>{
        res.status(200).send(products);
    }).catch(err=>{
        res.status(500).send({
            message: "Some internal error happened"
        })
    })
}

/**
 * Handler for get products based on product id
 */



/**
 * Handler for updating the product
 */

/**
 * Handler for deleting the product
 */