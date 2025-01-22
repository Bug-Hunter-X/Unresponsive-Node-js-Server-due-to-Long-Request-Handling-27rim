const http = require('http');

const server = http.createServer((req, res) => {
  // Set a timeout for the request
  req.on('close', () => {
    console.log('Request closed');
  });
  const timeout = 2000; // Set a timeout of 2 seconds
  const timeoutId = setTimeout(() => {
    res.writeHead(408, { 'Content-Type': 'text/plain' });
    res.end('Request timed out');
  }, timeout);
  // Simulate a delay to mimic a long-running task
  setTimeout(() => {
    clearTimeout(timeoutId); // Clear the timeout if the request completes within the time limit
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a 5-second delay
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});