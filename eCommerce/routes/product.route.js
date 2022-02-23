/**
 * This file will contain the REST URIs mapping with the controllers
 */

const productController = require('../controllers/product.controller');
const  {requestValidator}  = require("../middlewares");

module.exports = (app)=> {

    //Route for creating a new product
    app.post("/ecomm/api/v1/products",[requestValidator.validateProductRequest],  productController.create);


    // Route for getting the list of all the products
    app.get("/ecomm/api/v1/products", productController.findAll);

    //Products based on id
    app.get("/ecomm/api/v1/products/:id", productController.findOne);



    //Update products
    app.put("/ecomm/api/v1/products/:id", productController.update);

    //Delete products
    app.delete("/ecomm/api/v1/products/:id", productController.delete);

    
    //Support the query parameters
    /**
     *   /ecomm/api/v1/products?name=i12
     */
}