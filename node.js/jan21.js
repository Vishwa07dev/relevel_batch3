/**
 * Creating the Node.js HTTP server
 * 
 * 
 * We need to Node.js core module : http
 */
//imported the http module
const http = require("http");  //done

/**
 * Create the server
 */

console.log("Before");
const simpleServer = http.createServer((req,res)=>{
    console.log("Server started processing request");

    /**
     * In order to send the data in json format, I need to provide
     * some hint about it
     */
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);  // Set the response status
    res.end(`{"message": "Hello from the server"}`); // Set the response message
    //res.end("Hello from server");
})

console.log("After");

simpleServer.listen(8080);