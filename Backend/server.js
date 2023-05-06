const http = require('http');
require('dotenv').config({path: '/.env'})
const app = require('./index')

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${port}/`);
});