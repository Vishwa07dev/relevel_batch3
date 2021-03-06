/**
 * This file will be responsible for routing the requests to the
 * correct controller method
 */

const controller = require('../controllers/category.controller');
const  {requestValidator, authJwt}  = require("../middlewares");

/**
 * 
 * 
 * module.exports ={
    requestValidator
  }  
 * const  requestValidator  = require("../middlewares");
 * 
 * requestValidator represent the whole obeject  {
    requestValidator
  }  
 * 
 * { requestValidator } = require("../middlewares");
 * 
 * requestValidator is representing requestValidator the key of the objec
 * 
 */


module.exports = function(app){


    //Route for creating a new category
    app.post('/ecomm/api/v1/categories',[authJwt.verifyToken,authJwt.isAdmin, requestValidator.validateCategoryRequest], controller.create);

    //Route for getting all the categories
    app.get('/ecomm/api/v1/categories', controller.findAll);

    //Route for getting the category based on the category id
    app.get('/ecomm/api/v1/categories/:id', controller.findOne);

    //Route for updating the category
    app.put('/ecomm/api/v1/categories/:id',[authJwt.verifyToken,authJwt.isAdmin,requestValidator.validateCategoryRequest], controller.update);

    //Route for deleting the category
    app.delete('/ecomm/api/v1/categories/:id',[authJwt.verifyToken,authJwt.isAdmin], controller.delete);
    //Route for getting the category based on the name - filter the result based on the name
}