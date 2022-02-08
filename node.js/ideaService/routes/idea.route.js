/**
 *  URIs +HTTP Verb = Restful APIs
 */

const ideaController = require("../controllers/ideaController");
const { idea } = require("../models/db");

module.exports = (app)=>{
     
    // 127.0.0.1:8080/ideaService/v1/ideas
    //Route for creation of Idea
    app.post("/ideaService/v1/ideas" , ideaController.create);


    //Need to get all ideas
    app.get("/ideaService/v1/ideas" , ideaController.findAll);



}