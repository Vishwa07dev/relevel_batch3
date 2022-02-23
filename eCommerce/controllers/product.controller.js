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
        cost : req.body.cost,
        categoryId : req.body.categoryId
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

    const productName  = req.query.name ;
    console.log(productName);

    var promise ;

    if(productName){
        console.log("Inside if");
        promise = Product.findAll({
            where :{
                name : productName
            }
        });
    }else{
        console.log("Inside else");
        promise = Product.findAll();
    }

    promise.then(products=>{
        res.status(200).send(products);
    }).catch(err=>{
        res.status(500).send({
            message: "Some internal error happened"
        })
    })
}

/**
 * Handler for get products based on product id
 * 
 * /ecomm/v1/api/products/123
 */

exports.findOne = (req, res)=>{

    const productId  = req.params.id ;

    Product.findByPk(productId).then(product =>{
        res.status(200).send(product);
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error occured"
        })
    })
}



/**
 * Handler for updating the product
 */

exports.update = (req, res)=>{

    const product = {
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost
    }

    const productId = req.params.id;

    /**
     * Update the product
     */

    Product.update(
        product, {
            returning : true,
            where : {
                id : productId
            }
        }
    ).then(updatedProduct=>{
        /**
         * I need to fetch the updated object
         */
         Product.findByPk(productId).then(product =>{
            res.status(200).send(product);
        }).catch(err=>{
            res.status(500).send({
                message : "Internal error occured"
            })
        })
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error occured"
        })
    })

}

/**
 * Handler for deleting the product
 */

exports.delete = (req, res)=>{
    const productId = req.params.id;

    Product.destroy({
        where :{
            id: productId
        }
    }).then( result =>{
        res.status(200).send({
            message: "Deleted"
        })
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error occured"
        })
    })
}