const router = require("./router.js");
//Problem: Find simple way to look at user's badge count and JS points from a web browser
//Solution: Use node.js to look up profiles and server our template via HTTP


//Create a web server
const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
	router.home(request, response);
	router.user(request, response);
}).listen(port);
console.log(`Server listening at port ${port}`);