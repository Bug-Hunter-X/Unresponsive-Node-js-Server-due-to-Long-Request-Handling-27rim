const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a delay to mimic a long-running task
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a 5-second delay
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});