/**
 * This file will contain the REST URIs mapping with the controllers
 */

const productController = require('../controllers/product.controller');

module.exports = (app)=> {

    //Route for creating a new product
    app.post("/ecomm/api/v1/products", productController.create);


    // Route for getting the list of all the products
    app.get("/ecomm/api/v1/products", productController.findAll);

    //Products based on id


    //Update products

    //Delete products

    //Support the query parameters
}