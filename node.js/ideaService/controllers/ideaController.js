/**
 * This is the controller file 
 * 
 *    -- where the logic resides
 */
const db = require("../models/db"); // object

const IdeaSchema  = db.idea ;  // Idea is comple Idea schema object

//Create a new idea -- function

exports.create = (req, res) =>{
    const idea = {
        author : req.body.author,
        name : req.body.name,
        description : req.body.description
    }
    //Inserting data
    IdeaSchema.create(idea).then(idea =>{
        res.status(201).send(idea);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Internal Error"
        });
    });
};

//Getting all the idea from the DB
exports.findAll = (req, res)=>{
    IdeaSchema.findAll().then(ideas =>{
        res.status(200).send(ideas);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Internal Error"
        });
    });
};
