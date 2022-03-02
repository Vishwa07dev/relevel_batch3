const db  = require("../models");

const Cart = db.cart;

/**
 * Handler for creating the cart request
 */
exports.create = (req, res) =>{
    
    const cart = {
        userId : req.userId
    };


    //If the user has also provided the item ids while creating cart
    //const itemId = req.body.items;

    Cart.create(cart).then(cart=>{
        res.status(201).send(cart)
    }).catch(err=>{
        res.status(500).send({
            message : "Some internal error happened"
        })
    })
    
    
}



/**
 * Handler for updating the cart
 */


/**
 * Search for a cart based on the cart id
 */