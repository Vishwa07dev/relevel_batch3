/**
 * We will see how the morgan middleware can be used 
 * 
 * It will be used to logging the request
 */

const express = require('express');
const morgan = require('morgan');

console.log(morgan);

const app = express();

/**
 * Make use of morgan middleware
 */

app.use(morgan("short"));


app.listen(5555, ()=>{
    console.log("Applicated started and listening on 5555");
})