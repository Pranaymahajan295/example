const http = require('http');  // Import the http module
const url = require('url');    // Import the url module

const server = http.createServer((a, b) =>) {
    a.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header
    a.write('Hello, World!'); // Send the response body
    a.end(); // End the response
};