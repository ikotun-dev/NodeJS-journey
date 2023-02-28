const http = require('http');

// create a server object
const server = http.createServer((req, res) => {
  res.write('Hello, world!'); // write a response to the client
  res.end(); // end the response
});

// define the server listening port
const port = 3000;

// start the server and listen to the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
