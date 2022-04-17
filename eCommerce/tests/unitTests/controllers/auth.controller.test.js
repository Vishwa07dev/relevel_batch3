const { mockRequest, mockResponse} = require("../interceptor");
const authController = require("../../../controllers/auth.controller");
const newUser = require("../mockData/newUser.json");
const Models = require("../../../models");
const User = Models.user;
const Role = Models.role;


/**
 * Some kind of prep work before the tests are executed.
 */

let req, res ;

beforeEach(()=>{
   //Whatevet that I write here, will be executed before every describe test
   req = mockRequest();
   res = mockResponse();
   

});

/**
 * Test the signup method
 * 
 *     1. Successfull sign up 
 *          1.a. When we provide the roles to a user
 *          1. b. When we don't provide the roles to a user
 *     2. SignUp failed
 * 
 *  We are doing 3 tests, under one broad topic which is SignUp
 */
describe("Testing SignUp method of authController", ()=>{
    
    //1. Successfull sign up , When we provide the roles to a user
    it("Successfull sign up , When we provide the roles to a user",async ()=>{
        
        
        //Testing logic will come here
        //I need to provide some body to the req
        req.body = newUser
        
        /**
         * Mock the User and Role Model
         */
        const resFromCreate = {
            setRoles : async () => Promise.resolve()
        }
        const spyOnCreate =jest.spyOn(User,'create').mockImplementation(()=> Promise.resolve(resFromCreate));
        const spyOnFindAll = jest.spyOn(Role, 'findAll').mockImplementation(()=> Promise.resolve());
         
        //Actual execution of the method
        await authController.signup(req, res); // I need to wait for the signUp method to complete
        
        //Validating of the test passed succesfully or not
        await expect(spyOnCreate).toHaveBeenCalled();
        await expect(spyOnFindAll).toHaveBeenCalled();
        await expect(User.create).toHaveBeenCalled();
        await expect(Role.findAll).toHaveBeenCalled();

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith({message: "User successfully registed"})

    });
  /** 
    //2. Successfull sign up , When we don't provide the roles to a user
    it("Successfull sign up , When we don't provide the roles to a user", ()=>{

    })

    //3. SignUp failed
    it("SignUp failed", ()=>{

    })

    **/
})





/**
 * Test the sign in
 */
