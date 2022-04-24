const { mockRequest, mockResponse } = require("../interceptor");
const newCategory = require("../mockData/newCategory.json");
const Category = require("../../../models").category;
const categoryController = require("../../../controllers/category.controller");


/**
 * I need to test the functionality of creating Category
 */

/**
 * Before the testing is done, we need to have the req and res objects
 * 
 * Normally req and res, will be passed by route layer, but here since there is no
 * routes, we need to create mock req and resp.
 * 
 * Mocked req and resp is provided by inteceptor.js file
 */
let req, res;
beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
})

describe("Teating create category method", () => {

    it('test successfull creation of a new category',async () => {

        //For creating the category, req should have a body
        req.body = newCategory

        //Mock and spy on Category create method
        const spy = jest.spyOn(Category, 'create').mockImplementation((newCategory) => Promise.resolve(newCategory));
        
        //Execute the create method

        await categoryController.create(req, res);

        //Validation

        //I will expect spy to be called
        expect(spy).toHaveBeenCalled();
        // I will expect Category create method to be called
        expect(Category.create).toHaveBeenCalledWith(newCategory);
        // res status should be set to 201
        expect(res.status).toHaveBeenCalledWith(201);
        // res send is sending the newCategory
        expect(res.send).toHaveBeenCalledWith(newCategory);
 
    });

    /**
     * Testing the failure scenario
     */
    it("test failure during the  creation of a new category", ()=>{
        
    })


})