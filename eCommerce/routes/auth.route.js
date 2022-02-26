
const authController = require("../controllers/auth.controller")
/**
 * Define for the user creation
 */

module.exports = (app) =>{
    app.post("/ecomm/api/v1/auth/signup", authController.signup);
    app.post("/ecomm/api/v1/auth/signin", authController.signin);
}