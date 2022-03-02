
const { authJwt } = require("../middlewares");
const cartController  = require("../controllers/cart.controller")
module.exports = (app)=>{

    //Route for creating the cart
    app.post("/ecomm/api/v1/carts", [authJwt.verifyToken],cartController.create );
}