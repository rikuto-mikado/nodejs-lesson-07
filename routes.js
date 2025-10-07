const fs = require('fs');

// Function declaration - hoisted, has 'this' context
// function requestHeader(req, res) {

// }

// // Arrow function - not hoisted, no 'this', more concise
const requestHeader = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // Write the message to file and redirect to home page
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

// Export the function to use in other files
// module.exports = requestHeader;

// Export multiple values as an object
// module.exports = {
//     handler: requestHeader,
//     someText: 'Some hard coded text'
// }

// Object literal syntax - cleaner, all exports in one place
// Individual property assignment - add exports one by one, can be spread across file
module.exports.handler = requestHeader;
module.exports.someText = 'Some hard coded text';