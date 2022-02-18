/**
 * This file will be responsible for routing the requests to the
 * correct controller method
 */

const controller = require('../controllers/category.controller');


module.exports = function(app){


    //Route for creating a new category
    app.post('/ecomm/api/v1/categories', controller.create);

    //Route for getting all the categories
    app.get('/ecomm/api/v1/categories', controller.findAll);

    //Route for getting the category based on the category id
    app.get('/ecomm/api/v1/categories/:id', controller.findOne);
}