/**
 * Testing callbacks
 */
/**
test("testing callback", ()=>{
    //Test condition
    function callback(data){
        expect(data).toBe("Mohan");
    }
    fetchData(callback);
});

**/

test("testing callback", (done)=>{
    //Test condition
    function func(data){
        try{
        expect(data).toBe("Vishwa");
        done();
        }catch(err){
            done(err);
        }
    }
    fetchData(func);
})

/**
 * 
 * This is the function I want to test
 */
function fetchData(callback){
    setTimeout(()=>{
        callback("Vishwa");
    }, 3000);
}

/**
 * Testing Promises
 */

/**
 * Function that returns a Promise
 */
function promiseFunc(){
    return new Promise((resolve, reject)=>{
        resolve("Vishwa");
    })
}
/**
 * I want to be test and confirm that when promise is succesfull
 * the argument passed in the resolve method is "Vishwa"
 */
test("testing Promises", () =>{
    return promiseFunc().then((msg)=>{
        expect(msg).toBe("Vishwa");
    })
})