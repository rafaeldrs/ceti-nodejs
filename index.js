const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const port = process.env.PORT || 8080;

const server = http.createServer(requestListener);
server.listen(port);
