
/**
 * How to define a test ?
 * 
 *    -- Test also as a function
 * 
 *             1. Name of the test
 *             2. Callback function
 */


//Execute test function provided by Jest
test("First test in JS" , ()=>{
    //Logic for testing
    console.log("Hello testing");
})

test("Second test in JS" , ()=>{
    //Logic for testing
    console.log("Hello testing again");
});


/**
 * test to compare two objects
 */

test("Testing two objects", ()=>{
    
    //Actual object
    const data = {
        one: 1
        
    };
    data.two = 2 ;

    //Check actual with expected

    expect(data).toEqual({two:2, one:1});//pass

    //expect(data).toBe({two:2, one:1});  //fails
});


/**
 * I wand to test the sum method return in the file1.js
 */
const {sum , contains}= require('./file1');

test("Testing the sum method", ()=>{

    //Expectation vs actuals
    expect(sum(5,6)).toEqual(11);

    expect(sum(1,2)).not.toBe(11);
})


/**
 * Testing for null
 */

test('null', ()=>{
    let n = null ;
    expect(n).toBeNull(); // Matchers
})

/**
 * Testing for undefined
 */

test("undefined" , ()=>{
    let n = undefined ;
    expect(n).toBeUndefined();  // Matchers
})

/**
 * testing for something properly defined
 */
test("Properly defined", ()=>{
    let n = 22 ;
    expect(n).toBeDefined();
})

/**
 * Testing the boolean values
 *
 */
test("Testing the boolean values", ()=>{
    let a = 7;
    let b = true;
    let c= undefined
    expect(a).toBeTruthy();  // When we expected true
    expect(b).toBeTruthy();
    expect(c).toBeFalsy();   // When we expect false
});


test("Testing the contains method", ()=>{

    expect(contains([3,7,2,1], 7)).toBeTruthy();
})

/**
 * Scenarios to test the numbers
 */

test("Testing numbers", ()=>{
    const num = 4 ;

    expect(num).toBe(4);
    expect(num).toEqual(4);
    expect(num).toBeGreaterThan(3);

    expect(num).toBeGreaterThanOrEqual(3);

    expect(num).toBeLessThan(5);
    expect(num).toBeLessThanOrEqual(5);
});

/** Strings */

test("Testing Strings", ()=>{
    expect("Vishwa").toMatch(/shw/);   // String matching
    expect("Vishwa").not.toMatch(/abc/); 
})

/**
 * Handing Arrays or collection of eleemtns
 */
test("Arrays" , ()=>{
    const persons = [
        "Vishwa",
        "Mohan",
        "Shivani",
        "Shyama"
    ];

    expect(persons).toContain("Shivani");
    expect(persons).not.toContain("Abhi");
})

/**
 * How test for the exceptions
 */

function exceptionThrower(){
    throw new Error("Exception, is what you have been looking for");
}

test("Testing exception", ()=>{
    expect(()=>exceptionThrower()).toThrow();
    expect(()=> exceptionThrower()).toThrow(Error);
    expect(()=> exceptionThrower()).toThrow(Error("Exception, is what you have been looking for"));

    expect(()=> exceptionThrower()).toThrow(/looking/);
})


