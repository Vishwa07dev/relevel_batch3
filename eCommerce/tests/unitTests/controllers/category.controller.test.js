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

    beforeEach(()=>{
        //For creating the category, req should have a body
        req.body = newCategory
    })

    it('test successfull creation of a new category', async () => {

        

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
    it("test failure during the  creation of a new category", async () => {

        
        //Mock and spy
        const spy = jest.spyOn(Category, 'create').mockImplementation(() => Promise.reject(Error("Error while creating")));

        //Execute the method
        await categoryController.create(req, res);

        await expect(spy).toHaveBeenCalled();
        expect(Category.create).toHaveBeenCalledWith(newCategory);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({
            message :  "Some internal error happened"
        });
    });


});


describe("Testing the findAll method", ()=>{



    it("Test the find all mehtod when no query param was passed", async ()=>{

        //Mock the category.findAll method
        const spy = jest.spyOn(Category, 'findAll').mockImplementation(()=>Promise.resolve(newCategory));
        
        //Invoke the method
        await categoryController.findAll(req, res);

        //Validations
        expect(spy).toHaveBeenCalled();
        expect(Category.findAll).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(newCategory);


    });

    it("Test the find all method with the query param", async()=>{
        const queryParam = {
            where : {
                name : "Electronics"
            }
        };

        const spy = jest.spyOn(Category, 'findAll').mockImplementation((queryParam)=> Promise.resolve(newCategory));

        req.query = {
            name : 'Electronics'
        }

        //Execute the method
        await categoryController.findAll(req, res);

        //Validations
        await expect(spy).toHaveBeenCalled();
        expect(Category.findAll).toHaveBeenCalledWith(queryParam);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(newCategory);

    })
})

describe("Testing update method", ()=>{
    it("testing successfull update",async ()=>{

        req.body = newCategory;
        req.params = {
            id:1
        }
        //Category update method has to be mocked

        const spyOnUpdate = jest.spyOn(Category,'update').mockImplementation(()=> Promise.resolve(newCategory));

        const spyOnFindByPK = jest.spyOn(Category, 'findByPk').mockImplementation(()=>Promise.resolve(newCategory));


        //Execute
        await categoryController.update(req, res);

        //Validation

        await expect(spyOnUpdate).toHaveBeenCalled();
        await expect(spyOnFindByPK).toHaveBeenCalled();
        expect(Category.update).toHaveBeenCalled();


    })
})