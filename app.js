// HTTP Request-Response Cycle:
// 1. Client sends request to server
// 2. Server receives request (req object contains URL, method, headers, body)
// 3. Server processes request and prepares response
// 4. Server sends response to client (res object - write headers, body, end connection)
// 5. Client receives and displays response

const http = require('http');
// Import the route handler from routes.js
const routes = require('./routes');

console.log(routes.someText);

// Create server and use the handler function from routes
const server = http.createServer(routes.handler);

server.listen(3000);
