
const { authJwt } = require("../middlewares");
const cartController  = require("../controllers/cart.controller")
module.exports = (app)=>{

    //Route for creating the cart
    app.post("/ecomm/api/v1/carts", [authJwt.verifyToken],cartController.create );


    app.put("/ecomm/api/v1/carts/:id", [authJwt.verifyToken],cartController.update );


    //Route for the getting the cart
    app.get("/ecomm/api/v1/carts/:id" ,[authJwt.verifyToken],cartController.getCart );
}